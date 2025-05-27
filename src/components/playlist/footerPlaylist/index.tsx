import { formatTime, handleSeek } from '../../../pages/playlist/util';
import * as _ from './style';

interface FooterPlaylistProps {
    playerState: {
        playlist: any[];
        currentIdx: number;
        isMuted: boolean;
        isPaused: boolean;
        isPlaying: boolean;
        currentTime: number;
        duration: number;
        playerRef: React.MutableRefObject<YT.Player | null>;
        handlePrev: () => void;
        handleNext: () => void;
        handleMute: () => void;
        handlePauseToggle: () => void;
        setIsPlaying: (v: boolean) => void;
        setIsPaused: (v: boolean) => void;
        setCurrentTime: (v: number) => void;
        setIsFullscreen: (v: boolean) => void;
    };
}


const FooterPlaylist = ({ playerState }: FooterPlaylistProps) => {
    const {
        playlist,
        currentIdx,
        isPaused,
        currentTime,
        duration,
        playerRef,
        handlePauseToggle,
        setCurrentTime,
        setIsFullscreen,
    } = playerState;

    const music = playlist[currentIdx];
    const progress = duration ? (currentTime / duration) * 100 : 0;

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = Number(e.target.value);
        setCurrentTime(newTime);
        if (playerRef.current) {
            playerRef.current.seekTo(newTime, true);
        }
    };

    if (!music) return null;

    return (
        <>
            <_.FooterBar onClick={() => setIsFullscreen(true)}>
                <_.FooterInfo>
                    <_.FooterTitle>{music.title}</_.FooterTitle>
                    <_.FooterSubtitle>
                        {music.subTitle || music.channel}
                        <span style={{ fontSize: 10, margin: '0 4px' }}>●</span>
                        Listen Again
                    </_.FooterSubtitle>
                </_.FooterInfo>
                <_.ProgressSection>
                    <_.ProgressInput
                        type="range"
                        min={0}
                        max={duration}
                        value={currentTime}
                        step={1}
                        onChange={handleSeek}
                        progress={progress}
                        onClick={e => e.stopPropagation()}
                        onMouseDown={e => e.stopPropagation()}
                        onTouchStart={e => e.stopPropagation()}
                    />
                </_.ProgressSection>
                <_.FooterPlayBtn
                    onClick={e => { e.stopPropagation(); handlePauseToggle(); }}
                >
                    {isPaused ? "▶" : "❚❚"}
                </_.FooterPlayBtn>
            </_.FooterBar>
        </>
    )
}

export default FooterPlaylist;
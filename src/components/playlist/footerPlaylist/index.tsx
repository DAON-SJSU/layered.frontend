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
                <input
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    onClick={e => e.stopPropagation()}
                    onMouseDown={e => e.stopPropagation()}
                    onTouchStart={e => e.stopPropagation()}
                    onChange={e => { e.stopPropagation(); handleSeek(e, playerRef, setCurrentTime); }}
                    style={{ flex: 1 }}
                />
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
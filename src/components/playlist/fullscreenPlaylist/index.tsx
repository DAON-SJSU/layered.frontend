import * as _ from './style';
import { formatTime } from '../../../pages/playlist/util';


interface FullscreenPlaylistProps {
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
        setIsFullscreen?: (v: boolean) => void;
    };
}

const FullscreenPlaylist = ({ playerState }: FullscreenPlaylistProps) => {
    const {
        playlist,
        currentIdx,
        isPaused,
        currentTime,
        duration,
        playerRef,
        handlePrev,
        handleNext,
        handlePauseToggle,
        setCurrentTime,
        setIsFullscreen,
    } = playerState;

    const music = playlist[currentIdx];
    if (!music) return null;

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = Number(e.target.value);
        setCurrentTime(newTime);
        if (playerRef.current) {
            playerRef.current.seekTo(newTime, true);
        }
    };

    return (
        <_.FullscreenWrapper>
            <_.TopBar>
                <_.BackBtn onClick={() => setIsFullscreen && setIsFullscreen(false)}>⌄</_.BackBtn>
                <_.AlbumTitle>{music.album || music.title}</_.AlbumTitle>
                <_.MoreBtn>⋯</_.MoreBtn>
            </_.TopBar>
            <_.AlbumArt src={music.imgUrl || '/default-thumb.png'} alt="album" />
            <_.MusicInfo>
                <_.MusicTitle>{music.title}</_.MusicTitle>
                <_.MusicArtist>{music.channel}</_.MusicArtist>
            </_.MusicInfo>
            <_.ProgressSection>
                <_.ProgressInput
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    step={1}
                    onChange={handleSeek}
                />
                <_.ProgressTime>
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </_.ProgressTime>
            </_.ProgressSection>
            <_.ControlSection>
                <_.ControlBtn>🔀</_.ControlBtn>
                <_.ControlBtn onClick={handlePrev}>⏮️</_.ControlBtn>
                <_.PlayPauseBtn onClick={handlePauseToggle}>
                    {isPaused ? "▶️" : "⏸️"}
                </_.PlayPauseBtn>
                <_.ControlBtn onClick={handleNext}>⏭️</_.ControlBtn>
                <_.ControlBtn>🔁</_.ControlBtn>
            </_.ControlSection>
            <_.MusicMeta>
                <div>VIEW 71,513,868</div>
                <div>7 years ago</div>
            </_.MusicMeta>
        </_.FullscreenWrapper>
    );
};

export default FullscreenPlaylist;
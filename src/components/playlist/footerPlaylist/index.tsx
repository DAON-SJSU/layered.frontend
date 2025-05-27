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
        isMuted,
        isPaused,
        isPlaying,
        currentTime,
        duration,
        playerRef,
        handlePrev,
        handleNext,
        handleMute,
        handlePauseToggle,
        setIsPlaying,
        setIsPaused,
        setCurrentTime,
        setIsFullscreen,
    } = playerState;

    if (!isPlaying) return null;
    return (
        <>    
            <_.FooterBar onClick={() => setIsFullscreen(true)}>
                <div style={{ fontWeight: 600, marginBottom: 4, fontSize: 14 }}>
                    {playlist[currentIdx].title}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button onClick={handlePrev} disabled={currentIdx === 0}>⏮️</button>
                    <button onClick={handleMute}>{isMuted ? "🔇" : "🔊"}</button>
                    <button onClick={handlePauseToggle}>
                        {isPaused ? "▶️" : "⏸️"}
                    </button>
                    <button onClick={() => { setIsPlaying(false); setIsPaused(false); }}>⏹️</button>
                    <input
                        type="range"
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={e => handleSeek(e, playerRef, setCurrentTime)}
                        style={{ flex: 1 }}
                    />
                    <button onClick={handleNext} disabled={currentIdx === playlist.length - 1}>⏭️</button>
                    <span style={{ fontSize: 12, marginLeft: 8 }}>
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                </div>
            </_.FooterBar>
        </>
    )
}

export default FooterPlaylist;
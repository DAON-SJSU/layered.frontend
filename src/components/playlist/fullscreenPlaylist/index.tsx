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
    };
}


const FullscreenPlaylist = ({ playerState }: FooterPlaylistProps) => {
    return(
        <>
            h1
        </>
    )
}

export default FullscreenPlaylist;
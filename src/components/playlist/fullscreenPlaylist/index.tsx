import * as _ from './style';
import { formatTime, getYoutubeId } from '../../../pages/playlist/util';
import Fastforward from '../../../assets/etc/fastforward.svg';
import Rewind from '../../../assets/etc/rewind.svg';

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

    // 유튜브 썸네일 URL 생성 함수
    const getYoutubeThumbnail = (videoUrl: string) => {
        const id = getYoutubeId(videoUrl);
        return `https://img.youtube.com/vi/${id}/sddefault.jpg`;
    };

    // 사용 예시
    const thumbnailUrl = getYoutubeThumbnail(music.url);

    const progress = duration ? (currentTime / duration) * 100 : 0;

    return (
        <_.FullscreenWrapper>
            <_.TopBar>
                <_.BackBtn onClick={() => setIsFullscreen && setIsFullscreen(false)}>⌄</_.BackBtn>
                <_.AlbumTitle>{music.album || music.title}</_.AlbumTitle>
                <_.MoreBtn>⋯</_.MoreBtn>
            </_.TopBar>
            <_.AlbumArt src={thumbnailUrl} alt="album" />
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
                    progress={progress}
                />
                <_.ProgressTime>
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </_.ProgressTime>
            </_.ProgressSection>
            <_.ControlSection>
                <_.ControlBtn onClick={handlePrev}><img src={Rewind} /></_.ControlBtn>
                <_.PlayPauseBtn onClick={handlePauseToggle}>
                    {isPaused ? "▶" : "❚❚"}
                </_.PlayPauseBtn>
                <_.ControlBtn onClick={handleNext}><img src={Fastforward} /></_.ControlBtn>
            </_.ControlSection>
            <_.MusicMeta>
                <div>{music.views}</div>
                <div>{music.publish_time}</div>
            </_.MusicMeta>
        </_.FullscreenWrapper>
    );
};

export default FullscreenPlaylist;
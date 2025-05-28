import HeaderBar from "../../components/headerBar";
import * as _ from './style';
import Play from '../../assets/etc/PlayBtn.png';
import MusicType from "../../components/musicType";
import Music from "../../components/music";
import AngerImg from '../../assets/emotions/Anger.png';
import { musicList } from './data';
import { useRef, useState } from "react";
import YouTube, { type YouTubeProps } from 'react-youtube';
import { getYoutubeId, onStateChange } from './util';
import FooterPlaylist from "../../components/playlist/footerPlaylist";
import FullscreenPlaylist from "../../components/playlist/fullscreenPlaylist";
import { useParams } from "react-router-dom";
import { emotionMap } from "./emotionMap";
import PlaylistMusicType from "../../components/playlistMusicType";

const Playlist = () => {
    const [playlist, setPlaylist] = useState(musicList);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const playerRef = useRef<YT.Player | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // 감정 결과에 따른 화면 변경
    const { emotion } = useParams();

    const config = emotionMap[emotion ?? ""];

    if (!config) {
        return <div>잘못된 감정입니다.</div>;
    }

    const { label, image, bgTop, bgBottom } = config;

    // 일시정지/재생 토글
    const handlePauseToggle = () => {
        if (!playerRef.current) return;
        if (isPaused) {
            playerRef.current.playVideo();
            setIsPaused(false);
        } else {
            playerRef.current.pauseVideo();
            setIsPaused(true);
        }
    };

    // 한 곡이 끝나면 다음 곡으로
    const handleEnd = () => {
        if (currentIdx < playlist.length - 1) {
            setCurrentIdx(currentIdx + 1);
        } else {
            setIsPlaying(false);
        }
    };

    // 곡이 바뀌거나 재생 시작 시 일시정지 해제
    const handlePlayAll = () => {
        setIsPlaying(true);
        setCurrentIdx(0);
        setIsPaused(false);
    };
    // 개별 곡 클릭 시 해당 곡만 재생
    const handlePlayOne = (idx: number) => {
        setIsPlaying(true);
        setCurrentIdx(idx);
        setIsPaused(false);
    };

    // 유튜브 플레이어 준비
    const onReady = (e: YouTubeProps['onReady'] extends ((event: infer E) => any) ? E : any) => {
        playerRef.current = e.target;
        e.target.setVolume(isMuted ? 0 : 100);
        setDuration(e.target.getDuration());
        e.target.playVideo();
    };

    // 유튜브 플레이어 상태 변화
    const onStateChangeInternal = (e: YT.OnStateChangeEvent) => {
        onStateChange(e, playerRef, setCurrentTime);
    };

    // 음소거 토글
    const handleMute = () => {
        setIsMuted((prev) => {
            if (playerRef.current) {
                if (!prev) playerRef.current.mute();
                else playerRef.current.unMute();
            }
            return !prev;
        });
    };

    // 이전/다음 곡
    const handlePrev = () => {
        if (currentIdx > 0) {
            setCurrentIdx(currentIdx - 1);
            setCurrentTime(0);
            setIsPaused(false);
        }
    };
    const handleNext = () => {
        if (currentIdx < playlist.length - 1) {
            setCurrentIdx(currentIdx + 1);
            setCurrentTime(0);
            setIsPaused(false);
        }
    };

    const playerState = {
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
    };

    return (
        <>
            <_.Mobile>
                <_.Void ></_.Void>
                <HeaderBar text={"Home"} />
                <_.Container>
                    <_.TopDiv bg={bgTop}>
                        <_.EmotionImg src={image}></_.EmotionImg>
                        <_.EmotionTitle>Play for you</_.EmotionTitle>
                    </_.TopDiv>
                    <_.BottomDiv bg={bgBottom}>
                        <_.BottomDivSection1>
                            <_.BottomDivSection1Wrapper>
                                <_.BottomDivSection1Div1>
                                    <_.Description>
                                        These songs heard what your heart couldn’t say.
                                    </_.Description>
                                    <_.Emotion>
                                        <_.Icon_S>sentiment_extremely_dissatisfied</_.Icon_S>
                                        <_.EmotionName>{label}</_.EmotionName>
                                    </_.Emotion>
                                    <_.PlaylistDuration>
                                        Your playlist — 29m 30s of feeling
                                    </_.PlaylistDuration>
                                </_.BottomDivSection1Div1>
                            </_.BottomDivSection1Wrapper>
                            <_.BottomDivSection1Div2>
                                <_.TagBar>
                                    <PlaylistMusicType music={"K-POP"} />
                                    <PlaylistMusicType music={"JPOP"} />
                                    <PlaylistMusicType music={"POP"} />
                                </_.TagBar>
                                <_.PlayBtn src={Play} onClick={handlePlayAll}></_.PlayBtn>
                            </_.BottomDivSection1Div2>
                        </_.BottomDivSection1>
                        <_.BottomDivSection2>
                            {playlist.map((music, idx) => {
                                return (
                                    <Music
                                        key={music.url + idx}
                                        title={music.title}
                                        subTitle={music.channel}
                                        url={music.url}
                                        onPlay={() => handlePlayOne(idx)}
                                        isPlaying={isPlaying && currentIdx === idx}
                                    />
                                )
                            }
                            )}
                        </_.BottomDivSection2>
                    </_.BottomDiv>
                </_.Container>

                {isPlaying && (
                    <YouTube
                        videoId={getYoutubeId(playlist[currentIdx].url)}
                        opts={{
                            height: '0',
                            width: '0',
                            playerVars: {
                                autoplay: 1,
                                controls: 0,
                                modestbranding: 1,
                                rel: 0,
                            },
                        }}
                        onEnd={handleEnd}
                        onReady={onReady}
                        onStateChange={onStateChangeInternal}
                    />
                )}
                {isPlaying && !isFullscreen && (
                    <FooterPlaylist playerState={playerState} />
                )}
                {isPlaying && isFullscreen && (
                    <FullscreenPlaylist playerState={playerState} />
                )}
            </_.Mobile>
        </>
    );
}

export default Playlist;
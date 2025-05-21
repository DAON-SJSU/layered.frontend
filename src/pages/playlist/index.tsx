import HeaderBar from "../../components/headerBar";
import * as _ from './style';
import Play from '../../assets/etc/PlayBtn.png';
import MusicType from "../../components/musicType";
import Music from "../../components/music";
import AngerImg from '../../assets/emotions/Anger.png';
import { musicList } from './data';
import { useRef, useState } from "react";
import YouTube, { type YouTubeProps } from 'react-youtube';

const getYoutubeId = (url: string) => {
    const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&#?]+)/;
    const match = url.match(regExp);
    return match ? match[1] : '';
}; //youtube url -> id로 파싱

const Playlist = () => {
    const [playlist, setPlaylist] = useState(musicList);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const playerRef = useRef<YT.Player | null>(null);

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
    const onStateChange = (e: YT.OnStateChangeEvent) => {
        if (e.data === 1) { // playing
            const interval = setInterval(() => {
                if (playerRef.current) {
                    setCurrentTime(playerRef.current.getCurrentTime());
                }
            }, 500);
            // @ts-ignore
            playerRef.current._interval = interval;
        } else {
            // @ts-ignore
            if (playerRef.current && playerRef.current._interval) {
                // @ts-ignore
                clearInterval(playerRef.current._interval);
            }
        }
    };

    // 타임라인 스크롤
    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = Number(e.target.value);
        setCurrentTime(time);
        if (playerRef.current) {
            playerRef.current.seekTo(time, true);
        }
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

    // 시간 포맷
    const formatTime = (sec: number) => {
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    console.log(playlist);
    return (
        <>
            <_.Mobile>
                <_.Void ></_.Void>
                <HeaderBar text={"Home"} />
                <_.Container>
                    <_.TopDiv>
                        <_.EmotionImg src={AngerImg}></_.EmotionImg>
                        <_.EmotionTitle>Play for you</_.EmotionTitle>
                    </_.TopDiv>
                    <_.BottomDiv>
                        <_.BottomDivSection1>
                            <_.BottomDivSection1Wrapper>
                                <_.BottomDivSection1Div1>
                                    <_.Description>
                                        These songs heard what your heart couldn’t say.
                                    </_.Description>
                                    <_.Emotion>
                                        <_.Icon_S>sentiment_extremely_dissatisfied</_.Icon_S>
                                        <_.EmotionName>Anger</_.EmotionName>
                                    </_.Emotion>
                                    <_.PlaylistDuration>
                                        Your playlist — 29m 30s of feeling
                                    </_.PlaylistDuration>
                                </_.BottomDivSection1Div1>
                            </_.BottomDivSection1Wrapper>
                            <_.BottomDivSection1Div2>
                                <_.TagBar>
                                    <MusicType music={"K-POP"} isSelected={true} />
                                    <MusicType music={"JPOP"} isSelected={true} />
                                    <MusicType music={"POP"} isSelected={true} />
                                </_.TagBar>
                                <_.PlayBtn src={Play} onClick={handlePlayAll}></_.PlayBtn>
                            </_.BottomDivSection1Div2>
                        </_.BottomDivSection1>
                        <_.BottomDivSection2>
                            {playlist.map((music, idx) => {
                                return (
                                    <Music
                                        key={music.url + idx} // key 중복 방지
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
        {/* 플레이어 푸터는 Mobile 컨테이너 안에 위치 */}
        {isPlaying && (
            <>
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
                    onStateChange={onStateChange}
                />
                <div style={{
                    position: "fixed",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    background: "#222",
                    color: "#fff",
                    padding: "12px 16px",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: 1000,
                    maxWidth: "430px",
                    margin: "0 auto"
                }}>
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
                            onChange={handleSeek}
                            style={{ flex: 1 }}
                        />
                        <button onClick={handleNext} disabled={currentIdx === playlist.length - 1}>⏭️</button>
                        <span style={{ fontSize: 12, marginLeft: 8 }}>
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                    </div>
                </div>
            </>
        )}
    </_.Mobile>
</>
    );
}

export default Playlist;
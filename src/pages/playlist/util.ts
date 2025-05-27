import type { ChangeEvent } from "react";
import type { YT } from "react-youtube";

// 유튜브 url -> id로 파싱
export const getYoutubeId = (url: string) => {
    const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&#?]+)/;
    const match = url.match(regExp);
    return match ? match[1] : '';
};

// 시간 포맷
export const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
};

// 유튜브 플레이어 상태 변화
export const onStateChange = (
    e: YT.OnStateChangeEvent,
    playerRef: React.MutableRefObject<YT.Player | null>,
    setCurrentTime: (t: number) => void
) => {
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
export const handleSeek = (
    e: ChangeEvent<HTMLInputElement>,
    playerRef: React.MutableRefObject<YT.Player | null>,
    setCurrentTime: (t: number) => void
) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (playerRef.current) {
        playerRef.current.seekTo(time, true);
    }
};
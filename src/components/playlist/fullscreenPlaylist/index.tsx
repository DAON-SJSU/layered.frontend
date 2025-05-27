import React, { useState } from 'react';
import * as _ from './style';
import { formatTime, getYoutubeId } from '../../../pages/playlist/util';
import Fastforward from '../../../assets/etc/fastforward.svg';
import Rewind from '../../../assets/etc/rewind.svg';

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

    const [disappear, setDisappear] = useState(false);

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

    const thumbnailUrl = getYoutubeThumbnail(music.url);
    const progress = duration ? (currentTime / duration) * 100 : 0;

    // 뒤로가기 버튼 클릭 시 애니메이션 후 닫기
    const handleBack = () => {
        setDisappear(true);
        setTimeout(() => {
            setIsFullscreen && setIsFullscreen(false);
        }, 450); // 애니메이션 시간과 맞춤
    };

    return (
        <_.FullscreenWrapper disappear={disappear}>
            <_.TopBar>
                <_.BackBtn onClick={handleBack}>⌄</_.BackBtn>
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
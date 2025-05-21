import HeaderBar from "../../components/headerBar";
import * as _ from './style';
import Play from '../../assets/etc/PlayBtn.png';
import MusicType from "../../components/musicType";
import Music from "../../components/music";
import AngerImg from '../../assets/emotions/Anger.png';
import { musicList } from './data';
import { useRef, useState } from "react";
import YouTube from 'react-youtube';

const getYoutubeId = (url: string) => {
    const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&#?]+)/;
    const match = url.match(regExp);
    return match ? match[1] : '';
}; //youtube url -> id로 파싱

const Playlist = () => {
    const [playlist, setPlaylist] = useState(musicList);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);
    const playerRef = useRef<any>(null);

    const handlePlayAll = () => {
        setIsPlaying(true);
        setCurrentIdx(0);
        console.log(getYoutubeId(playlist[currentIdx].url)); // 실제로 어떤 값이 나오는지 확인
    };

    // 한 곡이 끝나면 다음 곡으로
    const handleEnd = () => {
        if (currentIdx < playlist.length - 1) {
            setCurrentIdx(currentIdx + 1);
        } else {
            setIsPlaying(false);
        }
    };

    // 개별 곡 클릭 시 해당 곡만 재생
    const handlePlayOne = (idx: number) => {
        setIsPlaying(true);
        setCurrentIdx(idx);
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
                                        key={music.url}
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
                            controls: 1,
                            modestbranding: 1,
                            rel: 0,
                        },
                    }}
                    onEnd={handleEnd}
                    onReady={e => e.target.setVolume(100)}
                />
            )}
            </_.Mobile>
        </>
    );
}

export default Playlist;
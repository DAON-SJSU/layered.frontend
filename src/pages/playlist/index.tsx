import HeaderBar from "../../components/headerBar";
import * as _ from './style';
import Play from '../../assets/etc/PlayBtn.png';
import MusicType from "../../components/musicType";
import Music from "../../components/music";
import AngerImg from '../../assets/emotions/Anger.png';
import { musicList } from './data';
import { useState } from "react";

const Playlist = () => {
    const [playlist, setPlaylist] = useState(musicList);
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
                                <_.PlayBtn src={Play}></_.PlayBtn>
                            </_.BottomDivSection1Div2>
                        </_.BottomDivSection1>
                        <_.BottomDivSection2>
                            {playlist.map((i) => {
                                return (
                                    <Music title={i.title} subTitle={i.channel}></Music>
                                )
                            }
                            )}
                        </_.BottomDivSection2>
                    </_.BottomDiv>
                </_.Container>
            </_.Mobile>
        </>
    );
}

export default Playlist;
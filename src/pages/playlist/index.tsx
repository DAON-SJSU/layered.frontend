import HeaderBar from "../../components/headerBar";
import * as _ from './style';
import Play from '../../assets/etc/PlayBtn.png';

const Playlist = () => {
    return (
        <>
            <_.Mobile>
                <_.Void />
                <HeaderBar text={"Home"} />
                <_.Container>
                    <_.TopDiv>

                    </_.TopDiv>
                    <_.BottomDiv>
                        <_.BottomDivSection1>
                            <_.BottomDivSection1Div1>
                                <_.Description>
                                    These songs heard what your heart couldn’t say.
                                </_.Description>
                                <_.Emotion>
                                    <p>Anger</p>
                                </_.Emotion>
                                <_.PlaylistDuration>
                                    Your playlist — 29m 30s of feeling
                                </_.PlaylistDuration>
                            </_.BottomDivSection1Div1>
                            <_.BottomDivSection1Div2>
                                <_.TagBar>

                                </_.TagBar>
                                <_.PlayBtn src={Play}></_.PlayBtn>
                            </_.BottomDivSection1Div2>
                        </_.BottomDivSection1>
                        <_.BottomDivSection2>

                        </_.BottomDivSection2>
                    </_.BottomDiv>
                </_.Container>
            </_.Mobile>
        </>
    );
}

export default Playlist;
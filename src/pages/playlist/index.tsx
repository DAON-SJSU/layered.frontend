import HeaderBar from "../../components/headerBar";
import * as _ from './style';

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
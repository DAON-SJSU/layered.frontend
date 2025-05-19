import HeaderBar from '../../components/headerBar/index';
import MusicType from '../../components/musicType';
import SubmitBtn from '../../components/submitBtn';
import * as _ from './style';
import { musicGenres } from './data';


const splitMusicList = (list: string[], n: number) => {
    const len = Math.ceil(list.length / n);
    return Array.from({ length: n }, (_, i) =>
        list.slice(i * len, (i + 1) * len)
    );
};

const ChoicePreference = () => {
    const musicList = musicGenres;
    const lines = splitMusicList([...musicList, ...musicList], 3);

    return (
        <>
            <HeaderBar text={"Music Style"} />
            <_.Container>
                <_.sectionFrist>
                    <_.SectionFirstDiv>
                        <_.MusicSelectBox>
                            <_.Musics>
                                <_.Music>1</_.Music>
                                <_.Music>2</_.Music>
                                <_.Music>3</_.Music>
                                <_.Music>4</_.Music>
                            </_.Musics>
                            <_.TextBox>
                                <_.TextBoxH2>What’s your music style?</_.TextBoxH2>
                                <_.TextBoxP>Pick four things you usually listen to</_.TextBoxP>
                            </_.TextBox>
                        </_.MusicSelectBox>

                        <_.SearchBar>
                            <_.TextInput type='text' placeholder='Search'></_.TextInput>
                            <span className="material-symbols-outlined" style={_.searchIcon}>search</span>
                        </_.SearchBar>

                        {lines.map((line, i) => (
                            <_.LoopLineWrapper key={i}>
                                <_.LoopLine>
                                    {[...line, ...line].map((music, idx) => (
                                        <_.MusicType key={idx}>{music}</_.MusicType>
                                    ))}
                                </_.LoopLine>
                            </_.LoopLineWrapper>
                        ))}

                        <_.SubText>Your playlist changes with your style.</_.SubText>
                    </_.SectionFirstDiv>
                </_.sectionFrist>
                <_.SubmitBtnContainer>
                    <SubmitBtn text={"Go To Next"} icon={"arrow_forward"} />
                </_.SubmitBtnContainer>
            </_.Container>

        </>
    );
}

export default ChoicePreference;
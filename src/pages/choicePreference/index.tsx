import HeaderBar from '../../components/headerBar/index';
import * as _ from './style';

const ChoicePreference = () => {
    return(
        <>
            <HeaderBar text={"Music Style"}/>
            <_.Container>
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
                <_.ListBar>dd</_.ListBar>
                <_.SubText>Your playlist changes with your style.</_.SubText>
            </_.Container>
        </>
    );
}

export default ChoicePreference;
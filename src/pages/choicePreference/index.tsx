import HeaderBar from '../../components/headerBar/index';
import * as _ from './style';

const ChoicePreference = () => {
    return(
        <>
            <HeaderBar text={"Music Style"}/>
            <_.Container>
                <_.MusicSelectBox>dd</_.MusicSelectBox>
                <_.SearchBar>dd</_.SearchBar>
                <_.ListBar>dd</_.ListBar>
                <_.SubText>Your playlist changes with your style.</_.SubText>
            </_.Container>
        </>
    );
}

export default ChoicePreference;
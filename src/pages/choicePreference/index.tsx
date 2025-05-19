import { useState } from 'react';
import HeaderBar from '../../components/headerBar/index';
import SubmitBtn from '../../components/submitBtn';
import * as _ from './style';
import { musicGenres } from './data';


const splitMusicList = (list: string[], n: number) => {
    const len = Math.ceil(list.length / n); 
    return Array.from({ length: n }, (_, i) => {
        const line = list.slice(i * len, (i + 1) * len);
        console.log(line);
        return Array.from(new Set(line));
    });
}; // list를 3줄로 나누어 출력하기 위한 함수

const ChoicePreference = () => {
    const [search, setSearch] = useState('');
    // 검색 결과 필터링
    const filteredList = musicGenres.filter(item =>
        item.toLowerCase().startsWith(search.toLowerCase())
    );
    
    const lines = splitMusicList(filteredList, 3);

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
                            <_.TextInput
                                type='text'
                                placeholder='Search'
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                            <span className="material-symbols-outlined" style={_.searchIcon}>search</span>
                        </_.SearchBar>

                        {lines.map((line, i) => {
                            // line을 두 번 이어붙인 뒤 중복 제거
                            const uniqueLine = Array.from(new Set([...line, ...line]));
                            return (
                                <_.LoopLineWrapper key={i}>
                                    <_.LoopLine>
                                        {uniqueLine.map((music, idx) => (
                                            <_.MusicType key={idx}>{music}</_.MusicType>
                                        ))}
                                    </_.LoopLine>
                                </_.LoopLineWrapper>
                            );
                        })}

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
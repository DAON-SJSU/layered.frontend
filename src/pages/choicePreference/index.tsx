import { useState } from "react";
import SubmitBtn from "../../components/submitBtn";
import * as _ from "./style";
import { musicGenres } from "./data";
import MusicType from "../../components/musicType";
import PreferenceList from "../../components/preferenceList";

export interface PreferenceRequest {
  emotion: string;
  genres: string[];
  tempo: number;
  length: number;
  orderBy: 'Popularity' | 'Random';
}

const splitMusicList = (list: string[], n: number) => {
  const len = Math.ceil(list.length / n);
  return Array.from({ length: n }, (_, i) => {
    const line = list.slice(i * len, (i + 1) * len);
    console.log(line);
    return Array.from(new Set(line));
  });
}; // list를 3줄로 나누어 출력하기 위한 함수

const ChoicePreference = () => {
  const [search, setSearch] = useState<string>("");
  // 검색 결과 필터링
  const filteredList = musicGenres.filter((item) =>
    item.toLowerCase().startsWith(search.toLowerCase())
  );

  

  const lines = splitMusicList(filteredList, 3);

  // Request로 보낼 state들
  const [genres, setGenres] = useState<string[]>([]);
  const [emotion, setEmotion] = useState<string>("");
  const [tempo, setTempo] = useState<number>(0);
  const [length, setLength] = useState<number>(0);
  const [orderBy, setOrderBy] = useState<'Popularity' | 'Random'>('Popularity');

  const request = {
    emotion,
    genres,
    tempo,
    length,
    orderBy,
  };

  return (
    <>
      <_.Container>
        <_.sectionFrist>
          <_.SectionFirstDiv>
            <_.MusicSelectBox>
              <PreferenceList selectedList={genres}/> {/* 변경된 부분 */}
              <_.TextBox>
                <_.TextBoxH2>What's your music style?</_.TextBoxH2>
                <_.TextBoxP>Pick four things you usually listen to</_.TextBoxP>
              </_.TextBox>
            </_.MusicSelectBox>

            <_.SearchBar>
              <_.TextInput
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <_.Icon_S>search</_.Icon_S>
            </_.SearchBar>

            <_.Preferences>
              {lines.map((line, i) => {
                // line을 두 번 이어붙인 뒤 중복 제거
                const uniqueLine = Array.from(new Set([...line, ...line]));
                if (line.length <= 4) {
                  // 4개 이하일 때는 애니메이션 없이 한 번만 출력
                  return (
                    <_.LoopLineWrapper key={i}>
                      <div style={{ display: "flex", gap: 12 }}>
                        {Array.from(new Set(line)).map((music, idx) => (
                          <MusicType
                            key={idx}
                            music={music}
                            setList={setGenres} // 변경된 부분
                            list={genres}       // 변경된 부분
                            isSelected={genres.includes(music)} // 변경된 부분
                          />
                        ))}
                      </div>
                    </_.LoopLineWrapper>
                  );
                }
                // 5개 이상일 때만 loop 애니메이션
                return (
                  <_.LoopLineWrapper key={i}>
                    <_.LoopLine>
                      {uniqueLine.map((music, idx) => (
                        <MusicType
                          key={idx}
                          music={music}
                          setList={setGenres} // 변경된 부분
                          list={genres}       // 변경된 부분
                          isSelected={genres.includes(music)} // 변경된 부분
                        />
                      ))}
                    </_.LoopLine>
                  </_.LoopLineWrapper>
                );
              })}
            </_.Preferences>

            <_.SubText>Your playlist changes with your style.</_.SubText>
          </_.SectionFirstDiv>
        </_.sectionFrist>
        <_.SubmitBtnContainer onClick={()=>console.log(genres)}> {/* 변경된 부분 */}
          <SubmitBtn
            text={"Go To Next"}
            icon={"Arrow_Forward"}
            src={"choiceTempo"}
            request = {request}
          />
        </_.SubmitBtnContainer>
      </_.Container>
    </>
  );
};

export default ChoicePreference;

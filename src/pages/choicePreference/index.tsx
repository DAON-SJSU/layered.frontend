import { useState } from "react";
import SubmitBtn from "../../components/submitBtn";
import * as _ from "./style";
import { musicGenres } from "./data";
import MusicType from "../../components/musicType";

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

  const [selectedList, setSelectedList] = useState<string[]>([]);

  const lines = splitMusicList(filteredList, 3);

  return (
    <>
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
                          <MusicType key={idx} music={music} setList={setSelectedList} list={selectedList} isSelected={selectedList.includes(music)}/>
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
                        <MusicType key={idx} music={music} setList={setSelectedList} list={selectedList} isSelected={selectedList.includes(music)}/>
                      ))}
                    </_.LoopLine>
                  </_.LoopLineWrapper>
                );
              })}
            </_.Preferences>

            <_.SubText>Your playlist changes with your style.</_.SubText>
          </_.SectionFirstDiv>
        </_.sectionFrist>
        <_.SubmitBtnContainer onClick={()=>console.log(selectedList)}>
          <SubmitBtn
            text={"Go To Next"}
            icon={"Arrow_Forward"}
            src={"choiceTempo"}
          />
        </_.SubmitBtnContainer>
      </_.Container>
    </>
  );
};

export default ChoicePreference;

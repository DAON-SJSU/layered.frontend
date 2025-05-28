import { useState } from "react";
import * as _ from "./style";
import metro from "../../assets/etc/3Dmetro.svg";
import SubmitBtn from "../../components/submitBtn";
import { useLocation } from "react-router-dom";

const tempoOptions = ["Chill", "Normal", "Upbeat"];
const tempoValues = [0.2, 0.5, 0.8];

const ChoiceTempo = () => {
  const location = useLocation();
  const { request } = location.state || {};
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const updatedRequest = {
    ...request,
    tempo: selectedIdx !== null ? tempoValues[selectedIdx] : request.tempo,
  };

  return (
    <>
      <_.Container>
        <_.Content>
          <_.Metro src={metro} />
          <_.ContentH2>Choose you’r tempo style</_.ContentH2>
          <_.ContentP>Your playlist changes with your tempo.</_.ContentP>
        </_.Content>

        <_.SelectBar>
          <_.SelectBarInner>
            {tempoOptions.map((option, idx) => (
              <_.Option
                key={option}
                onClick={() => setSelectedIdx(idx)}
                isSelected={selectedIdx === idx}
              >
                <_.OptionInner isSelected={selectedIdx === idx}>
                  {option}
                </_.OptionInner>
              </_.Option>
            ))}
          </_.SelectBarInner>
        </_.SelectBar>

        <_.BtnContainer>
          <SubmitBtn
            text={"Go To Choose Color"}
            icon={"format_paint"}
            src={"palette"}
            request={updatedRequest}
          />
        </_.BtnContainer>
      </_.Container>
    </>
  );
};

export default ChoiceTempo;

import HeaderBar from "../../components/headerBar";
import * as _ from "./style";
import metro from "../../assets/etc/3Dmetro.svg";
import SubmitBtn from "../../components/submitBtn";

const ChoiceTempo = () => {
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
            <_.Option>
              <_.OptionInner>Chill</_.OptionInner>
            </_.Option>
            <_.Option>
              <_.OptionInner>Normal</_.OptionInner>
            </_.Option>
            <_.Option>
              <_.OptionInner>Upbeat</_.OptionInner>
            </_.Option>
          </_.SelectBarInner>
        </_.SelectBar>

        <_.BtnContainer>
          <SubmitBtn
            text={"Go To Choose Color"}
            icon={"format_paint"}
            src={""}
          />
        </_.BtnContainer>
      </_.Container>
    </>
  );
};

export default ChoiceTempo;

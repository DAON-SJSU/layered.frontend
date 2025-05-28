import * as _ from "./style";
import { Link } from "react-router-dom";
import type { PreferenceRequest } from '../../pages/choicePreference/index';

interface SubmitBtnProps {
  text: String;
  icon: String;
  src: String;
  request : PreferenceRequest;
}

const SubmitBtn = ({ text, icon, src, request }: SubmitBtnProps) => {
  console.log(request);
  return (
    <Link
      to={`/${src}`}
      style={{ width: "100%", display: "block", textDecoration: "none" }}
      state={{ request }}
    >
      <_.BtnWrapper>
        <_.BtnContainer>
          <_.BtnText>{text}</_.BtnText>
          <_.Icon_S>{icon}</_.Icon_S>
        </_.BtnContainer>
      </_.BtnWrapper>
    </Link>
  );
};

export default SubmitBtn;

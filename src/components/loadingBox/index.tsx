import * as _ from "./style";
import Yellow from "../../assets/Logo/Yellow cube long.svg";
import Red from "../../assets/Logo/Red cube.svg";
import Blue from "../../assets/Logo/Blue cube.svg";
import YellowL from "../../assets/Logo/Yellow cube.svg";
import MainText from "../../assets/Logo/Main text.svg";
import SubText from "../../assets/Logo/Sub text.svg";
const LoadingLogo = () => {
  return (
    <_.LogoBox>
      <_.SvgBox>
        <_.FirstLine>
          <_.LogoImgz src={Yellow} />
          <_.LogoImg src={Red} />
        </_.FirstLine>
        <_.SecondLine>
          <_.LogoImgz src={Blue} />
          <_.LogoImg src={YellowL} />
        </_.SecondLine>
      </_.SvgBox>
      <_.TextBox>
        <_.MainText src={MainText} />
        <_.SubText src={SubText} />
      </_.TextBox>
    </_.LogoBox>
  );
};

export default LoadingLogo;

import * as _ from "./style";
import Yellow from "../../assets/cube/YellowCube.png";
import Red from "../../assets/cube/RedCube.png";
import Blue from "../../assets/cube/BlueCube.png";
import Green from "../../assets/cube/GreenCube.png";
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
          <_.LogoImg src={Green} />
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

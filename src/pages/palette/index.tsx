import RedCube from "../../assets/cube/RedCube.png";
import * as _ from "./style";

const Palette = () => {
  return (
    <_.Container>
      <_.MianBox>
        <_.TitleBox>
          <_.Choice>Choice</_.Choice>
          <_.ColorText>Yor Color, Today</_.ColorText>
        </_.TitleBox>
        <_.CubeSlider>
          <_.Icon_L>Arrow_Back_IOS_new</_.Icon_L>
          <_.Cube src={RedCube}></_.Cube>
          <_.Icon_L>Arrow_Forward_IOS</_.Icon_L>
        </_.CubeSlider>
      </_.MianBox>

      <_.SubBox>
        <_.Card>
          <_.ColorText>CardTittle</_.ColorText>
          <_.Scripts>These are scripts</_.Scripts>
        </_.Card>
        <_.AddButton>
          <_.ButtonText>Add This Color</_.ButtonText>
          <_.Icon_S>add</_.Icon_S>
        </_.AddButton>
      </_.SubBox>
    </_.Container>
  );
};

export default Palette;

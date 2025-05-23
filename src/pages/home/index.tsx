import * as _ from "./style";
import title from "../../assets/home/Home Title.svg";
import blocks from "../../assets/blocks/Blocks.png";
import plus from "../../assets/icons/PlusIcon.png";
import PlaylistCard from "../../components/playlistCard";

const Home = () => {
  return (
    <_.Container>
      <_.TitleBox>
        <img src={title} style={_.titleStyle} />
      </_.TitleBox>
      <_.Card>
        <_.CardInner>
          <_.SectionFirst>
            <_.SectionFirstDiv1>
              <_.TextBox>
                <_.TextBoxP>About</_.TextBoxP>
                <_.TextBoxH2>LAYERED is ...</_.TextBoxH2>
              </_.TextBox>
              <_.BlockImg src={blocks} />
            </_.SectionFirstDiv1>

            <_.SectionFirstDiv2>
              <_.GrayCard>Color</_.GrayCard>
              <_.PlusImg src={plus} />
              <_.GrayCard>Emotion</_.GrayCard>
              <_.PlusImg src={plus} />
              <_.GrayCard>Music</_.GrayCard>
            </_.SectionFirstDiv2>
          </_.SectionFirst>
          <_.SectionSecond>
            <_.GrayCard2>
              <p>
                We understand that emotions come in layers. That’s why we
                recommend music that reflects, supports, and releases how you
                feel.
              </p>
            </_.GrayCard2>
          </_.SectionSecond>
        </_.CardInner>
      </_.Card>

      <PlaylistCard />
      <PlaylistCard />
    </_.Container>
  );
};

export default Home;

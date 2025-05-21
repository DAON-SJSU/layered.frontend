import AngerImg from "/src/assets/result_icon_img/Anger_shape.png";
import LoveImg from "/src/assets/result_icon_img/Love_shape.png";
import HopeImg from "/src/assets/result_icon_img/Hope_shape.png";
import ExcitementImg from "/src/assets/result_icon_img/Excitement_shape.png";
import CalmnessImg from "/src/assets/result_icon_img/Calmness_shape.png";
import SadnessImg from "/src/assets/result_icon_img/Sadness_shape.png";
import LonelinessImg from "/src/assets/result_icon_img/Loneliness_shape.png";
import DreamImg from "/src/assets/result_icon_img/Dream_shape.png";


export const emotionMap: Record<string, {
  label: string;
  image: string;
  bgColor: string;
  buttonColor: string;
}> = {
  anger: {
    label: "Anger",
    image: AngerImg,
    bgColor: "linear-gradient(to bottom, #FF6B6B, #FFC4C4)",
    buttonColor: "#FF4848",
  },
  love: {
    label: "Love",
    image: LoveImg,
    bgColor: "linear-gradient(to bottom, #FFD1DC, #FFE6EB)",
    buttonColor: "#FF8F8F",
  },
  hope: {
    label: "Hope",
    image: HopeImg,
    bgColor: "linear-gradient(to bottom, #FFE4B5, #FFF2D0)",
    buttonColor: "#FDBE51",
  },
  excitement: {
    label: "Excitement",
    image: ExcitementImg,
    bgColor: "linear-gradient(to bottom, #FFF176, #FFECB3)",
    buttonColor: "#D4A015",
  },
  calmness: {
    label: "Calmness",
    image: CalmnessImg,
    bgColor: "linear-gradient(to bottom, #A8E6CF, #DCEDC1)",
    buttonColor: "#4CAF50",
  },
  sadness: {
    label: "Sadness",
    image: SadnessImg,
    bgColor: "linear-gradient(to bottom, #A0B9E0, #D7E3F4)",
    buttonColor: "#6E9CE6",
  },
  loneliness: {
    label: "Loneliness",
    image: LonelinessImg,
    bgColor: "linear-gradient(to bottom, #9374A8, #CEC3DA)",
    buttonColor: "#9374A8",
  },
  dream: {
    label: "Dream",
    image: DreamImg,
    bgColor: "linear-gradient(to bottom, #D3ABFF, #E9CFFF)",
    buttonColor: "#B979FF",
  },
};

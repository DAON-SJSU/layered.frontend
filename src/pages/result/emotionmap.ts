import AngerImg from "../../assets/emotions/Anger.png";
import LoveImg from "../../assets/emotions/Love.png";
import HopeImg from "../../assets/emotions/Hope.png";
import ExcitementImg from "../../assets/emotions/Excitement.png";
import CalmnessImg from "../../assets/emotions/Calmness.png";
import SadnessImg from "../../assets/emotions/Sadness.png";
import LonelinessImg from "../../assets/emotions/Loneliness.png";
import DreamImg from "../../assets/emotions/Dream.png";


export const emotionMap: Record<string, {
  label: string;
  image: string;
  bgColor: string;
  buttonColor: string;
  headerIcon: string;
}> = {
  anger: {
    label: "Anger",
    image: AngerImg,
    bgColor: "linear-gradient(to bottom, #FF6B6B, #FFC4C4)",
    buttonColor: "#FF4848",
    headerIcon: "sentiment_extremely_dissatisfied",
  },
  love: {
    label: "Love",
    image: LoveImg,
    bgColor: "linear-gradient(to bottom, #FFD1DC, #FFE6EB)",
    buttonColor: "#FF8F8F",
    headerIcon: "favorite",
  },
  hope: {
    label: "Hope",
    image: HopeImg,
    bgColor: "linear-gradient(to bottom, #FFE4B5, #FFF2D0)",
    buttonColor: "#FDBE51",
    headerIcon: "psychiatry",
  },
  excitement: {
    label: "Excitement",
    image: ExcitementImg,
    bgColor: "linear-gradient(to bottom, #FFF176, #FFECB3)",
    buttonColor: "#D4A015",
    headerIcon: "Mood",
  },
  calmness: {
    label: "Calmness",
    image: CalmnessImg,
    bgColor: "linear-gradient(to bottom, #A8E6CF, #DCEDC1)",
    buttonColor: "#4CAF50",
    headerIcon: "sentiment_neutral",
  },
  sadness: {
    label: "Sadness",
    image: SadnessImg,
    bgColor: "linear-gradient(to bottom, #A0B9E0, #D7E3F4)",
    buttonColor: "#6E9CE6",
    headerIcon: "sentiment_neutral",
  },
  loneliness: {
    label: "Loneliness",
    image: LonelinessImg,
    bgColor: "linear-gradient(to bottom, #9374A8, #CEC3DA)",
    buttonColor: "#9374A8",
    headerIcon: "sentiment_frustrated",
  },
  dream: {
    label: "Dream",
    image: DreamImg,
    bgColor: "linear-gradient(to bottom, #D3ABFF, #E9CFFF)",
    buttonColor: "#B979FF",
    headerIcon: "sentiment_neutral",
  },
};
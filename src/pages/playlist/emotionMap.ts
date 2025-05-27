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
  bgTop: string;
  bgBottom: string;
}> = {
  anger: {
    label: "Anger",
    image: AngerImg,
    bgTop: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 10%, var(--Emotions-Anger, #FF4848) 99.9%)",
    bgBottom: "linear-gradient(180deg, var(--Emotions-Anger, #FF4848) 0%, rgba(255, 255, 255, 0.00) 92.15%);"
  },
  love: {
    label: "Love",
    image: LoveImg,
    bgTop: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 10%, var(--Emotions-Love, #FF7373) 99.9%)",
    bgBottom: "linear-gradient(180deg, var(--Emotions-Love, #FF7373) 0%, rgba(255, 255, 255, 0.00) 92.15%);"
  },
  hope: {
    label: "Hope",
    image: HopeImg,
    bgTop: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 10%, var(--Emotions-Hope, #FFBB45) 99.9%)",
    bgBottom: "linear-gradient(180deg, var(--Emotions-Hope, #FFBB45) 0%, rgba(255, 255, 255, 0.00) 92.15%);"
  },
  excitement: {
    label: "Excitement",
    image: ExcitementImg,
    bgTop: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 10%, var(--Emotions-Excitement, #E2BC34) 99.9%)",
    bgBottom: "linear-gradient(180deg, var(--Emotions-Excitement, #E2BC34) 0%, rgba(255, 255, 255, 0.00) 92.15%);"
  },
  calmness: {
    label: "Calmness",
    image: CalmnessImg,
    bgTop: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 10%, var(--Emotions-Calmness, #61E274) 99.9%)",
    bgBottom: "linear-gradient(180deg, var(--Emotions-Calmness, #61E274) 0%, rgba(255, 255, 255, 0.00) 92.15%);"
  },
  sadness: {
    label: "Sadness",
    image: SadnessImg,
    bgTop: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 10%, var(--Emotions-Sadness, #6E9CE6) 99.9%)",
    bgBottom: "linear-gradient(180deg, var(--Emotions-Sadness, #6E9CE6) 0%, rgba(255, 255, 255, 0.00) 92.15%);"
  },
  loneliness: {
    label: "Loneliness",
    image: LonelinessImg,
    bgTop: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 10%, var(--Emotions-Loneliness, #9374A8) 99.9%)",
    bgBottom: "linear-gradient(180deg, var(--Emotions-Loneliness, #9374A8) 0%, rgba(255, 255, 255, 0.00) 92.15%);"
  },
  dream: {
    label: "Dream",
    image: DreamImg,
    bgTop: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 10%, var(--Emotions-Dream, #B979FF) 99.9%)",
    bgBottom: "linear-gradient(180deg, var(--Emotions-Dream, #B979FF) 0%, rgba(255, 255, 255, 0.00) 92.15%);"
  },
};

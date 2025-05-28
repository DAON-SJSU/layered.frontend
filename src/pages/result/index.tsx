import { useLocation, useParams } from "react-router-dom";
import * as _ from "./style";
import { emotionMap } from "./emotionmap";
import axios from 'axios';


const Result = () => {
  const { emotion } = useParams();
  const config = emotionMap[emotion ?? ""];
  const location = useLocation();
  const { request } = location.state || {};


  const handleSendRequest = async () => {
    try {
      const response = await axios.post("172.20.3.59:8000", request);
    } catch (err) {
      console.log(err);
    }
  }


  if (!config) {
    return <div>잘못된 감정입니다.</div>;
  }

  const { label, image, bgColor, buttonColor } = config;

  return (
    <_.Mobile bgColor={bgColor}>
      <_.Void />
      <_.MainBody>
        <_.Container>
          <_.SubText>Your heart says...</_.SubText>
          <_.EmotionText>{label}</_.EmotionText>
          <_.EmotionIcon src={image} alt={label} />
          <_.PlaylistButton buttonColor={buttonColor} onClick={() => { handleSendRequest }}>Check Your Playlist</_.PlaylistButton>
          <_.RetryText>No Thanks, I wanna try again.</_.RetryText>
        </_.Container>
      </_.MainBody>
    </_.Mobile>
  );
};

export default Result;
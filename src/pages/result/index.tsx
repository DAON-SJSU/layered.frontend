import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as _ from "./style";
import { emotionMap } from "./emotionmap";
import axios from 'axios';
import { useState } from "react";

export interface PlaylistItem {
  title: string;
  url: string;
  channel: string;
  duration: string;
  views: string;
  publish_time: string;
}

export type PlaylistType = PlaylistItem[];

const Result = () => {
  const { emotion } = useParams();
  const config = emotionMap[emotion ?? ""];
  const location = useLocation();
  const { request } = location.state || {};
  const navigate = useNavigate();

  const [resultPlaylist, setPlaylist] = useState<PlaylistType>([]);

  const handleSendRequest = async () => {
    try {
      console.log(request);
      const response = await axios.post(
        "http://172.20.3.59:8000",
        request,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(response);
      setPlaylist(response.data);
      navigate(`/playlist/${emotion}`, { state: { resultPlaylist: response.data } });
    } catch (err) {
      console.log(err);
    }
  }

  const backtoPalette = () => {
    navigate("/palette");
  }


  if (!config) {
    return <div>잘못된 감정입니다.</div>;
  }

  const { label, image, bgColor, buttonColor,headerIcon } = config;

  return (
    <_.Mobile bgColor={bgColor}>
      <_.Void />
      <_.Header>
              <_.HeaderIcon>{headerIcon}</_.HeaderIcon>
              <_.HeaderText>Emotion</_.HeaderText>
            </_.Header>
      <_.MainBody>
        <_.Container>
          <_.SubText>Your heart says...</_.SubText>
          <_.EmotionText>{label}</_.EmotionText>
          <_.EmotionIcon src={image} alt={label} animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}/>
          <_.PlaylistButton buttonColor={buttonColor} onClick={handleSendRequest}>
            Check Your Playlist
          </_.PlaylistButton>
          <_.RetryText onClick={backtoPalette}>No Thanks, I wanna try again.</_.RetryText>
        </_.Container>
      </_.MainBody>
    </_.Mobile>
  );
};

export default Result;
import * as _ from "./style";
import AngerImg from './LAYERED IMG/Anger_shape.png';

const Result = () => {
    return(
        <_.Mobile>
      <_.Void />
      {/* 헤더 */}
      <_.MainBody>
        <_.Container>
        <_.SubText>Your heart says...</_.SubText>
        <_.EmotionText>Anger</_.EmotionText>
        <_.EmotionIcon src={AngerImg} alt="Anger" />
        <_.PlaylistButton>Check your playlist</_.PlaylistButton>
        <_.RetryText>No Thanks, I wanna try again.</_.RetryText>
        </_.Container>
      </_.MainBody>
    </_.Mobile>
    );
}

export default Result;
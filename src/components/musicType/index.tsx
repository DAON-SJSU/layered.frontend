import * as _ from './style';

interface MusicTypeProps{
    music : String;
}

const MusicType = ({ music } : MusicTypeProps) => {
    return (
        <_.TypeContainer>
            <_.TypeText>{music}</_.TypeText>
        </_.TypeContainer>
    );
}

export default MusicType;
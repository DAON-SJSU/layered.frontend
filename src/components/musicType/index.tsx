import * as _ from './style';

interface MusicTypeProps {
    music: String;
    isSelected?: boolean;
}

const MusicType = ({ music, isSelected = false }: MusicTypeProps) => {
    return (
        isSelected ? (
            <_.TagContainer>
                <_.HashText>
                    #
                </_.HashText>
                <_.HashText>
                    {music}
                </_.HashText>
            </_.TagContainer>
        ) : (
        <_.TypeContainer>
                <_.TypeText>{music}</_.TypeText>
        </_.TypeContainer>
        )
    );
}

export default MusicType;
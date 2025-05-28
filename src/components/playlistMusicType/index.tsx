import * as _ from './style';

interface MusicTypeProps{
    music : string,
}

const playlistMusicType = ({music} : MusicTypeProps) => {
    return (
        <_.TagContainer>
            <_.HashText>
                #
            </_.HashText>
            <_.HashText>
                {music}
            </_.HashText>
        </_.TagContainer>
    );
}

export default playlistMusicType;
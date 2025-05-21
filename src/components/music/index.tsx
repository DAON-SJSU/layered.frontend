import * as _ from './style';
import downloadBtn from '../../assets/etc/DownloadBtn.png';
import musicImg from '../../assets/etc/MusicImg.png';
import menuImg from '../../assets/etc/MenuDots.png';

interface MusicProps {
    title: string;
    subTitle: string;
    url: string;
    onPlay?: () => void;
    isPlaying?: boolean;
}

const Music = ({ title, subTitle, url, onPlay }: MusicProps) => {
    return (
        <_.MusicContainer onClick={onPlay}>
            <_.MusicImg src={musicImg}/>
            <_.MusicContent>
                <_.MusicTitle>{title}</_.MusicTitle>
                <_.MusicSubtitle>
                    <_.DownloadImg src={downloadBtn}/>
                    <_.MusicSubtitleText>{subTitle}</_.MusicSubtitleText>
                </_.MusicSubtitle>
            </_.MusicContent>
            <_.MenuImg src={menuImg}></_.MenuImg>
        </_.MusicContainer>
    );
}

export default Music;
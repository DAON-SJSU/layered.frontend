import * as _ from './style';
import downloadBtn from '../../assets/etc/DownloadBtn.png';
import musicImg from '../../assets/etc/MusicImg.png';
import menuImg from '../../assets/etc/MenuDots.png';
import { getYoutubeId } from '../../pages/playlist/util';

interface MusicProps {
    title: string;
    subTitle: string;
    url: string;
    onPlay?: () => void;
    isPlaying?: boolean;
}

const Music = ({ title, subTitle, url, onPlay }: MusicProps) => {
    const getYoutubeThumbnail = (videoUrl: string) => {
        const id = getYoutubeId(videoUrl);
        return `https://img.youtube.com/vi/${id}/sddefault.jpg`;
    };
    const thumbnailUrl = getYoutubeThumbnail(url);

    return (
        <_.MusicContainer onClick={onPlay}>
            <_.MusicImg src={thumbnailUrl} />
            <_.MusicContent>
                <_.MusicTitle>{title}</_.MusicTitle>
                <_.MusicSubtitle>
                    <_.DownloadImg src={downloadBtn} />
                    <_.MusicSubtitleText>{subTitle}</_.MusicSubtitleText>
                </_.MusicSubtitle>
            </_.MusicContent>
            <_.MenuImg src={menuImg}></_.MenuImg>
        </_.MusicContainer>
    );
}

export default Music;
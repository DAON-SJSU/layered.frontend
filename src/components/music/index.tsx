import * as _ from './style';
import downloadBtn from '../../assets/etc/DownloadBtn.png';
import musicImg from '../../assets/etc/MusicImg.png';
import menuImg from '../../assets/etc/MenuDots.png';

const Music = () => {
    return (
        <_.MusicContainer>
            <_.MusicImg src={musicImg}/>
            <_.MusicContent>
                <_.MusicTitle>Dakiti</_.MusicTitle>
                <_.MusicSubtitle>
                    <_.DownloadImg src={downloadBtn}/>
                    <_.MusicSubtitleText>Bad Bunny & Jhay Cortez</_.MusicSubtitleText>
                </_.MusicSubtitle>
            </_.MusicContent>
            <_.MenuImg src={menuImg}></_.MenuImg>
        </_.MusicContainer>
    );
}

export default Music;
import * as _ from './style';
import yb from '../../assets/blocks/y&b.png';
import playlistbtn from '../../assets/icons/PlaylistIcon.png';
import { useNavigate } from 'react-router-dom';


const PlaylistCard = () =>{
    const navigate = useNavigate();

    return(
        <_.Card>
            <_.Section>
                <_.SectionFirst>
                <_.TextBox>
                    <_.TextBoxP>playlist</_.TextBoxP>
                    <_.TextBoxH2>Eotional Play list</_.TextBoxH2>
                    </_.TextBox>
                    <_.BlockImg src={yb} />
                </_.SectionFirst>
                <_.SectionSecond>
                    <_.MakePlaylistBtn onClick={()=>{navigate('/palette')}}>
                        <_.BtnTitleStyle>
                            Let’s Make The Playlist
                        </_.BtnTitleStyle>
                        <_.BtnImg src={playlistbtn}/>
                    </_.MakePlaylistBtn>
                </_.SectionSecond>
            </_.Section>
        </_.Card>
    )
}

export default PlaylistCard;
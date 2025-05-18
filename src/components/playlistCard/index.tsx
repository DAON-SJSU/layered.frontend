import * as _ from './style';
import yb from '../../assets/blocks/y&b.png';

const PlaylistCard = () =>{
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
            </_.Section>
        </_.Card>
    )
}

export default PlaylistCard;
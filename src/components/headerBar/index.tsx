import * as _ from './style';
import { useNavigate } from 'react-router-dom';

interface HeaderBarProps {
    text: string;
}

const HeaderBar = ({ text }: HeaderBarProps) => {
    const navigate = useNavigate()

    return(
        <_.Header>
                <span className="material-symbols-outlined" style={_.undoStyle} onClick={()=>{navigate(-1)}}>undo</span>
                <_.HeaderP>{text}</_.HeaderP>
        </_.Header>
    )
}

export default HeaderBar;
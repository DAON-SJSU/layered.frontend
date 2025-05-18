import * as _ from './style';

interface HeaderBarProps {
    text: string;
}

const HeaderBar = ({ text }: HeaderBarProps) => {
    return(
        <_.Header>
                <span className="material-symbols-outlined" style={_.undoStyle}>undo</span>
                <_.HeaderP>{text}</_.HeaderP>
        </_.Header>
    )
}

export default HeaderBar;
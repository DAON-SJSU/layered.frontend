import * as _ from './style';
import { Link, useNavigate } from 'react-router-dom';

interface SubmitBtnProps {
    text: String;
    icon: String;
    src: String;
}

const SubmitBtn = ({ text, icon, src }: SubmitBtnProps) => {
    const navigate = useNavigate();

    return (
        <Link to={`/${src}`} style={{ width: "100%", display: "block", textDecoration: "none" }}>
            <_.BtnWrapper>
                <_.BtnContainer>
                    <_.BtnText>{text}</_.BtnText>
                    <span className="material-symbols-outlined" style={_.Icon}>{icon}</span>
                </_.BtnContainer>
            </_.BtnWrapper>
        </Link>
    );
}

export default SubmitBtn;
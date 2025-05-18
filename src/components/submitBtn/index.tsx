import * as _ from './style';

interface SubmitBtnProps{
    text : String;
    icon : String;
}

const SubmitBtn = ({text, icon} : SubmitBtnProps) => {
    return (
        <_.BtnWrapper>
            <_.BtnContainer>
                <_.BtnText>{text}</_.BtnText>
                <span className="material-symbols-outlined" style={_.Icon}>{icon}</span>
            </_.BtnContainer>
        </_.BtnWrapper>
    );
}

export default SubmitBtn;
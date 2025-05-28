import * as _ from './style';

interface MusicTypeProps {
    music: string;
    isSelected?: boolean;
    setList: React.Dispatch<React.SetStateAction<string[]>>;
    list: string[];
}

const MusicType = ({ music, isSelected = false, setList, list }: MusicTypeProps) => {
    const clickHandle = () =>{
        if(list.length >= 4)
            alert("Already full");
        else{
            setList((prev) => [...prev, music as string]);
            console.log(isSelected);
        }
    }
    return (
        isSelected ? (
            <_.TagContainer>
                <_.HashText>
                    #
                </_.HashText>
                <_.HashText>
                    {music}
                </_.HashText>
            </_.TagContainer>
        ) : (
        <_.TypeContainer onClick={() => clickHandle()}>
                <_.TypeText>{music}</_.TypeText>
        </_.TypeContainer>
        )
    );
}

export default MusicType;
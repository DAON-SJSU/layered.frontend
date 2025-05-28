import * as _ from './style';

interface Props {
    selectedList: string[];
}

const PreferenceList = ({ selectedList }: Props) => {
    const musicList = [1, 2, 3, 4];

    return (
        <_.Musics>
            {musicList.map((num, idx) => (
                <_.Music
                    key={num}
                    isSelected={selectedList.length > idx}
                    idx={idx}
                >
                    {num}
                </_.Music>
            ))}
        </_.Musics>
    );
};

export default PreferenceList;
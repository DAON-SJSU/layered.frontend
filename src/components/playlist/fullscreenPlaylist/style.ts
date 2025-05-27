import styled from '@emotion/styled';

export const FullscreenWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #a02b1f 0%, #232323 100%);
    display: flex;
    flex-direction: column;
    max-width : 460px;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    z-index: 2000;
`;

export const TopBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0 ;
    color: #fff;
    font-size: 20px;
    text-align:center;
`;

export const BackBtn = styled.button`
    background: none;
    border: none;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
    min-width: 32px;
    margin-right: 8px;
`;

export const AlbumTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #fff;
`;

export const MoreBtn = styled.button`
    background: none;
    border: none;
    color: #fff;
    font-size: 28px; // ← 크기 살짝 줄임
    cursor: pointer;
    min-width: 32px;
    margin-left: 8px; // ← 왼쪽 여백 추가
`;

export const AlbumArt = styled.img`
    width: 80vw;
    max-width: 420px;
    aspect-ratio: 1/1;
    border-radius: 12px;
    margin: 32px 0 32px 0;
    object-fit: cover;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
`;

export const MusicInfo = styled.div`
    text-align: center;
    margin-bottom: 16px;
`;

export const MusicTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 4px;
`;

export const MusicArtist = styled.div`
    font-size: 16px;
    color: #b3b3b3;
`;

export const ProgressSection = styled.div`
    width: 90vw;
    max-width: 420px;
    margin: 0 auto 8px auto;
    display: flex;
    flex-direction: column;
`;

export const ProgressInput = styled.input<{ progress: number }>`
    width: 100%;
    height: 4px;
    margin: 0;
    background: ${({ progress }) =>
        `linear-gradient(
            to right,
            #fff 0%,
            #fff ${progress}%,
            #444 ${progress}%,
            #444 100%
        )`
    };
    appearance: none;
    outline: none;
    cursor: pointer;
    border-radius: 2px;
    /* Webkit */
    &::-webkit-slider-thumb {
        appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        border: none;
        margin-top: -6px;
        transition: background 0.2s;
    }
    &::-webkit-slider-runnable-track {
        height: 4px;
        background: transparent;
        border-radius: 2px;
    }
    /* Firefox */
    &::-moz-range-thumb {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        border: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
    &::-moz-range-track {
        height: 4px;
        background: transparent;
        border-radius: 2px;
    }
    /* IE */
    &::-ms-thumb {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        border: none;
    }
    &::-ms-fill-lower {
        background: #fff;
        border-radius: 2px;
    }
    &::-ms-fill-upper {
        background: #444;
        border-radius: 2px;
    }
`;

export const ProgressTime = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 14px;
    margin-top: 10px; // 기존 2px에서 10px로 변경 (원하는 만큼 조절)
`;

export const ControlSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    margin: 32px 0 16px 0;
`;

export const ControlBtn = styled.button`
    background: none;
    border: none;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
`;

export const PlayPauseBtn = styled(ControlBtn)`
    width: 72px;
    height: 72px;
    background: #fff;
    color: #232323;
    border-radius: 50%;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
`;

export const MusicMeta = styled.div`
    color: #fff;
    opacity: 0.7;
    font-size: 14px;
    text-align: left;
    width: 85vw;
    max-width: 420px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
`;


export const Icon_S = styled.span`
  font-size: 60px;
  font-family: Material Symbols Rounded;
  font-weight: 300;
  line-height: 100%;
  align-self: center;
  color: black;
`;
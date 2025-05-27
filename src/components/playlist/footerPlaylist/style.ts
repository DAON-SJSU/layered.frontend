import styled from '@emotion/styled';

export const FooterBar = styled.div`
    display: flex;
    align-items: center;
    background: #232323;
    color: #fff;
    padding: 12px 20px;
    width: 100%;
    min-height: 64px;
    box-sizing: border-box;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    cursor: pointer;
`;

export const FooterThumb = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 6px;
    object-fit: cover;
    margin-right: 16px;
`;

export const FooterInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
`;

export const FooterTitle = styled.div`
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const FooterSubtitle = styled.div`
    font-size: 13px;
    color: #b3b3b3;
    margin-top: 2px;
    display: flex;
    align-items: center;
    gap: 6px;
`;

export const FooterPlayBtn = styled.button`
    background: none;
    border: none;
    color: #fff;
    font-size: 28px;
    margin-left: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProgressSection = styled.div`
    width: 50%;
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
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
import styled from "@emotion/styled";


export const TypeContainer = styled.div`
    display: flex;
    padding: var(--Gap-8) var(--Gap-16);
    justify-content: center;
    align-items: center;
    border-radius: var(--Radius-Max);
    background: var(--Surface-Surface-10);
    flex-shrink: 0;
`

export const TypeText = styled.p`
    color: var(--Text-Text-10);

    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
`

export const TagContainer = styled.div`
    display: flex;
    height: 20px;
    align-items: center;
    gap: 4px;
    background: rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(2px);
    padding: var(--Gap-8) var(--Gap-16);
    justify-content: center;
    border-radius: var(--Radius-Max);
    flex-shrink: 0;
    
`

export const HashText = styled.p`
    color: #FFF;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`

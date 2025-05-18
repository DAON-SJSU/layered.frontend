import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Gap-20);
    flex: 1 0 0;
    align-self: stretch;
    padding: 0 24px;
`

export const Card = styled.section`
    width: 100%;
    box-sizing: border-box;
    border-radius: var(--Radius-14);
    background: var(--Surface-Surface-20);
    padding: 16px;
`

export const TitleBox = styled.section`
    width:100%;
    height: 66px;
`

export const titleStyle = {
    height: '100%',
    width: 'auto',
}

export const CardInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--Gap-24);
    width: 100%;
    height: auto;
`

export const SectionFirst = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Gap-16);
    align-self: stretch;
`

export const SectionFirstDiv1 = styled.div`
    display: flex;
    height: 74px;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    overflow: hidden;
`

export const SectionFirstDiv2 = styled.div`
    display: flex;
    height: 28px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Gap-8);
`

export const TextBoxH2 = styled.h2`
    color: var(--Grayscale-Grayscale-80);
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.4px;
`
export const TextBoxP = styled.p`
    color: var(--Grayscale-Grayscale-60);
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`

export const BlockImg = styled.img`
    height: 100%;
    width: auto;
    max-width: 40%;
    display: block;
    object-fit: contain;
`

export const GrayCard = styled.div`
    border-radius: var(--Radius-8, 8px);
    background: var(--Grayscale-Translucence-Grayscale-50-Translucence);
    color: var(--Grayscale-Grayscale-80);
    padding: var(--Gap-6) var(--Gap-16);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`

export const PlusImg = styled.img`
    height: 40%;
    width: auto;
    max-width: 40%;
    display: block;
    object-fit: contain;
`

export const SectionSecond = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Gap-16);
    align-self: stretch;    
`

export const GrayCard2 = styled.div`
    border-radius: var(--Radius-8, 8px);
    background: var(--Grayscale-Translucence-Grayscale-50-Translucence);
    color: var(--Grayscale-Grayscale-80);
    padding: var(--Gap-12) var(--Gap-16);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`
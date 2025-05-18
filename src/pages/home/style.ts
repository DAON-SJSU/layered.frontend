import styled from '@emotion/styled';

export const Container = styled.div`
    margin: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Gap-20);
    flex: 1 0 0;
    align-self: stretch;
`

export const Card = styled.section`
    width: 100%;
    border-radius: var(--Radius-14);
    background: var(--Surface-Surface-20);
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
    margin: 16px;
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
    padding: var(--Gap-8);
    justify-content: space-between;
    align-items: center;
    align-self: stretch;    
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
    gap: var(--Gap-8, 8px);
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
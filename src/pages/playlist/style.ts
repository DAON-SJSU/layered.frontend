import styled from "@emotion/styled";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Mobile = styled.main`
  height: 100vh;
  width: 100%;
  min-height: 100vh;
  max-width: 430px;
  margin: 0 auto;
  box-sizing: border-box;
  background: var(--Background, linear-gradient(180deg, #F8E8EE 0.01%, #E6E6FA 50%, #D2E1FF 99.99%));
  display: flex;
  flex-direction: column;
`;

export const TopDiv = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    height: 289px;
    flex-direction: column;
    padding: var(--Gap-8, 8px) 49px;
    align-items: center;
    gap: var(--Gap-6, 6px);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 10%, var(--Emotions-Anger, #FF4848) 99.9%);
`

export const BottomDiv = styled.div`
    display: flex;
    width: 100%;
    height : 80vh;
    flex-direction: column;
    box-sizing: border-box;
    align-items: flex-start;
    background: linear-gradient(180deg, var(--Emotions-Anger, #FF4848) 0%, rgba(255, 255, 255, 0.00) 92.15%);
`

export const BottomDivSection1 = styled.div`
    display: flex;
    width: 100%;
    padding: var(--Gap-12, 12px) 16px;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    gap: 1px;
`

export const BottomDivSection1Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BottomDivSection2 = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Void = styled.div`
  width: 100%;
  height: 47px;
  flex-shrink: 0;
`;

export const BottomDivSection1Div1 = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content : center;
    gap: 8px;
    width: 343px;
    height: 67px;
`

export const Description = styled.p`
    width: 100%;
    color: var(--Primary-White, #F3F3F3);

    /* Text/Label/Label-S */
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 15.6px */
`

export const Emotion = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const PlaylistDuration = styled.div`
    width: 100%;
    color: var(--Primary-White, #F3F3F3);

    /* Caption 8 Semibold */
    font-family: "Open Sans";
    font-size: 8px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.3px;
`

export const BottomDivSection1Div2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1px;
    align-self: stretch;
`

export const TagBar = styled.div`
    display: flex;
    width: 286px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`

export const PlayBtn = styled.img`
    width: 56px;
    height: 56px;
`

export const EmotionImg = styled.img`
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
`

export const EmotionTitle = styled.h2`
    width: 277px;
    height: 45.627px;
    flex-shrink: 0;
    color: var(--White, #FFF);
    text-align: center;

    font-family: Poppins;
    font-size: 42px;
    font-style: normal;
    font-weight: 800;
    line-height: 100%;
    letter-spacing: -0.42px;
`

export const Icon_S = styled.span`
  color: var(--Primary, #000);

    /* Icon/Icon-M */
    font-family: "Material Symbols Rounded";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%; /* 24px */
`;

export const EmotionName = styled.p`
    color: #000;
    font-family: "Poppins";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;
`

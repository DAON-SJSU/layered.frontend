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
    justify-content: center;
    align-items: flex-start;
    background: linear-gradient(180deg, var(--Emotions-Anger, #FF4848) 0%, rgba(255, 255, 255, 0.00) 92.15%);
`

export const BottomDivSection1 = styled.div`
    display: flex;
    width: 375px;
    padding: var(--Gap-12, 12px) 16px;
    flex-direction: column;
    align-items: flex-end;
    gap: 1px;
`

export const BottomDivSection2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Void = styled.div`
  width: 100%;
  height: 47px;
  box-sizing: border-box;
`;

import styled from "@emotion/styled";

export const Card = styled.section`
  width: 100%;
  box-sizing: border-box;
  border-radius: var(--Radius-14);
  background: var(--Surface-Surface-20);
  padding: 16px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Gap-8);
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Gap-16);
  align-self: stretch;
`;

export const TextBoxH2 = styled.h2`
  color: var(--Grayscale-Grayscale-80);
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.4px;
`;
export const TextBoxP = styled.p`
  color: var(--Grayscale-Grayscale-60);
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
export const BlockImg = styled.img`
  height: 100%;
  width: auto;
  max-width: 40%;
  display: block;
  object-fit: contain;
`;
export const SectionFirst = styled.div`
  padding: 0 8px;
  display: flex;
  height: 74px;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const SectionSecond = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const MakePlaylistBtn = styled.button`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: var(--Radius-8);
  border: 1px solid
    var(--Stroke-Stroke-10-Translucence, rgba(146, 155, 173, 0.2));
  background: var(--Surface-Surface-30, #e6e9f0);
  height: 52px;
  width: 100%;
`;

export const BtnTitleStyle = styled.h2`
  color: var(--Grayscale-Grayscale-80);
  text-align: center;
  font-family: "Wanted Sans";
  font-size: var(--Body-Body-2-Size, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const BtnImg = styled.img`
  height: 60%;
  width: auto;
  max-width: 40%;
  display: block;
  object-fit: contain;
`;

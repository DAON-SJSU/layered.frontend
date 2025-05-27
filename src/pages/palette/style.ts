import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0;
  align-self: stretch;
  height: calc(100% - 48px);
`;

export const MianBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--Gap-24);
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--Gap-6);
`;

export const CubeSlider = styled.div`
  padding: 0 24px;
  justify-content: space-between;
  display: flex;
`;

export const AddButton = styled.div`
  gap: var(--Gap-8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 16px 24px;
  background-color: white;
`;

export const Cube = styled.img``;

export const Choice = styled.h1`
  font-size: 42px;
  font-size: 42px;
  font-family: Poppins;
  font-weight: 800;
  line-height: 42px;
  color: #1c1c1c;
`;

export const SubBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--Gap-16);
`;

export const Card = styled.div`
  background-color: white;
  gap: var(--Gap-16);
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  border-radius: 14px;
`;

export const ColorText = styled.h2`
  font-size: 24px;
  font-family: Poppins;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
`;

export const Icon_L = styled.span`
  font-size: 28px;
  font-family: Material Symbols Rounded;
  font-weight: 300;
  line-height: 100%;
  align-self: center;
`;

export const ButtonText = styled.h2`
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

export const Icon_S = styled.span`
  font-size: 20px;
  font-family: Material Symbols Rounded;
  font-weight: 400;
`;

export const Scripts = styled.p`
  color: black;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 120%;
  word-wrap: break-word;
  align-self: center;
`;

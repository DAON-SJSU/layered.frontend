import styled from "@emotion/styled";

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const BtnContainer = styled.button`
  display: flex;
  width: 100%;
  gap: var(--Gap-8);
  padding: var(--Gap-16) var(--Gap-24);
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: none;
  background: var(--Emotions-Dreamy);
  box-shadow: none;
  outline: none;
  overflow: hidden;
`;

export const BtnText = styled.p`
  color: var(--Text-Text-OnColor);
  text-align: center;

  font-family: "Wanted Sans";
  font-size: var(--Body-Body-2-Size);
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const Icon_S = styled.span`
  font-size: 20px;
  font-family: Material Symbols Rounded;
  font-weight: 300;
  line-height: 100%;
  align-self: center;
  color: white;
`;

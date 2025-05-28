import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: var(--Gap-24);
  flex: 1 0 0;
  align-self: stretch;
  height: 100%;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--Gap-6);
`;

export const SelectBar = styled.div`
  display: flex;
  width: calc(100% - 16px);
  padding: var(--Gap-8);
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: var(--Radius-14);
  background: var(--Surface-Surface-10);
`;

export const Metro = styled.img`
  width: 260px;
  height: 260px;
  aspect-ratio: 1/1;
`;

export const ContentH2 = styled.h2`
  color: var(--Text-Text-10);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.22px;
`;

export const ContentP = styled.p`
  color: var(--Text-Text-20);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const Option = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  display: flex;
  width: 100%;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--Radius-8);
  background: ${({ isSelected }) => (isSelected ? "#E6E9F0" : "transparent")};
  transition: background 0.2s;
`;

export const SelectBarInner = styled.div`
  display: flex;
  align-items: center;
  gap: var(--Gap-8);
  align-self: stretch;
`;

export const OptionInner = styled.div<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "#5D677A" : "#929BAD")};
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const BtnContainer = styled.div`
    display: flex;
    padding: var(--Gap-20) 0px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`
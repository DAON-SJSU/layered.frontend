import styled from "@emotion/styled";

const selectedColors = ["#E6C54C", "#8195FF", "#FF7878", "#55C04C"];

export const Musics = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Music = styled.div<{ isSelected: boolean; idx: number }>`
  font-size: 14px;
  line-height: 18px;
  display: flex;
  width: 39px;
  height: 40px;
  justify-content: center;
  align-items: center;
  aspect-ratio: 39/40;
  border-radius: var(--Radius-Max);
  background: ${({ isSelected, idx }) =>
    isSelected ? selectedColors[idx] : "var(--Surface-Surface-30)"};
  color: ${({ isSelected }) =>
    isSelected ? "#fff" : "#000"};

  font-weight: ${({ isSelected }) => (isSelected ? 700 : 400)};
`;
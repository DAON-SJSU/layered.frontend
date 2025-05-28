import styled from "@emotion/styled";

const slideIn = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0;
  align-self: stretch;
  height: calc(100% - 48px);
  ${slideIn}
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
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:active::after {
    width: 200px;
    height: 200px;
  }

  &.adding {
    animation: addPulse 0.5s ease;
  }

  @keyframes addPulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Cube = styled.img`
  transition: transform 0.3s ease;
  transform-origin: center;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

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
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 200px;
  height: auto;
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
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
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
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
  transform: translateY(0);
  margin: 0;
`;

export const SelectedBox = styled.div`
  display: flex;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  position: fixed;
  top: 55vh;
  gap: 8px;
`;

export const StackedCubesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;
  height: 50px;
  left: 0;
  right: 0;
  gap: -4px;
  align-items: center; /* Align items to the bottom */
  z-index: 10; /* Ensure it is above other content */
`;

export const StackedCubesRow = styled.div`
  display: flex;
  width: 172px;
  justify-content: flex-start;
`;

export const SmallCube = styled.img`
  margin-left: -6px;
  margin-right: -6px;
  margin-top: -27px;
  width: 52px;
  height: 52px;
`;

export const CircleButton = styled.div`
  bottom: 40px; /* Adjust as needed */
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11; /* Ensure buttons are above the container */
`;

export const LeftButton = styled(CircleButton)`
  left: 24px; /* Adjust as needed */
  top: 60%;
`;

export const RightButton = styled(CircleButton)`
  right: 24x; /* Adjust as needed */
  top: 60%;
`;

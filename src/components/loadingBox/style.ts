import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const dropAnimation = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SvgBox = styled.div`
  align-items: center;
  display: flex;
`;

export const LogoImg = styled.img`
  margin-top: -14px;
  animation: ${dropAnimation} 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: 0s;
`;

export const LogoImgz = styled.img`
  position: relative;
  z-index: 2;
  animation: ${dropAnimation} 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: 0.1s;
`;

const BaseLine = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstLine = BaseLine;
export const SecondLine = BaseLine;

export const TextBox = styled.div`
  position: relative;
  margin-top: -22px;
  gap: 6px;
  display: flex;
  flex-direction: column;
`;

export const MainText = styled.img`
  z-index: 3;
`;

export const SubText = styled.img``;

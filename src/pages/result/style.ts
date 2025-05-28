// final touch for PR
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Mobile = styled.main<{ bgColor: string }>`
  height: 100vh;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  background: ${({ bgColor }) => bgColor};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Void = styled.div`
  width: 100%;
  height: 47px;
`;

export const Header = styled.header`
  display: flex;
  height: 60px;
  padding: 8px 12px;
  align-items: center;
  gap: 14px;
  align-self: stretch;
`;

export const HeaderIcon = styled.p`
  font-family: 'Material Symbols Rounded', sans-serif;
  color: white;
  font-size: 24px;
  font-weight: normal;
  font-variation-settings: "FILL" 1;
`;

export const HeaderText = styled.p`
  display: flex;
  font-family: 'Poppins';
  font-size: 24px;
  font-weight: 800;
  line-height: 32px;
  color: white;
  margin: 0;
`;

export const MainBody = styled.div`
  position: relative;
  padding: 24px 24px 76px;
  height: 100%;
  box-sizing: border-box;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  justify-content: space-between;
  height: 100%;
`;

export const SubText = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: #1C1C1C;
  opacity: 0.6;
  margin: 0;
  padding: 0;

  @media (max-width: 480px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

export const EmotionText = styled.h1`
  font-family: 'Poppins';
  font-size: 56px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -1px;
  color: white;
  margin:0;

  @media (max-width: 480px) {
    font-size: 56px;
  }
`;

export const EmotionIcon = styled(motion.img)`
  width: 260px;
  height: 260px;
  margin: auto 0;

  @media (max-width: 480px) {
    width: 260px;
    height: 260px;
  }
`;

export const PlaylistButton = styled.button<{ buttonColor: string }>`
  font-family: 'Poppins';
  width: 100%;
  height: 56px;
  background-color: ${({ buttonColor }) => buttonColor};
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 12px;
`;


export const RetryText = styled.p`
  font-family: 'Poppins';
  font-size: 14px;
  color: #1C1C1C;
  opacity: 0.6;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 50px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

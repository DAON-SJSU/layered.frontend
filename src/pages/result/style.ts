import styled from "@emotion/styled";

export const Mobile = styled.main`
  height: 100vh;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Void = styled.div`
  width: 100%;
  height: 47px;
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
  gap: 24px; /* 수정됨 */
  justify-content: space-between;
  height: 100%;
`;

export const SubText = styled.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: #1C1C1C;
  opacity: 0.6;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

export const EmotionText = styled.h1`
  font-size: 56px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -1px; /* 수정됨 */
  color: white;
  margin-top: 6px;

  @media (max-width: 480px) {
    font-size: 56px;
  }
`;

export const EmotionIcon = styled.img`
  width: 260px;
  height: 260px;
  margin: auto 0;

  @media (max-width: 480px) {
    width: 260px;
    height: 260px;
  }
`;

export const PlaylistButton = styled.button`
  background-color: #ff4848;
  color: #f3f3f3;
  width: 100%;
  max-width: 327px;
  height: 56px;
  border: none;
  border-radius: 20px;
  font-size: 1.7rem;
  line-height: 24px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #dc2626;
  }

  @media (max-width: 480px) {
    height: 48px;
    font-size: 1.7rem;
    line-height: 20px;
    margin-bottom: 16px;
  }
`;

export const RetryText = styled.p`
  font-size: 1.3rem;
  color: #1C1C1C;
  opacity: 0.6;
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

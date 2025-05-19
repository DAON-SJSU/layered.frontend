import styled from "@emotion/styled";

export const Mobile = styled.main`
  height: max(calc(var(--vh, 1vh) * 100),100%);
  width: 100%;
  min-height: 100vh;
  max-width: 430px;
  margin: 0 auto;
  background: var(--Background);
  padding: 24px;
  box-sizing: border-box;
`;

export const Void = styled.div`
  width: 100%;
  height: 47px;
`;

import styled from "@emotion/styled";

export const FooterBar = styled.footer`
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    width: calc(100% - 32px);
    background-color: #282828;
    color: white;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    max-width: 430px;
    margin: 0 auto;
`
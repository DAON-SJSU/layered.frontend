import styled from "@emotion/styled"

export const undoStyle = {
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '100%',
    color: 'var(--Text-Text-30)',
}

export const Header = styled.header`
    position: fixed;
    display: flex;
    width:100%;
    height: 60px;
    padding: var(--Gap-8) var(--Gap-12);
    align-items: center;
    gap: 14px;
`

export const HeaderP = styled.p`
    color: var(--Text-Text-10);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: -0.4px;
`

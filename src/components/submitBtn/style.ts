import styled from "@emotion/styled";

export const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
`

export const BtnContainer = styled.button`
    display: flex;
    width: 100%;
    padding: var(--Gap-16) var(--Gap-24);
    justify-content: center;
    align-items: center;
    gap: var(--Gap-8);
    align-self: stretch;
    border-radius: 16px;
    border: none;
    background: var(--Emotions-Dreamy);
    box-shadow: none;
    outline: none;
    overflow: hidden;
`

export const BtnText = styled.p`
    color: var(--Text-Text-OnColor);
    text-align: center;

    font-family: "Wanted Sans";
    font-size: var(--Body-Body-2-Size);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`

export const Icon = {
    color: 'var(--Text-Text-OnColor)',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '100%'
}
import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    padding: var(--Gap-24) var(--Gap-16);
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: var(--Gap-24);
    flex: 1 0 0;
    align-self: stretch;
    height: auto;
`

export const MusicSelectBox = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: var(--Gap-20);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--Gap-16);
    border-radius: var(--Radius-8);
    background: var(--Surface-Surface-10);
`

export const SearchBar = styled.div`
    display: flex;
    box-sizing : border-box;
    width: 100%;
    height: 46px;
    padding: var(--Gap-12) var(--Gap-16);
    align-items: center;
    gap: var(--Gap-6);
    border-radius: var(--Radius-8);
    background: var(--Surface-Surface-10);
`

export const SubText = styled.p`
    color: var(--Text-Text-20);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`

export const Musics = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

export const Music = styled.div`
    display: flex;
    width: 39px;
    height: 40px;
    justify-content: center;
    align-items: center;
    aspect-ratio: 39/40;
    border-radius: var(--Radius-Max);
    background: var(--Surface-Surface-30);
`

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--Gap-8);
`

export const TextBoxH2 = styled.h2`
    color: var(--Text-Text-10);

    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.4px;
`

export const TextBoxP = styled.p`
    color: var(--Text-Text-30);

    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`

export const TextInput = styled.input`
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    width:100%;
    border: none;
    outline: none;
    background: transparent;
    line-height: 18px;
    &::placeholder {
        color: var(--Text-Text-30);
    }
`

export const searchIcon = {
    color: 'var(--Text-Text-30)',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '100%'
}

export const TypeBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--Gap-12);
`

export const TypeLine = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--Gap-8);
`


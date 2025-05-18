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

export const ListBar = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--Gap-12);
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
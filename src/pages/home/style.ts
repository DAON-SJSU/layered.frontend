import styled from '@emotion/styled';

export const Container = styled.div`
    margin: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Gap-20, 20px);
    flex: 1 0 0;
    align-self: stretch;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Gap-24, 24px);
    width: 100%;
    border-radius: var(--Radius-14, 14px);
    background: var(--Surface-Surface-20, #F0F2F5);
`
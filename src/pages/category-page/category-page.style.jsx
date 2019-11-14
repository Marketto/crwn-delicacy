import styled from 'styled-components';

export const CategoryPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-size: 2.2em;
    text-transform: uppercase;
    margin: 0 0 1em 0;
`;

export const ItemsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: -1em;
    &>* {
        flex-basis: 19em;
        margin: 1em 1em;
    }
`;
import styled from 'styled-components';

const googleButtonMainColor = '#4285f4';

export const CustomButtonContainer = styled.button`
    min-width: 10em;
    width: auto;
    height: 4em;
    letter-spacing: 0.1em;
    line-height: 4em;
    padding: 0 3em;
    font-size: 1em;
    background-color: black;
    color:white;
    text-transform: uppercase;
    font-family: 'Quicksand', sans-serif;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    &.google-sign-in {
        background-color: ${googleButtonMainColor};
        color: white;

        &:hover {
            color: ${googleButtonMainColor};
            background-color: white;
            border: 1px solid ${googleButtonMainColor};
        }
    }

    &.inverted {
        filter: invert(100%);
    }
`;
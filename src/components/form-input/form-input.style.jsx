import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'goldenrod';

const shrinkLabel = css`
    top: -1.4em;
    font-size: 1.2em;
    color: ${mainColor};
    text-shadow: 2px 2px 2px #111;
    text-transform: capitalize;
`;

export const GroupContainer = styled.div`
    position: relative;
    margin: 3em 0;
`;

export const FormInput = styled.input`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 1.2em;
    padding: 0.5em 0.4em 0.4em 0.4em;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 1.5em 0;

    &:focus {
        outline: none;
        & ~ label {
            ${ shrinkLabel }
        }
    }
    ${({ type }) => type === 'password' ? 'letter-spacing: 0.3em;' : ''}
`;

export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 1em;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0.3em;
    top: 0.6em;
    transition: 300ms ease all;
    text-transform: lowercase;

    ${({ filled }) => filled ? shrinkLabel : '' }
`;
import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartItemsContainer = styled.div`
    height: 15em;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: none;
`;


const emptyMessageFontSize = '2.4em';
export const EmptyMessageContainer = styled.div`
    display: block;
    padding: 1em;
    font-size: ${emptyMessageFontSize};
    line-height: calc(${emptyMessageFontSize} * 0.55);
    text-align: center;
    margin: auto;
    font-family: 'Sacramento', cursive;
    color: darkred;
`;

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 16em;
    height: 22em;
    display: flex;
    flex-direction: column;
    padding: 1.2em;
    border: 1px solid orange;
    background-color: wheat;
    top: 6.4em;
    right: 2.8em;
    z-index: 5;

    ${CustomButton} {
        margin-top: auto;
    }
`;
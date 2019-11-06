import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const CategoryItemContainer = styled.div`
    width: 21vw;
    height: 26em;
    display: flex;
    flex-flow: column;
    align-items: center;
    border: 1px solid darkgray;
    background-color: #a9a9a9b0;
    color: white;
    position: relative;

    &:hover {
        filter: saturate(20%);
        button {
            opacity: 0.7;
            filter: invert(100%);
        }
    }
`;

export const BackgroundImage = styled.div`
    background-image: ${({ imageUrl }) => `url(${ imageUrl })`};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
`;

export const CategoryFooterContainer = styled.div`
    width: 100%;
    min-height: 1.6em;
    display: flex;
    justify-content: space-between;
    font-size: 1.2em;
    align-items: center;
    margin: 0.2em 0;
    line-height: 1.1em;
`;

export const NameContainer = styled.div`
    margin: 0.6em;
`;

export const PriceContainer = styled.div`
    margin: 0 1em;
    min-width: 4em;
    text-align: right;
    &:after {
        display: inline-block;
        content: '€';
        margin: 0 -0.2em 0 0.4em;
    }
`;

export const OrderButton = styled(CustomButton)`
    width: 80%;
    opacity: 0;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
`;
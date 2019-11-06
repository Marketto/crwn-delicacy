import styled, { css } from 'styled-components';

export const CheckoutItemContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const ImageContent = styled.img`
    width: 6em;
    height: 7em;
    object-fit: cover;
`;

export const QuantityBlockContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CheckoutButtonStyles = css`
    cursor: pointer;
    &:hover {
        color: darkred;
    }
`;

const QuantityButtonStyles = css`
    font-weight: bold;
    margin: 0 1em;
    ${CheckoutButtonStyles}
`;

export const DecreaseButton = styled.div`
    ${QuantityButtonStyles}
`;

export const IncreaseButton = styled.div`
    ${QuantityButtonStyles}
`;

export const RemoveButton = styled.div`
    ${CheckoutButtonStyles}
`;

export const QuantityLabel = styled.div``;
export const ImageContainer = styled.div``;
export const NameBlockLabel = styled.div``;
export const PriceBlockLabel = styled.div``;
export const SmallBlockContainer = styled.div``;

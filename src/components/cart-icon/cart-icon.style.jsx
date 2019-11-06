import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const cartIconSize = '3em';
const shoppingIconSize = `calc(${cartIconSize} * 0.65)`;
const itemCountSize = `calc(${shoppingIconSize} * 0.45)`;

export const CartIconContainer = styled.div`
    width: ${cartIconSize};
    height: ${cartIconSize};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
    width: ${shoppingIconSize};
    height: ${shoppingIconSize};
`;

export const ItemCountContainer = styled.div`
    position: absolute;
    font-size: ${itemCountSize};
    font-weight: bold;
    margin-top: calc((${shoppingIconSize} - ${itemCountSize}) / 2.9);
    bottom: auto;
    top: auto;
`;

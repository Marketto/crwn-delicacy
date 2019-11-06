import React from 'react';

import {
    CartItemContainer,
    ItemDetailsContainer,
    ImageContainer,
    NameContainer,
    PriceContainer
} from './cart-item.style';

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
    <CartItemContainer>
        <ImageContainer src={ imageUrl } alt='item' />
        <ItemDetailsContainer>
            <NameContainer>{ name }</NameContainer>
            <PriceContainer>
                {quantity} x {price.toFixed(2)} €
            </PriceContainer>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;
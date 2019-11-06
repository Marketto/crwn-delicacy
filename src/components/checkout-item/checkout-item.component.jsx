import React from 'react';
import { connect } from 'react-redux';

import { updateItem } from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    ImageContainer,
    ImageContent,
    NameBlockLabel,
    QuantityBlockContainer,
    PriceBlockLabel,
    SmallBlockContainer,
    DecreaseButton,
    QuantityLabel,
    IncreaseButton,
    RemoveButton
} from './checkout-item.style';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <ImageContent alt='item' src={imageUrl}/>
            </ImageContainer>
            <NameBlockLabel>{ name }</NameBlockLabel>
            <QuantityBlockContainer>
                <DecreaseButton onClick={ () => removeItem(cartItem) }>&#10094;</DecreaseButton>
                <QuantityLabel>{ quantity }</QuantityLabel>
                <IncreaseButton onClick={ () => addItem(cartItem) }>&#10095;</IncreaseButton>
            </QuantityBlockContainer>
            <PriceBlockLabel>{ price.toFixed(2) } €</PriceBlockLabel>
            <SmallBlockContainer>
                <RemoveButton onClick={ () => clearItem(cartItem) }>&#10005;</RemoveButton>
            </SmallBlockContainer>
        </CheckoutItemContainer>
    )
};

const mapDispatchToState = dispatch => ({
    addItem: cartItem => dispatch(updateItem(cartItem, 1)),
    removeItem: cartItem => dispatch(updateItem(cartItem, -1)),
    clearItem: cartItem => dispatch(updateItem(cartItem, -cartItem.quantity))
});

export default connect(null, mapDispatchToState)(CheckoutItem);
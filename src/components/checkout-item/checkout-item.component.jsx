import React from 'react';
import { connect } from 'react-redux';

import { updateItem } from '../../redux/cart/cart.actions';

import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='checkout-block image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='checkout-block name'>{ name }</span>
            <div className='checkout-block quantity'>
                <span className='decrease' onClick={ () => removeItem(cartItem) }>&#10094;</span>
                <span>{ quantity }</span>
                <span className='increase' onClick={ () => addItem(cartItem) }>&#10095;</span>
            </div>
            <span className='checkout-block price'>{ price.toFixed(2) } €</span>
            <div className='checkout-block small-block'>
                <span className='remove' onClick={ () => clearItem(cartItem) }>&#10005;</span>
            </div>
        </div>
    )
};

const mapDispatchToState = dispatch => ({
    addItem: cartItem => dispatch(updateItem(cartItem, 1)),
    removeItem: cartItem => dispatch(updateItem(cartItem, -1)),
    clearItem: cartItem => dispatch(updateItem(cartItem, -cartItem.quantity))
});

export default connect(null, mapDispatchToState)(CheckoutItem);
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotalAmount } from '../../redux/cart/cart.selectors';

import './checkout.style.scss';

const CheckoutPage = ({ cartItems, cartTotalAmount }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span>Product</span>
            </div>
            <div className='checkout-block'>
                <span>Description</span>
            </div>
            <div className='checkout-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span>Price</span>
            </div>
            <div className='checkout-block small-block'>
                <span>Remove</span>
            </div>
        </div>
        <div className='checkout-body'>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
                ))
            }
        </div>
        <div className='checkout-footer'>
            <div className='total'>
                <label>Total:</label>
                <span>{ cartTotalAmount.toFixed(2) } €</span>
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotalAmount: selectCartTotalAmount
});

export default connect(mapStateToProps)(CheckoutPage);
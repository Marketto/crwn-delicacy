import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { setCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.style.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    if (cartItems.length) {
        return (
            <div className='cart-dropdown'>
                <div className='cart-items'>
                    {
                        cartItems.map(cartItem => (
                            <CartItem key={ cartItem.id } item={ cartItem } />
                        ))
                    }
                </div>
                <CustomButton onClick={ () => {
                    history.push('/checkout');
                    dispatch(setCartHidden());
                }}>Checkout</CustomButton>
            </div>
        );
    }
    return (
        <div className='cart-dropdown'>
            <span className='empty-message'>Nothing in your order yet!</span>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
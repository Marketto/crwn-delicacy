import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { setCartHidden } from '../../redux/cart/cart.actions';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.style';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    if (cartItems.length) {
        return (
            <CartDropdownContainer>
                <CartItemsContainer>
                    {
                        cartItems.map(cartItem => (
                            <CartItem key={ cartItem.id } item={ cartItem } />
                        ))
                    }
                </CartItemsContainer>
                <CustomButton onClick={ () => {
                    history.push('/checkout');
                    dispatch(setCartHidden());
                }}>Checkout</CustomButton>
            </CartDropdownContainer>
        );
    }
    return (
        <CartDropdownContainer>
            <EmptyMessageContainer>Nothing in your order yet!</EmptyMessageContainer>
        </CartDropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
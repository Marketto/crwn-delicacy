import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ItemCountContainer, ShoppingIconContainer } from './cart-icon.style';

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => (
    <CartIconContainer onClick={ toggleCartHidden }>
        <ShoppingIconContainer/>
        <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({ 
    cartItemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotalAmount } from '../../redux/cart/cart.selectors';

import {
    CheckoutPageContainer,
    CheckoutHeader,
    CheckoutBlock,
    CheckoutBody,
    CheckoutFooter,
    TestWarningContainer,
    ExpCvcContainer,
    Total
} from './checkout.style';

const CheckoutPage = ({ cartItems, cartTotalAmount }) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <CheckoutBlock>
                <span>Product</span>
            </CheckoutBlock>
            <CheckoutBlock>
                <span>Description</span>
            </CheckoutBlock>
            <CheckoutBlock>
                <span>Quantity</span>
            </CheckoutBlock>
            <CheckoutBlock>
                <span>Price</span>
            </CheckoutBlock>
            <CheckoutBlock className='small-block'>
                <span>Remove</span>
            </CheckoutBlock>
        </CheckoutHeader>
        <CheckoutBody>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
                ))
            }
        </CheckoutBody>
        <CheckoutFooter>
            <StripeCheckoutButton price={ cartTotalAmount }/>
            <Total>
                <label>Total:</label>
                <span>{ cartTotalAmount.toFixed(2) } €</span>
            </Total>
        </CheckoutFooter>
        <TestWarningContainer>
            <p>Please use the following test credit card</p>
            <p>4242 4242 4242 4242</p>
            <ExpCvcContainer>
                <span>Exp: 01/20</span>
                <span>CVC: 123</span>
            </ExpCvcContainer>
        </TestWarningContainer>    
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotalAmount: selectCartTotalAmount
});

export default connect(mapStateToProps)(CheckoutPage);
import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

export default () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>Checkout</CustomButton>
    </div>
);
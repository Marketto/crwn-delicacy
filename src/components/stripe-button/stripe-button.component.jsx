import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

// import {} from './stripe-button.style';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_yxMGHd3L9oGpkFd1d0LGYL8u00RJdMtw2O';

    const onToken = () => {
        alert('Daje!');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            panelLabel='Pay'
            name='Palate Wonders'
            currency='EUR'
            locale='it'
            shippingAddress
            billingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price.toFixed(2)} €`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;

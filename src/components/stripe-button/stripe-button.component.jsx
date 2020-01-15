import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_hDgqC4udeuWKTTOuvq0etf7400OZ9XRwTY';

  const onToken = token => {
    axios({
      url: 'https://cors-anywhere.herokuapp.com/localhost:4000/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(res => {
      alert('Payment successful')
    }).catch(err => {
      console.log('Payment error:', err);
      alert('There was an issue with your payment. Make sure you use the provided credit card.');
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

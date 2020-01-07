import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey = 'pk_test_hDgqC4udeuWKTTOuvq0etf7400OZ9XRwTY';

  const onToken = token => {
    console.log(token);
    alert('payment successful')
  }
  return (
    <StripeCheckout 
    label='Pay now' 
    name="Nicks' shop" 
    billingAddress 
    shippingAddress 
    image='https://sendeyo.com/up/d/f3eb2117da' 
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel= 'Pay now'
    token={onToken}
    stripeKey={publishKey}
    />
  );
};

export default stripeButton;


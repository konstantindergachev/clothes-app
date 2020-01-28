import PropTypes from 'prop-types';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { clientConfig } from '../../../config/stripe';
import './Stripe.scss';

const Stripe = ({ total, toPay, info }) => {
  //Transform total from dollars to cents
  //This data not to client show
  const totalForStripe = total * 100;
  const onToken = (token) => {
    toPay({ amount: totalForStripe, token });
    alert(info);
  };

  return (
    <StripeCheckout
      label="Оплата"
      name="Гардероб"
      shippingAddress
      billingAddress
      description={`Ваша общая сумма = $${total}`}
      amount={totalForStripe}
      panelLabel="Оплата"
      token={onToken}
      stripeKey={clientConfig.publishableKey}
    />
  );
};

Stripe.propTypes = {
  total: PropTypes.number.isRequired,
  toPay: PropTypes.func.isRequired,
  info: PropTypes.string.isRequired,
};

export default Stripe;

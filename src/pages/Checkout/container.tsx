import React from 'react';
import Checkout from './component';
import AddressFormContainer from './AddressForm/container';
import PaymentDetailsContainer from './PaymentDetails/container';
import ReviewPurchaseContainer from './ReviewPurchase/container';

function CheckoutContainer() {
  return (
    <Checkout>
      <AddressFormContainer id="address-form" />
      <PaymentDetailsContainer id="payment-details" />
      <ReviewPurchaseContainer id="review-purchase" />
    </Checkout>
  );
}

export default CheckoutContainer;

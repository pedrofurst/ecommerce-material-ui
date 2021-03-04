import React from 'react';
import ReviewPurchase from './component';
import { ContainerIdType } from '../../../features/types/ContainerIdType';
import useCartContext from '../../../features/providers/cart/useCartContext';
import useCheckoutContext from '../../../features/providers/checkout/useCheckoutContext';

function ReviewPurchaseContainer(props: ContainerIdType) {
  const { cart } = useCartContext();
  const { creditCard, shippingAddress } = useCheckoutContext();
  return (
    <ReviewPurchase
      cart={cart}
      creditCard={creditCard}
      shippingAddress={shippingAddress}
    />
  );
}

export default ReviewPurchaseContainer;

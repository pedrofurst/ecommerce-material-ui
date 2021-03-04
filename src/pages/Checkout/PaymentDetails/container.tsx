import React from 'react';
import useCheckoutContext from '../../../features/providers/checkout/useCheckoutContext';
import { ContainerIdType } from '../../../features/types/ContainerIdType';
import PaymentDetails from './component';

function PaymentDetailsContainer(props: ContainerIdType) {
  const { updateCreditCard } = useCheckoutContext();
  return <PaymentDetails updateCreditCard={updateCreditCard} />;
}

export default PaymentDetailsContainer;

import React from 'react';
import useCheckoutContext from '../../../features/providers/checkout/useCheckoutContext';
import { ContainerIdType } from '../../../features/types/ContainerIdType';
import AddressForm from './component';

function AddressFormContainer(props: ContainerIdType) {
  const { updateShippingAddress } = useCheckoutContext();
  return <AddressForm updateShippingAddress={updateShippingAddress} />;
}

export default AddressFormContainer;

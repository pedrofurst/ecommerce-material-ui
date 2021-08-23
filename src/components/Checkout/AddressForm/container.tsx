import React from 'react';
import useCheckoutContext from '@features/providers/checkout/useCheckoutContext';
import { ContainerIdType } from '@features/types/ContainerIdType';
import AddressForm from './component';

function AddressFormContainer(props: ContainerIdType) {
  const { updateShippingAddress, shippingAddress } = useCheckoutContext();
  return (
    <AddressForm
      updateShippingAddress={updateShippingAddress}
      shippingAddress={shippingAddress}
    />
  );
}

export default AddressFormContainer;

import { PropsWithChildren, useCallback, useState } from 'react';

import CheckoutContext from './context';
import { CreditCardType, ShippingAddressType } from './model';

function CheckoutProvider(props: PropsWithChildren<{}>) {
  const { children } = props;
  const [shippingAddress, setShippingAddress] = useState<ShippingAddressType>({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    postcode: '',
    country: '',
    state: '',
  });
  const [creditCard, setCreditCard] = useState<CreditCardType>({
    name: '',
    number: '',
    cvc: '',
    expiry: '',
  });

  const handleUpdateShippingAddress = useCallback(
    (value: ShippingAddressType) => {
      setShippingAddress(value);
    },
    []
  );

  const handleUpdateCreditCard = useCallback((value: CreditCardType) => {
    setCreditCard(value);
  }, []);

  return (
    <CheckoutContext.Provider
      value={{
        shippingAddress,
        creditCard,
        updateShippingAddress: handleUpdateShippingAddress,
        updateCreditCard: handleUpdateCreditCard,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutProvider;

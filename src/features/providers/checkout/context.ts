import React from 'react';
import {
  CheckoutContextType,
  CreditCardType,
  ShippingAddressType,
} from './model';

const CheckoutContext = React.createContext<CheckoutContextType>({
  creditCard: { name: '', number: '', cvc: '', expiry: '' },
  shippingAddress: {
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    postcode: '',
    country: '',
    state: '',
  },
  updateShippingAddress: (value: ShippingAddressType) => {},
  updateCreditCard: (value: CreditCardType) => {},
});

export default CheckoutContext;

export type CheckoutContextType = {
  shippingAddress: ShippingAddressType;
  creditCard: CreditCardType;
  updateShippingAddress: (value: ShippingAddressType) => void;
  updateCreditCard: (value: CreditCardType) => void;
};

export type ShippingAddressType = {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  postcode: string;
  country: string;
  state: string;
};

export type CreditCardType = {
  name: string;
  number: string;
  cvc: string;
  expiry: string;
};

import { useContext } from 'react';
import CheckoutContext from './context';

export default function useCheckoutContext() {
  return useContext(CheckoutContext);
}

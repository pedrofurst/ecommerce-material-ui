import { useContext } from 'react';
import CartContext from './context';

export default function useCartContext() {
  return useContext(CartContext);
}

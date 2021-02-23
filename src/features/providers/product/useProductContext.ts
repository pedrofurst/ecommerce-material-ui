import { useContext } from 'react';
import ProductContext from './context';

export default function useProductContext() {
  return useContext(ProductContext);
}

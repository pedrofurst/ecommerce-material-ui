import React from 'react';
import { ProductType } from '../product/model';
import { CartContextType } from './model';

const CartContext = React.createContext<CartContextType>({
  cart: {
    products: [],
  },
  addToCart: (product: ProductType) => {},
  removeFromCart: (product: ProductType) => {},
  clear: () => {},
});

export default CartContext;

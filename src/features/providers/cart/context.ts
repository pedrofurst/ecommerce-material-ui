import React from 'react';
import { ProductType } from '../product/model';
import { CartContextType } from './model';

const CartContext = React.createContext<CartContextType>({
  cart: {
    date: new Date(),
    products: [],
  },
  addToCart: (product: ProductType) => {},
  removeFromCart: (product: ProductType) => {},
});

export default CartContext;

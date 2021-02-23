import React from 'react';
import useCartContext from '../../features/providers/cart/useCartContext';
import Cart from './component';

function CartContainer() {
  const { cart, removeFromCart } = useCartContext();
  return <Cart cart={cart} removeFromCart={removeFromCart} />;
}

export default CartContainer;

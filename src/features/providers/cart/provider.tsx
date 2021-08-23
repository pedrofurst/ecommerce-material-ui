import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { ProductType } from '../product/model';

import CartContext from './context';
import { CartType } from './model';

const CART_KEY = '@@ECOMMERCE-CART-KEY';

function CartProvider(props: PropsWithChildren<{}>) {
  const { children } = props;
  const [cart, setCart] = useState<CartType>({
    products: [],
  });

  const handleAddToCart = useCallback((product: ProductType) => {
    setCart((currentCart) => ({
      ...currentCart,
      products: currentCart.products.concat(product),
    }));
  }, []);

  const handleAddFromCart = useCallback((value: ProductType) => {
    setCart((currentCart) => ({
      ...currentCart,
      products: currentCart.products.filter(
        (product: ProductType) => product.id !== value.id
      ),
    }));
  }, []);

  const handleClear = useCallback(() => {
    setCart({ products: [] });
    localStorage.removeItem(CART_KEY);
  }, []);

  useEffect(() => {
    if (cart.products.length > 0) {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart: handleAddToCart,
        removeFromCart: handleAddFromCart,
        clear: handleClear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

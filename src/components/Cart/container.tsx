import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import useCartContext from '@features/providers/cart/useCartContext';
import Cart from './component';

function CartContainer() {
  const { cart, removeFromCart } = useCartContext();
  const history = useHistory();

  const handleNavigateToCheckout = useCallback(
    () => history.push('/checkout'),
    [history]
  );

  const handleOnBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Cart
      cart={cart}
      removeFromCart={removeFromCart}
      onCheckout={handleNavigateToCheckout}
      onGoBack={handleOnBack}
    />
  );
}

export default CartContainer;

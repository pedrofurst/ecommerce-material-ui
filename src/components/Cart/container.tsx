import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import useCartContext from '@features/providers/cart/useCartContext';
import { ProductType } from '@features/providers/product/model';
import useProductContext from '@features/providers/product/useProductContext';
import Cart from './component';

function CartContainer() {
  const { updateSelectedProduct } = useProductContext();
  const { cart, removeFromCart } = useCartContext();
  const history = useHistory();

  const handleNavigateToCheckout = useCallback(
    () => history.push('/checkout'),
    [history]
  );

  const handleOnBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleSelectProduct = useCallback(
    (product: ProductType) => {
      updateSelectedProduct(product);
      history.push(`/product/${product.id}`);
    },
    [history, updateSelectedProduct]
  );

  return (
    <Cart
      cart={cart}
      removeFromCart={removeFromCart}
      onCheckout={handleNavigateToCheckout}
      onGoBack={handleOnBack}
      onSelectProduct={handleSelectProduct}
    />
  );
}

export default CartContainer;

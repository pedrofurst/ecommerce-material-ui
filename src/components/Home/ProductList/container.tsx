import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ProductType } from '@features/providers/product/model';
import { ContainerIdType } from '@features/types/ContainerIdType';
import useProductContext from '@features/providers/product/useProductContext';
import useCartContext from '@features/providers/cart/useCartContext';
import ProductList from './component';

function ProductListContainer(props: ContainerIdType) {
  const { products, updateSelectedProduct } = useProductContext();
  const { addToCart, removeFromCart, cart } = useCartContext();
  const history = useHistory();

  const handleSelectProduct = useCallback(
    (product: ProductType) => {
      updateSelectedProduct(product);
      history.push(`/product/${product.id}`);
    },
    [history, updateSelectedProduct]
  );

  return (
    <ProductList
      products={products}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
      onSelectProduct={handleSelectProduct}
    />
  );
}

export default ProductListContainer;

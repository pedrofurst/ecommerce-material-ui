import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import useCartContext from '../../features/providers/cart/useCartContext';
import { ProductType } from '../../features/providers/product/model';
import useProductContext from '../../features/providers/product/useProductContext';
import { ContainerIdType } from '../../features/types/ContainerIdType';
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

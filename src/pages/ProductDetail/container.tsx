import axios from 'axios';
import React, { useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useCartContext from '../../features/providers/cart/useCartContext';
import { ProductType } from '../../features/providers/product/model';
import useProductContext from '../../features/providers/product/useProductContext';
import ProductDetail from './component';

interface ProductDetailContainerParamType {
  productId: string;
}
function ProductDetailContainer() {
  const { selectedProduct, updateSelectedProduct } = useProductContext();
  const { cart, addToCart, removeFromCart } = useCartContext();
  const { productId } = useParams<ProductDetailContainerParamType>();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      if (productId && !selectedProduct) {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        updateSelectedProduct(response.data);
      }
    })();
  }, [productId, selectedProduct, updateSelectedProduct]);

  const handleGoBack = useCallback(() => history.goBack(), [history]);

  return (
    <>
      {selectedProduct && (
        <ProductDetail
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          product={selectedProduct}
          isAddedOnCart={
            !!cart.products.find(
              (product: ProductType) => product.id === selectedProduct.id
            )
          }
          onGoBack={handleGoBack}
        />
      )}
    </>
  );
}

export default ProductDetailContainer;

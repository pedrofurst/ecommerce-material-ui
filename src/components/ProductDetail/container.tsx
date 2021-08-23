import { useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useCartContext from '@features/providers/cart/useCartContext';
import { ProductType } from '@features/providers/product/model';
import useProductContext from '@features/providers/product/useProductContext';
import useApi from '@features/hooks/useApi';
import ProductDetail from './component';

interface ProductDetailContainerParamType {
  productId: string;
}
function ProductDetailContainer() {
  const { selectedProduct, updateSelectedProduct } = useProductContext();
  const { cart, addToCart, removeFromCart } = useCartContext();
  const { productId } = useParams<ProductDetailContainerParamType>();
  const history = useHistory();
  const { loadProduct } = useApi();

  useEffect(() => {
    (async () => {
      if (productId && !selectedProduct) {
        const response = await loadProduct(productId);
        updateSelectedProduct(response);
      }
    })();
  }, [productId, selectedProduct, updateSelectedProduct, loadProduct]);

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

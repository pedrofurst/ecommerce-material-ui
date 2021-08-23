import { PropsWithChildren, useCallback, useState } from 'react';
import ProductContext from './context';
import { ProductType } from './model';

function ProductProvider(props: PropsWithChildren<{}>) {
  const { children } = props;
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>();

  const handleUpdateProducts = useCallback((value: ProductType[]) => {
    setProducts(
      value.map((product: ProductType) => ({ ...product, matchesSearch: true }))
    );
  }, []);

  const handleUpdateSelectedProduct = useCallback((value: ProductType) => {
    setSelectedProduct(value);
  }, []);

  const handleFilterBy = useCallback((selectedCategory: string) => {
    setProducts((currentProducts: ProductType[]) =>
      [...currentProducts].map((product: ProductType) => ({
        ...product,
        matchesSearch: product.category === selectedCategory,
      }))
    );
  }, []);

  const handleClearFilter = useCallback(() => {
    setProducts((currentProducts: ProductType[]) =>
      [...currentProducts].map((product: ProductType) => ({
        ...product,
        matchesSearch: true,
      }))
    );
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products: products.filter((product) => product.matchesSearch),
        selectedProduct,
        updateProducts: handleUpdateProducts,
        updateSelectedProduct: handleUpdateSelectedProduct,
        filterBy: handleFilterBy,
        clearFilter: handleClearFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;

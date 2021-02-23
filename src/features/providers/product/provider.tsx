import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import useCategoryContext from '../category/useCategoryContext';

import ProductContext from './context';
import { FilterTypeEnum, ProductType } from './model';

function ProductProvider(props: PropsWithChildren<{}>) {
  const { children } = props;
  const { selectedCategory } = useCategoryContext();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>();

  const handleUpdateProducts = useCallback((value: ProductType[]) => {
    setProducts(value);
    setFilteredProducts(value);
  }, []);

  const handleUpdateSelectedProduct = useCallback((value: ProductType) => {
    setSelectedProduct(value);
  }, []);

  const handleFilterBy = useCallback(
    (filterType: FilterTypeEnum) => {
      if (filterType === FilterTypeEnum.CATEGORIES && selectedCategory) {
        setFilteredProducts(
          products.filter(
            (product: ProductType) => product.category === selectedCategory
          )
        );
      } else {
        setFilteredProducts(products);
      }
    },
    [products, selectedCategory]
  );

  useEffect(() => {
    handleFilterBy(FilterTypeEnum.CATEGORIES);
  }, [selectedCategory, handleFilterBy]);

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        selectedProduct,
        updateProducts: handleUpdateProducts,
        updateSelectedProduct: handleUpdateSelectedProduct,
        filterBy: handleFilterBy,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;

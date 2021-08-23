import React from 'react';
import { ProductContextType, ProductType } from './model';

const ProductContext = React.createContext<ProductContextType>({
  products: [],
  updateProducts: (value: ProductType[]) => {},
  updateSelectedProduct: (value: ProductType) => {},
  filterBy: (value: string) => {},
  clearFilter: () => {},
});

export default ProductContext;

import React from 'react';
import { FilterTypeEnum, ProductContextType, ProductType } from './model';

const ProductContext = React.createContext<ProductContextType>({
  products: [],
  updateProducts: (value: ProductType[]) => {},
  updateSelectedProduct: (value: ProductType) => {},
  filterBy: (value: FilterTypeEnum) => {},
});

export default ProductContext;

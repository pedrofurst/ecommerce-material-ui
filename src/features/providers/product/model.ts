export enum FilterTypeEnum {
  CATEGORIES,
  FAVORITES,
}

export type ProductContextType = {
  products: ProductType[];
  updateProducts: (products: ProductType[]) => void;
  selectedProduct?: ProductType;
  updateSelectedProduct: (products: ProductType) => void;
  filterBy: (filterType: FilterTypeEnum) => void;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type ProductContextType = {
  products: ProductType[];
  updateProducts: (products: ProductType[]) => void;
  selectedProduct?: ProductType;
  updateSelectedProduct: (products: ProductType) => void;
  filterBy: (selectedCategory: string) => void;
  clearFilter: () => void;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  matchesSearch: boolean;
};

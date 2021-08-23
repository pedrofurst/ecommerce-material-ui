import { ProductType } from '../product/model';

export type CartContextType = {
  cart: CartType;
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
  clear: () => void;
};

export type CartType = {
  products: ProductType[];
};

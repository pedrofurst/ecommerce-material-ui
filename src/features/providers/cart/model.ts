import { ProductType } from '../product/model';

export type CartContextType = {
  cart: CartType;
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
};

export type CartType = {
  date: Date;
  products: ProductType[];
};

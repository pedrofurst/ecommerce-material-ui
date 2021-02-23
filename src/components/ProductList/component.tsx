import React from 'react';
import ProductCard from '../ProductCard/component';
import { ProductType } from '../../features/providers/product/model';
import { CartType } from '../../features/providers/cart/model';

type ProductListPropsType = {
  products: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
  cart: CartType;
  onSelectProduct: (product: ProductType) => void;
};

function ProductList(props: ProductListPropsType) {
  const { products, addToCart, removeFromCart, cart, onSelectProduct } = props;
  return (
    <>
      {products.map((product: ProductType) => (
        <React.Fragment key={product.id}>
          <ProductCard
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isAddedOnCart={
              !!cart.products.find((value) => value.id === product.id)
            }
            onSelectProduct={onSelectProduct}
          />
        </React.Fragment>
      ))}
    </>
  );
}

export default ProductList;

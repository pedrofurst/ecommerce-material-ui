import ProductListContainer from './ProductList/container';
import Home from './component';

function HomeContainer() {
  return (
    <Home>
      <ProductListContainer id="product-list" />
    </Home>
  );
}

export default HomeContainer;

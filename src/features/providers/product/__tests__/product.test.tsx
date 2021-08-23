import { mount } from 'enzyme';
import { ProductType } from '../model';
import ProductProvider from '../provider';
import useProductContext from '../useProductContext';

const PRODUCT: ProductType = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: 'Category1',
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  matchesSearch: false,
};
const PRODUCT2: ProductType = {
  id: 2,
  title: 'Mens Casual Premium Slim Fit T-Shirts ',
  price: 22.3,
  description:
    'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
  category: 'Category2',
  image:
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  matchesSearch: false,
};

describe('Product context', () => {
  it('Should update products', () => {
    const TestComponent = () => {
      const { products, updateProducts } = useProductContext();

      const handleUpdateProducts = () => {
        updateProducts([PRODUCT]);
      };
      return (
        <>
          <div>
            {products.map((product) => (
              <div className="product-id" key={product.id}>
                {product.description}
              </div>
            ))}
          </div>
          <button type="button" onClick={handleUpdateProducts} id="update">
            update
          </button>
        </>
      );
    };
    const wrapper = mount(
      <ProductProvider>
        <TestComponent />
      </ProductProvider>
    );
    expect(wrapper.find('.product-id').exists()).toBeFalsy();
    wrapper.find('#update').simulate('click');
    expect(wrapper.find('.product-id').exists()).toBeTruthy();
    expect(wrapper.find('.product-id').length).toBe(1);
  });

  it('Should select a product', () => {
    const TestComponent = () => {
      const { selectedProduct, updateSelectedProduct } = useProductContext();

      const handleSelectProduct = () => {
        updateSelectedProduct(PRODUCT);
      };
      return (
        <>
          <div id="selected-product">{selectedProduct?.title}</div>
          <button type="button" onClick={handleSelectProduct} id="select">
            select
          </button>
        </>
      );
    };
    const wrapper = mount(
      <ProductProvider>
        <TestComponent />
      </ProductProvider>
    );
    expect(wrapper.find('#selected-product').text()).toEqual('');
    wrapper.find('#select').simulate('click');
    expect(wrapper.find('#selected-product').text()).toEqual(
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );
  });

  it('Should filter by selected category', () => {
    const TestComponent = () => {
      const { updateProducts, filterBy, products } = useProductContext();

      const handleUpdateProducts = () => {
        updateProducts([PRODUCT, PRODUCT2]);
      };

      const handleFilterByCategory = () => {
        filterBy('Category1');
      };
      return (
        <>
          <div className="products">
            {products.map((product) => (
              <div className="product-id" key={product.id}>
                {product.description}
              </div>
            ))}
          </div>
          <button type="button" onClick={handleFilterByCategory} id="filter">
            filter
          </button>
          <button type="button" onClick={handleUpdateProducts} id="update">
            update
          </button>
        </>
      );
    };
    const wrapper = mount(
      <ProductProvider>
        <TestComponent />
      </ProductProvider>
    );
    wrapper.find('#update').simulate('click');
    expect(wrapper.find('.product-id').length).toBe(2);
    wrapper.find('#filter').simulate('click');
    expect(wrapper.find('.product-id').length).toBe(1);
  });

  it('Should clear search matches when call clearFilter', () => {
    const TestComponent = () => {
      const {
        updateProducts,
        filterBy,
        products,
        clearFilter,
      } = useProductContext();

      const handleUpdateProducts = () => {
        updateProducts([PRODUCT, PRODUCT2]);
      };

      const handleFilterByCategory = () => {
        filterBy('Category1');
      };

      const handleClearFilter = () => {
        clearFilter();
      };
      return (
        <>
          <div className="products">
            {products.map((product) => (
              <div className="product-id" key={product.id}>
                {product.description}
              </div>
            ))}
          </div>
          <button type="button" onClick={handleFilterByCategory} id="filter">
            filter
          </button>
          <button type="button" onClick={handleUpdateProducts} id="update">
            update
          </button>
          <button type="button" onClick={handleClearFilter} id="clear">
            clear
          </button>
        </>
      );
    };
    const wrapper = mount(
      <ProductProvider>
        <TestComponent />
      </ProductProvider>
    );
    wrapper.find('#update').simulate('click');
    expect(wrapper.find('.product-id').length).toBe(2);
    wrapper.find('#filter').simulate('click');
    expect(wrapper.find('.product-id').length).toBe(1);
    wrapper.find('#clear').simulate('click');
    expect(wrapper.find('.product-id').length).toBe(2);
  });
});

import { mount } from 'enzyme';
import CheckoutProvider from '../provider';
import useCartContext from '../useCartContext';

const PRODUCT = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: 'Category1',
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  matchesSearch: false,
};

describe('Cart context', () => {
  it('Should add a product in the cart', () => {
    const setItemMock = jest.fn();
    Storage.prototype.setItem = setItemMock;
    const TestComponent = () => {
      const { cart, addToCart } = useCartContext();

      const handleAddToCart = () => {
        addToCart(PRODUCT);
      };
      return (
        <>
          <div id="name">
            {cart.products.map((product) => (
              <div key={product.id}>
                <span id="id">{product.id}</span>
                <span id="title">{product.title}</span>
                <span id="price">{product.price}</span>
                <span id="description">{product.description}</span>
                <span id="category">{product.category}</span>
                <span id="image">{product.image}</span>
              </div>
            ))}
          </div>
          <button type="button" onClick={handleAddToCart} id="add">
            add
          </button>
        </>
      );
    };
    const wrapper = mount(
      <CheckoutProvider>
        <TestComponent />
      </CheckoutProvider>
    );
    expect(wrapper.find('#id').exists()).toBeFalsy();
    wrapper.find('#add').simulate('click');
    expect(setItemMock).toHaveBeenCalledWith(
      '@@ECOMMERCE-CART-KEY',
      JSON.stringify({ products: [PRODUCT] })
    );
    expect(wrapper.find('#id').text()).toEqual('1');
    expect(wrapper.find('#title').text()).toEqual(
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );
    expect(wrapper.find('#price').text()).toEqual('109.95');
    expect(wrapper.find('#description').text()).toEqual(
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
    );
    expect(wrapper.find('#category').text()).toEqual('Category1');
    expect(wrapper.find('#image').text()).toEqual(
      'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    );
  });

  it('Should remove a product from the cart', () => {
    const TestComponent = () => {
      const { cart, addToCart, removeFromCart } = useCartContext();

      const handleAddToCart = () => {
        addToCart(PRODUCT);
      };

      const handleRemoveFromCart = () => {
        removeFromCart(PRODUCT);
      };
      return (
        <>
          <div id="name">
            {cart.products.map((product) => (
              <div key={product.id}>
                <span id="id">{product.id}</span>
                <span id="title">{product.title}</span>
                <span id="price">{product.price}</span>
                <span id="description">{product.description}</span>
                <span id="category">{product.category}</span>
                <span id="image">{product.image}</span>
              </div>
            ))}
          </div>
          <button type="button" onClick={handleAddToCart} id="add">
            add
          </button>
          <button type="button" onClick={handleRemoveFromCart} id="remove">
            remove
          </button>
        </>
      );
    };
    const wrapper = mount(
      <CheckoutProvider>
        <TestComponent />
      </CheckoutProvider>
    );
    expect(wrapper.find('#id').exists()).toBeFalsy();
    wrapper.find('#add').simulate('click');
    expect(wrapper.find('#id').text()).toEqual('1');
    wrapper.find('#remove').simulate('click');
    expect(wrapper.find('#id').exists()).toBeFalsy();
  });

  it('Should clear the cart', () => {
    const TestComponent = () => {
      const { cart, addToCart, clear } = useCartContext();

      const handleAddToCart = () => {
        addToCart(PRODUCT);
      };

      const handleClear = () => {
        clear();
      };
      return (
        <>
          <div id="name">
            {cart.products.map((product) => (
              <div key={product.id}>
                <span id="id">{product.id}</span>
                <span id="title">{product.title}</span>
                <span id="price">{product.price}</span>
                <span id="description">{product.description}</span>
                <span id="category">{product.category}</span>
                <span id="image">{product.image}</span>
              </div>
            ))}
          </div>
          <button type="button" onClick={handleAddToCart} id="add">
            add
          </button>
          <button type="button" onClick={handleClear} id="clear">
            clear
          </button>
        </>
      );
    };
    const wrapper = mount(
      <CheckoutProvider>
        <TestComponent />
      </CheckoutProvider>
    );
    expect(wrapper.find('#id').exists()).toBeFalsy();
    wrapper.find('#add').simulate('click');
    expect(wrapper.find('#id').text()).toEqual('1');
    wrapper.find('#clear').simulate('click');
    expect(wrapper.find('#id').exists()).toBeFalsy();
  });

  it('Should load products when there are products in the local storage', () => {
    const getItemMock = jest.fn(() => JSON.stringify({ products: [PRODUCT] }));
    Storage.prototype.getItem = getItemMock;
    const TestComponent = () => {
      const { cart } = useCartContext();
      return (
        <>
          <div id="name">
            {cart.products.map((product) => (
              <div key={product.id}>
                <span id="id">{product.id}</span>
                <span id="title">{product.title}</span>
                <span id="price">{product.price}</span>
                <span id="description">{product.description}</span>
                <span id="category">{product.category}</span>
                <span id="image">{product.image}</span>
              </div>
            ))}
          </div>
        </>
      );
    };
    const wrapper = mount(
      <CheckoutProvider>
        <TestComponent />
      </CheckoutProvider>
    );
    expect(wrapper.find('#id').text()).toEqual('1');
    expect(wrapper.find('#title').text()).toEqual(
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );
    expect(wrapper.find('#price').text()).toEqual('109.95');
    expect(wrapper.find('#description').text()).toEqual(
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
    );
    expect(wrapper.find('#category').text()).toEqual('Category1');
    expect(wrapper.find('#image').text()).toEqual(
      'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    );
  });
});

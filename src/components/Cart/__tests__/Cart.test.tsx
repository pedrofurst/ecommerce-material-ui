import { CartType } from '@features/providers/cart/model';
import { IconButton } from '@material-ui/core';
import { shallow } from 'enzyme';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import renderer from 'react-test-renderer';
import { ProductType } from '@features/providers/product/model';
import Cart from '../component';
import EmptyCart from '../EmptyCart/component';

const PRODUCT: ProductType = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  matchesSearch: false,
};

const PRODUCT2 = {
  id: 2,
  title: 'Mens Casual Premium Slim Fit T-Shirts ',
  price: 22.3,
  description:
    'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
  category: "men's clothing",
  image:
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  matchesSearch: false,
};

describe('<Cart />', () => {
  it('Should show empty card component when there is no products in the cart', () => {
    const cart: CartType = {
      products: [],
    };
    const wrapper = shallow(
      <Cart
        onCheckout={jest.fn()}
        onGoBack={jest.fn()}
        onSelectProduct={jest.fn()}
        cart={cart}
        removeFromCart={jest.fn()}
      />
    );
    expect(wrapper.find(EmptyCart).exists()).toBeTruthy();
  });

  it('Should have back button', () => {
    const wrapper = shallow(
      <Cart
        onCheckout={jest.fn()}
        onGoBack={jest.fn()}
        onSelectProduct={jest.fn()}
        cart={{
          products: [],
        }}
        removeFromCart={jest.fn()}
      />
    );
    expect(wrapper.find(IconButton).exists()).toBeTruthy();
    expect(wrapper.find(ArrowBackIcon).exists()).toBeTruthy();
  });

  it('Should call onGoBack function when the user clicks on back button', () => {
    const onGoBack = jest.fn();
    const wrapper = shallow(
      <Cart
        onCheckout={jest.fn()}
        onGoBack={onGoBack}
        onSelectProduct={jest.fn()}
        cart={{
          products: [],
        }}
        removeFromCart={jest.fn()}
      />
    );
    wrapper.find(IconButton).simulate('click');
    expect(onGoBack).toHaveBeenCalled();
  });

  it('Should call onCheckout when there are products in the cart and the user clicks on Proceed to checkout', () => {
    const onCheckout = jest.fn();
    const wrapper = shallow(
      <Cart
        onCheckout={onCheckout}
        onGoBack={jest.fn()}
        onSelectProduct={jest.fn()}
        cart={{
          products: [PRODUCT],
        }}
        removeFromCart={jest.fn()}
      />
    );
    wrapper.find('#procced-to-checkout-button').simulate('click');
    expect(onCheckout).toHaveBeenCalled();
  });

  it('Should call onSelectProduct when the user selects a product in the cart', () => {
    const onSelectProduct = jest.fn();
    const wrapper = shallow(
      <Cart
        onCheckout={jest.fn()}
        onGoBack={jest.fn()}
        onSelectProduct={onSelectProduct}
        cart={{
          products: [PRODUCT],
        }}
        removeFromCart={jest.fn()}
      />
    );
    wrapper.find('.product-item').simulate('click');
    expect(onSelectProduct).toHaveBeenCalledWith(PRODUCT);
  });

  it('Should call removeFromCart when the user selects a product in the cart', () => {
    const removeFromCart = jest.fn();
    const stopPropagation = jest.fn();
    const wrapper = shallow(
      <Cart
        onCheckout={jest.fn()}
        onGoBack={jest.fn()}
        onSelectProduct={jest.fn()}
        cart={{
          products: [PRODUCT],
        }}
        removeFromCart={removeFromCart}
      />
    );
    wrapper.find('#remove-from-cart-button').simulate('click', {
      stopPropagation,
    });
    expect(removeFromCart).toHaveBeenCalledWith(PRODUCT);
    expect(stopPropagation).toHaveBeenCalled();
  });

  it('Should render correctly when there is one product in the cart ', () => {
    const component = renderer.create(
      <Cart
        onCheckout={jest.fn()}
        onGoBack={jest.fn()}
        onSelectProduct={jest.fn()}
        cart={{
          products: [PRODUCT],
        }}
        removeFromCart={jest.fn()}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should render correctly when there are more than one product in the cart ', () => {
    const component = renderer.create(
      <Cart
        onCheckout={jest.fn()}
        onGoBack={jest.fn()}
        onSelectProduct={jest.fn()}
        cart={{
          products: [PRODUCT, PRODUCT2],
        }}
        removeFromCart={jest.fn()}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

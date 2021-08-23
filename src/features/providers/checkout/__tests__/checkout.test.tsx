import { mount } from 'enzyme';
import { CreditCardType, ShippingAddressType } from '../model';
import CheckoutProvider from '../provider';
import useCheckoutContext from '../useCheckoutContext';

const CREDIT_CARD: CreditCardType = {
  number: '1234 1234 1234 1234',
  cvc: '333',
  expiry: '6/22/2024',
  name: 'Test name',
};

const SHIPPING_ADDRESS: ShippingAddressType = {
  city: 'city test',
  country: 'country test',
  firstName: 'Test first name',
  lastName: 'Test last name',
  postcode: 'postcode test',
  state: 'state test',
  streetAddress: 'street address test',
};

describe('Checkout context', () => {
  it('Should update credit card', () => {
    const TestComponent = () => {
      const { creditCard, updateCreditCard } = useCheckoutContext();

      const handleUpdateCreditCard = () => {
        updateCreditCard(CREDIT_CARD);
      };
      return (
        <>
          <span id="name">{creditCard.name}</span>
          <span id="number">{creditCard.number}</span>
          <span id="expiry">{creditCard.expiry}</span>
          <span id="cvc">{creditCard.cvc}</span>
          <button type="button" onClick={handleUpdateCreditCard} id="update">
            update
          </button>
        </>
      );
    };
    const wrapper = mount(
      <CheckoutProvider>
        <TestComponent />
      </CheckoutProvider>
    );
    expect(wrapper.find('#name').text()).toEqual('');
    expect(wrapper.find('#number').text()).toEqual('');
    expect(wrapper.find('#expiry').text()).toEqual('');
    expect(wrapper.find('#cvc').text()).toEqual('');
    wrapper.find('#update').simulate('click');
    expect(wrapper.find('#name').text()).toEqual('Test name');
    expect(wrapper.find('#number').text()).toEqual('1234 1234 1234 1234');
    expect(wrapper.find('#expiry').text()).toEqual('6/22/2024');
    expect(wrapper.find('#cvc').text()).toEqual('333');
  });

  it('Should update shipping address', () => {
    const TestComponent = () => {
      const { shippingAddress, updateShippingAddress } = useCheckoutContext();

      const handleUpdateShippingAddress = () => {
        updateShippingAddress(SHIPPING_ADDRESS);
      };
      return (
        <>
          <span id="city">{shippingAddress.city}</span>
          <span id="country">{shippingAddress.country}</span>
          <span id="firstName">{shippingAddress.firstName}</span>
          <span id="lastName">{shippingAddress.lastName}</span>
          <span id="postcode">{shippingAddress.postcode}</span>
          <span id="state">{shippingAddress.state}</span>
          <span id="streetAddress">{shippingAddress.streetAddress}</span>
          <button
            type="button"
            onClick={handleUpdateShippingAddress}
            id="update"
          >
            update
          </button>
        </>
      );
    };
    const wrapper = mount(
      <CheckoutProvider>
        <TestComponent />
      </CheckoutProvider>
    );
    expect(wrapper.find('#city').text()).toEqual('');
    expect(wrapper.find('#country').text()).toEqual('');
    expect(wrapper.find('#firstName').text()).toEqual('');
    expect(wrapper.find('#lastName').text()).toEqual('');
    expect(wrapper.find('#postcode').text()).toEqual('');
    expect(wrapper.find('#state').text()).toEqual('');
    expect(wrapper.find('#streetAddress').text()).toEqual('');
    wrapper.find('#update').simulate('click');
    expect(wrapper.find('#city').text()).toEqual('city test');
    expect(wrapper.find('#country').text()).toEqual('country test');
    expect(wrapper.find('#firstName').text()).toEqual('Test first name');
    expect(wrapper.find('#lastName').text()).toEqual('Test last name');
    expect(wrapper.find('#postcode').text()).toEqual('postcode test');
    expect(wrapper.find('#state').text()).toEqual('state test');
    expect(wrapper.find('#streetAddress').text()).toEqual(
      'street address test'
    );
  });
});

import useCartContext from '@features/providers/cart/useCartContext';
import Checkout from './component';
import AddressFormContainer from './AddressForm/container';
import PaymentDetailsContainer from './PaymentDetails/container';
import ReviewPurchaseContainer from './ReviewPurchase/container';

function CheckoutContainer() {
  const { clear } = useCartContext();
  return (
    <Checkout onClearCart={clear}>
      <AddressFormContainer id="address-form" />
      <PaymentDetailsContainer id="payment-details" />
      <ReviewPurchaseContainer id="review-purchase" />
    </Checkout>
  );
}

export default CheckoutContainer;

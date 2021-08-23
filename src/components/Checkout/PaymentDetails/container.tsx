import useCheckoutContext from '@features/providers/checkout/useCheckoutContext';
import { ContainerIdType } from '@features/types/ContainerIdType';
import PaymentDetails from './component';

function PaymentDetailsContainer(props: ContainerIdType) {
  const { updateCreditCard, creditCard } = useCheckoutContext();
  return (
    <PaymentDetails
      updateCreditCard={updateCreditCard}
      creditCard={creditCard}
    />
  );
}

export default PaymentDetailsContainer;

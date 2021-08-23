import {
  Button,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@material-ui/core';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import useChildren from '@features/hooks/useChildren';
import Confirmation from '@components/Confirmation/component';
import StepIcon from './StepIcon/component';
import useStyles from './styles';
import StepConnector from './StepConnector/component';

type CheckoutPropsType = {
  children: ReactElement[];
  onClearCart: () => void;
};

function Checkout(props: CheckoutPropsType) {
  const { children, onClearCart } = props;
  const classes = useStyles();
  const steps = ['Shipping', 'Payment', 'Review'];
  const [activeStep, setActiveStep] = useState(0);
  const { getChildrenById } = useChildren(children);

  const handleStepNext = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setActiveStep((currentStep) => currentStep + 1);
  }, []);

  const handleStepBack = useCallback(() => {
    setActiveStep((currentStep) => currentStep - 1);
  }, []);

  useEffect(() => {
    if (activeStep === steps.length) {
      onClearCart();
    }
  }, [activeStep, onClearCart, steps.length]);

  const addressForm = getChildrenById('address-form');
  const paymentDetails = getChildrenById('payment-details');
  const reviewPurchase = getChildrenById('review-purchase');

  const getStepContent = useCallback(
    (step: number) => {
      switch (step) {
        case 0:
          return addressForm;
        case 1:
          return paymentDetails;
        case 2:
          return reviewPurchase;
        default:
          throw new Error('Unknown step');
      }
    },
    [addressForm, paymentDetails, reviewPurchase]
  );

  return (
    <Paper className={classes.checkoutContainer}>
      <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography>
      <Stepper
        className={classes.stepper}
        activeStep={activeStep}
        alternativeLabel
        connector={<StepConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Container className={classes.container}>
        {activeStep === steps.length ? (
          <Confirmation />
        ) : (
          <form onSubmit={handleStepNext} className={classes.paymentForm}>
            <div className={classes.formContent}>
              {getStepContent(activeStep)}
            </div>
            <div className={classes.actionButtonsContainer}>
              {activeStep !== 0 && (
                <Button onClick={handleStepBack}>Back</Button>
              )}
              <Button variant="outlined" color="primary" type="submit">
                {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
              </Button>
            </div>
          </form>
        )}
      </Container>
    </Paper>
  );
}

export default Checkout;

import {
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@material-ui/core';
import { ReactElement, useCallback, useState } from 'react';
import useChildren from '@features/hooks/useChildren';
import StepIcon from './StepIcon/component';
import useStyles from './styles';
import StepConnector from './StepConnector/component';

type CheckoutPropsType = {
  children: ReactElement[];
};

function Checkout(props: CheckoutPropsType) {
  const { children } = props;
  const classes = useStyles();
  const steps = ['Shipping', 'Payment', 'Review'];
  const [activeStep, setActiveStep] = useState(0);
  const { getChildrenById } = useChildren(children);

  const handleStepNext = useCallback(() => {
    setActiveStep((currentStep) => currentStep + 1);
  }, []);

  const handleStepBack = useCallback(() => {
    setActiveStep((currentStep) => currentStep - 1);
  }, []);

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
      <>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <div className={classes.actionButtonsContainer}>
              {activeStep !== 0 && (
                <Button onClick={handleStepBack}>Back</Button>
              )}
              <Button
                variant="outlined"
                color="primary"
                onClick={handleStepNext}
              >
                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
              </Button>
            </div>
          </>
        )}
      </>
    </Paper>
  );
}

export default Checkout;

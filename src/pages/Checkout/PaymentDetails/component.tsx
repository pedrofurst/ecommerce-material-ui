import { useCallback, useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import 'react-credit-cards/es/styles-compiled.css';
import Card, { Focused } from 'react-credit-cards';
import useStyles from './styles';
import { CreditCardType } from '../../../features/providers/checkout/model';

type PaymentDetailsPropsType = {};

function PaymentDetails(props: PaymentDetailsPropsType) {
  const classes = useStyles();
  const [focused, setFocused] = useState<Focused>();
  const [creditCard, setCreditCard] = useState<CreditCardType>({
    name: '',
    number: '',
    cvc: '',
    expiry: '',
  });

  const handleChange = useCallback((event) => {
    const {
      target: { name, value },
    } = event;
    setCreditCard((currentCreditCard) => ({
      ...currentCreditCard,
      [name]: value,
    }));
  }, []);

  const handleInputFocus = useCallback((event) => {
    const {
      target: { name },
    } = event;
    setFocused(name);
  }, []);

  const handleCVCBlur = useCallback(() => {
    setFocused(undefined);
  }, []);

  return (
    <>
      <Card
        name={creditCard.name}
        number={creditCard.number}
        expiry={creditCard.expiry}
        cvc={creditCard.cvc}
        focused={focused}
      />
      <div className={classes.creditCardContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="cardNumber"
              name="number"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              onChange={handleChange}
              onFocus={handleInputFocus}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="cardName"
              name="name"
              label="Name"
              fullWidth
              autoComplete="cc-name"
              onChange={handleChange}
              onFocus={handleInputFocus}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              name="expiry"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              onChange={handleChange}
              onFocus={handleInputFocus}
              inputProps={{ pattern: '\\d\\d/\\d\\d' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvc"
              name="cvc"
              label="cvc"
              fullWidth
              autoComplete="cc-csc"
              onChange={handleChange}
              onFocus={handleInputFocus}
              inputProps={{ maxLength: 3, pattern: '\\d{3,4}' }}
              onBlur={handleCVCBlur}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default PaymentDetails;

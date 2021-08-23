import React, { useCallback, useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import 'react-credit-cards/es/styles-compiled.css';
import Card, { Focused } from 'react-credit-cards';
import { CreditCardType } from '@features/providers/checkout/model';
import useStyles from './styles';

type PaymentDetailsPropsType = {
  creditCard: CreditCardType;
  updateCreditCard: (value: CreditCardType) => void;
};

function PaymentDetails(props: PaymentDetailsPropsType) {
  const { updateCreditCard, creditCard } = props;
  const classes = useStyles();
  const [focused, setFocused] = useState<Focused>();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { name, value },
      } = event;
      updateCreditCard({
        ...creditCard,
        [name]: value,
      });
    },
    [updateCreditCard, creditCard]
  );

  const handleInputFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const { name } = event.target;
      setFocused(name as Focused);
    },
    []
  );

  const handleCVCBlur = useCallback(() => {
    setFocused(undefined);
  }, []);

  const { name, number, expiry, cvc } = creditCard;

  return (
    <>
      <div className={classes.cardContainer}>
        <Card
          name={name}
          number={number}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
        />
      </div>
      <div className={classes.creditCardContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              type="number"
              id="cardNumber"
              name="number"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              onChange={handleChange}
              onFocus={handleInputFocus}
              value={number}
              error={number === ''}
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
              value={name}
              error={name === ''}
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
              value={expiry}
              error={expiry === ''}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              type="number"
              id="cvc"
              name="cvc"
              label="cvc"
              fullWidth
              autoComplete="cc-cvc"
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleCVCBlur}
              value={cvc}
              error={cvc === ''}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default PaymentDetails;

import React, { useCallback, useEffect, useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import 'react-credit-cards/es/styles-compiled.css';
import Card, { Focused } from 'react-credit-cards';
import { CreditCardType } from '@features/providers/checkout/model';
import useStyles from './styles';

type PaymentDetailsPropsType = {
  updateCreditCard: (value: CreditCardType) => void;
};

function PaymentDetails(props: PaymentDetailsPropsType) {
  const { updateCreditCard } = props;
  const classes = useStyles();
  const [focused, setFocused] = useState<Focused>();
  const [creditCard, setCreditCard] = useState<CreditCardType>({
    name: '',
    number: '',
    cvc: '',
    expiry: '',
  });

  useEffect(() => {
    updateCreditCard(creditCard);
  }, [updateCreditCard, creditCard]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { name, value },
      } = event;
      setCreditCard((currentCreditCard) => ({
        ...currentCreditCard,
        [name]: value,
      }));
    },
    []
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

  return (
    <>
      <div className={classes.cardContainer}>
        <Card
          name={creditCard.name}
          number={creditCard.number}
          expiry={creditCard.expiry}
          cvc={creditCard.cvc}
          focused={focused}
        />
      </div>
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

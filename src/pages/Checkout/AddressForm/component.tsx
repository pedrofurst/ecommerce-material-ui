import React, { useCallback, useEffect, useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import useStyles from './styles';
import { ShippingAddressType } from '../../../features/providers/checkout/model';

type AddressFormType = {
  updateShippingAddress: (value: ShippingAddressType) => void;
};

export default function AddressForm(props: AddressFormType) {
  const classes = useStyles();
  const { updateShippingAddress } = props;

  const [address, setAddress] = useState<ShippingAddressType>({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    postcode: '',
    country: '',
    state: '',
  });

  useEffect(() => {
    updateShippingAddress(address);
  }, [address, updateShippingAddress]);

  const handleChange = useCallback((event) => {
    const {
      target: { name, value },
    } = event;
    setAddress((currentAddress) => ({
      ...currentAddress,
      [name]: value,
    }));
  }, []);

  return (
    <div className={classes.shippingAddressContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            required
            id="first-name"
            name="firstName"
            label="First name"
            autoComplete="given-name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            required
            id="last-name"
            name="lastName"
            label="Last name"
            autoComplete="family-name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handleChange}
            required
            id="street-address"
            name="streetAddress"
            label="Street Address"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            required
            id="city"
            name="city"
            label="Town / City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            required
            id="postcode"
            name="postcode"
            label="Postcode"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
}

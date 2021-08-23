import { useCallback } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { ShippingAddressType } from '@features/providers/checkout/model';

type AddressFormType = {
  updateShippingAddress: (value: ShippingAddressType) => void;
  shippingAddress: ShippingAddressType;
};

export default function AddressForm(props: AddressFormType) {
  const { updateShippingAddress, shippingAddress } = props;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      updateShippingAddress({ ...shippingAddress, [name]: value });
    },
    [updateShippingAddress, shippingAddress]
  );

  const {
    firstName,
    lastName,
    streetAddress,
    city,
    postcode,
    country,
    state,
  } = shippingAddress;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          onChange={handleChange}
          required
          id="first-name"
          name="firstName"
          label="First name"
          autoComplete="given-name"
          value={firstName}
          error={firstName === ''}
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
          value={lastName}
          error={lastName === ''}
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
          autoComplete="shipping address-line1"
          value={streetAddress}
          error={streetAddress === ''}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          onChange={handleChange}
          required
          id="city"
          name="city"
          label="Town / City"
          value={city}
          error={city === ''}
          autoComplete="shipping address-level2"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          onChange={handleChange}
          required
          id="postcode"
          name="postcode"
          label="Postcode"
          autoComplete="shipping postal-code"
          value={postcode}
          error={postcode === ''}
          fullWidth
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
          value={country}
          error={country === ''}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          onChange={handleChange}
          id="state"
          name="state"
          label="State/Province/Region"
          value={state}
          error={state === ''}
          fullWidth
        />
      </Grid>
    </Grid>
  );
}

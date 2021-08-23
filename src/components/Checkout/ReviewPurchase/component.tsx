import { useMemo } from 'react';
import { Typography } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import { CartType } from '@features/providers/cart/model';
import {
  CreditCardType,
  ShippingAddressType,
} from '@features/providers/checkout/model';
import { ProductType } from '@features/providers/product/model';
import useStyles from './styles';

type ReviewPurchasePropsType = {
  cart: CartType;
  creditCard: CreditCardType;
  shippingAddress: ShippingAddressType;
};

function ReviewPurchase(props: ReviewPurchasePropsType) {
  const { cart, creditCard, shippingAddress } = props;
  const {
    streetAddress,
    city,
    state,
    country,
    postcode,
    firstName,
    lastName,
  } = shippingAddress;

  const { number } = creditCard;
  const { products } = cart;
  const classes = useStyles();

  const total = useMemo(
    () => products.reduce((acc, product) => acc + product.price, 0),
    [products]
  );

  return (
    <>
      <div className={classes.rowInfo}>
        <Typography>Shipping Detail</Typography>
        <div className={classes.rowContent}>
          <div className={classes.iconContainer}>
            <LocationOnOutlinedIcon fontSize="large" />
          </div>
          <div className={classes.locationInfoContainer}>
            <Typography>{streetAddress}</Typography>
            <Typography>{`${city}, ${state} - ${country} - ${postcode}`}</Typography>
            <Typography>{`${firstName} ${lastName}`}</Typography>
          </div>
        </div>
      </div>
      <div className={classes.productContainer}>
        <Typography align="center">
          {`${products.length} ${products.length > 1 ? 'items' : 'item'}`}
        </Typography>
        {products.map((product: ProductType) => (
          <div key={product.id} className={classes.productRow}>
            <div className={classes.imageContainer}>
              <img
                src={product.image}
                alt="ImageProduct"
                className={classes.image}
              />
            </div>
            <div className={classes.productTitleContainer}>
              <Typography noWrap className={classes.productTitle}>
                {product.title}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.rowInfo}>
        <Typography>Payment Detail</Typography>
        <div className={classes.rowContent}>
          <div className={classes.iconContainer}>
            <CreditCardOutlinedIcon fontSize="large" />
          </div>
          <div className={classes.locationInfoContainer}>
            <Typography>
              {`**** **** **** **${number.substr(
                number.length - 2,
                number.length
              )}`}
            </Typography>
          </div>
        </div>
        <div className={classes.totalContainer}>
          <Typography className={classes.totalPrice}>
            You will pay ${total.toFixed(2)}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default ReviewPurchase;

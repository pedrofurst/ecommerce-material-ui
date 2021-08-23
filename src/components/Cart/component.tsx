/* eslint-disable no-debugger */
import {
  Button,
  Divider,
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { useCallback, useMemo } from 'react';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { CartType } from '@features/providers/cart/model';
import { ProductType } from '@features/providers/product/model';
import clsx from 'clsx';
import useStyles from './styles';
import EmptyCart from './EmptyCart/component';

type CartPropsType = {
  cart: CartType;
  removeFromCart: (product: ProductType) => void;
  onCheckout: () => void;
  onGoBack: () => void;
  onSelectProduct: (product: ProductType) => void;
};

function Cart(props: CartPropsType) {
  const classes = useStyles();
  const { cart, removeFromCart, onCheckout, onGoBack, onSelectProduct } = props;
  const { products } = cart;

  const total = useMemo(
    () => products.reduce((acc, product) => acc + product.price, 0),
    [products]
  );

  const handleRemoveFromCart = useCallback(
    (product: ProductType) => (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      removeFromCart(product);
    },
    [removeFromCart]
  );

  const handleSelectProduct = useCallback(
    (product: ProductType) => () => {
      onSelectProduct(product);
    },
    [onSelectProduct]
  );

  return (
    <Paper className={classes.cartContainer}>
      <IconButton
        role="back-button"
        aria-label="back"
        onClick={onGoBack}
        className={classes.backButton}
      >
        <ArrowBackIcon />
      </IconButton>
      <div className={classes.contentContainer}>
        {products.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {products.map((product: ProductType, i: number) => (
              <div key={product.id}>
                <div
                  role="button"
                  tabIndex={product.id}
                  className={clsx(classes.rowContainer, 'product-item')}
                  onClick={handleSelectProduct(product)}
                  onKeyDown={handleSelectProduct(product)}
                >
                  <div className={classes.imageContainer}>
                    <img
                      src={product.image}
                      alt="ImageRow"
                      className={classes.image}
                    />
                  </div>

                  <div className={classes.titleContainer}>
                    <Typography className={classes.title} noWrap>
                      {product.title}
                    </Typography>
                  </div>
                  <div className={classes.priceContainer}>
                    <Typography className={classes.price}>
                      ${product.price.toFixed(2)}
                    </Typography>
                    <IconButton
                      aria-label="remove from shopping cart"
                      onClick={handleRemoveFromCart(product)}
                      className={classes.removeButton}
                      id="remove-from-cart-button"
                      color="secondary"
                    >
                      <RemoveShoppingCartIcon />
                    </IconButton>
                  </div>
                </div>
                {(i !== products.length - 1 || i === 0) && <Divider />}
              </div>
            ))}
            <div className={classes.bottomContainer}>
              <div className={classes.totalRow}>
                <Typography className={classes.total}>
                  {`Total (${products.length} ${
                    products.length === 1 ? 'Item' : 'Items'
                  }):`}
                </Typography>
                <Typography className={classes.price}>
                  ${total.toFixed(2)}
                </Typography>
              </div>
              <div className={classes.proceedToCheckoutContainer}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={onCheckout}
                  id="procced-to-checkout-button"
                >
                  Proceed to checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </Paper>
  );
}

export default Cart;

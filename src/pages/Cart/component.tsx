import { Button, IconButton, Paper, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useCallback, useMemo } from 'react';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { CartType } from '../../features/providers/cart/model';
import { ProductType } from '../../features/providers/product/model';
import useStyles from './styles';

type CartPropsType = {
  cart: CartType;
  removeFromCart: (product: ProductType) => void;
};

function Cart(props: CartPropsType) {
  const classes = useStyles();
  const { cart, removeFromCart } = props;
  const { products } = cart;

  const total = useMemo(
    () => products.reduce((acc, product) => acc + product.price, 0),
    [products]
  );

  const handleRemoveFromCart = useCallback(
    (product: ProductType) => () => {
      removeFromCart(product);
    },
    [removeFromCart]
  );

  return (
    <Paper className={classes.cartContainer}>
      <IconButton
        aria-label="back"
        onClick={() => {}}
        className={classes.backButton}
      >
        <ArrowBackIcon />
      </IconButton>
      <div className={classes.contentContainer}>
        {products.length === 0 ? (
          <div className={classes.emptyCartContainer}>
            <Typography className={classes.emptyCartText}>
              Your cart is empty.
            </Typography>
          </div>
        ) : (
          <>
            {products.map((product: ProductType) => (
              <div key={product.id} className={classes.rowContainer}>
                <img
                  src={product.image}
                  alt="ImageRow"
                  className={classes.image}
                />
                <div className={classes.productInfo}>
                  <Typography className={classes.title} noWrap>
                    {product.title}
                  </Typography>
                  <div className={classes.priceContainer}>
                    <Typography className={classes.price}>
                      ${product.price.toFixed(2)}
                    </Typography>
                    <IconButton
                      aria-label="remove from shopping cart"
                      onClick={handleRemoveFromCart(product)}
                      className={classes.removeButton}
                      color="secondary"
                    >
                      <RemoveShoppingCartIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            ))}
            <div className={classes.rowContainer}>
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
            </div>
            <div className={classes.proceedToCheckoutContainer}>
              <Button variant="outlined" color="primary">
                Proceed to checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </Paper>
  );
}

export default Cart;

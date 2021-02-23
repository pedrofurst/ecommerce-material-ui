import { Button, IconButton, Paper, Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { useCallback } from 'react';
import { ProductType } from '../../features/providers/product/model';
import useStyles from './styles';

type ProductDetailPropsType = {
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
  product: ProductType;
  isAddedOnCart: boolean;
  onGoBack: () => void;
};

function ProductDetail(props: ProductDetailPropsType) {
  const { addToCart, removeFromCart, product, isAddedOnCart, onGoBack } = props;
  const { title, description, price, image } = product;
  const classes = useStyles();

  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [product, addToCart]);

  const handleRemoveFromCart = useCallback(() => {
    removeFromCart(product);
  }, [product, removeFromCart]);

  return (
    <Paper className={classes.productDetailContainer}>
      <IconButton
        aria-label="back"
        onClick={onGoBack}
        className={classes.backButton}
      >
        <ArrowBackIcon />
      </IconButton>
      <div className={classes.imageContainer}>
        <img src={image} alt="ProductImage" className={classes.productImage} />
      </div>
      <div className={classes.infoContainer}>
        <Typography className={classes.title}>{title}</Typography>
        <div className={classes.descriptionContainer}>
          <Typography>{description}</Typography>
        </div>
        <div>
          <Typography className={classes.inStock}>In Stock</Typography>
          <Typography className={classes.price}>${price.toFixed(2)}</Typography>
        </div>
        {isAddedOnCart ? (
          <Button
            onClick={handleRemoveFromCart}
            variant="outlined"
            color="secondary"
            endIcon={<RemoveShoppingCartIcon />}
          >
            remove from cart
          </Button>
        ) : (
          <Button
            onClick={handleAddToCart}
            variant="outlined"
            color="primary"
            endIcon={<AddShoppingCartIcon />}
          >
            add to cart
          </Button>
        )}
      </div>
    </Paper>
  );
}

export default ProductDetail;

import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Divider,
  Tooltip,
} from '@material-ui/core';
import { useCallback } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { ProductType } from '@features/providers/product/model';
import useStyles from './styles';

type ProductCardPropsType = {
  product: ProductType;
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
  isAddedOnCart: boolean;
  onSelectProduct: (product: ProductType) => void;
};

function ProductCard(props: ProductCardPropsType) {
  const classes = useStyles();
  const {
    product,
    addToCart,
    removeFromCart,
    onSelectProduct,
    isAddedOnCart,
  } = props;
  const { title, price, category, image } = product;

  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [product, addToCart]);

  const handleRemoveFromCart = useCallback(() => {
    removeFromCart(product);
  }, [product, removeFromCart]);

  const handleSelectProduct = useCallback(() => {
    onSelectProduct(product);
  }, [product, onSelectProduct]);

  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.cardActionArea}
        onClick={handleSelectProduct}
      >
        <div className={classes.mediaContainer}>
          <img src={image} alt="Logo" className={classes.media} />
        </div>
        <CardContent className={classes.cardContent}>
          <Tooltip title={title}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              component="p"
              className={classes.productTitle}
              noWrap
            >
              {title}
            </Typography>
          </Tooltip>
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.categoryText}
          >
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions disableSpacing className={classes.cardActionsContainer}>
        <div className={classes.addButtonContainer}>
          <div className={classes.priceContainer}>
            <Typography className={classes.priceText}>
              ${price.toFixed(2)}
            </Typography>
          </div>
          {isAddedOnCart ? (
            <IconButton
              aria-label="remove from shopping cart"
              onClick={handleRemoveFromCart}
              color="secondary"
            >
              <RemoveShoppingCartIcon />
            </IconButton>
          ) : (
            <IconButton
              aria-label="add to shopping cart"
              onClick={handleAddToCart}
              color="primary"
            >
              <AddShoppingCartIcon />
            </IconButton>
          )}
        </div>
      </CardActions>
    </Card>
  );
}

export default ProductCard;

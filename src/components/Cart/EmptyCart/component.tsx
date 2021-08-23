import { Typography } from '@material-ui/core';
import useStyles from './styles';

type EmptyCartPropsType = {};

function EmptyCart(props: EmptyCartPropsType) {
  const classes = useStyles();
  return (
    <div className={classes.emptyCartContainer}>
      <Typography className={classes.emptyCartText}>
        Your cart is empty.
      </Typography>
    </div>
  );
}

export default EmptyCart;

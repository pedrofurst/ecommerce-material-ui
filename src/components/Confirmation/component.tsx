import { Typography } from '@material-ui/core';
import useStyles from './styles';

type ConfirmationPropsType = {};

function Confirmation(props: ConfirmationPropsType) {
  const classes = useStyles();
  return (
    <div className={classes.confirmationContainer}>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is #2001539. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </Typography>
    </div>
  );
}

export default Confirmation;

import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  checkoutContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    padding: theme.spacing(2),
    height: '100%',
    margin: 0,
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
    },
  },
  stepper: {
    padding: theme.spacing(2, 0, 2),
  },
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  actionButtonsContainer: {
    padding: theme.spacing(3, 0, 0, 3),
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    '& button': {
      margin: theme.spacing(),
    },
  },
  paymentForm: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContent: {
    width: '100%',
  },
}));

import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  productContainer: {
    maxHeight: '15vh',
    overflowY: 'auto',
    margin: theme.spacing(2, 0, 2, 0),
  },
  productRow: {
    display: 'flex',
    alignItems: 'center',
  },
  imageContainer: {},
  image: {
    margin: theme.spacing(),
    height: 20,
    width: 20,
    [theme.breakpoints.up('sm')]: {
      height: 30,
      width: 30,
    },
    borderRadius: '50%',
  },
  productTitle: {
    fontSize: '1em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1em',
    },
  },
  rowInfo: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    color: '#666',
  },
  rowContent: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    padding: theme.spacing(),
    margin: theme.spacing(1, 0),
    height: 90,
    backgroundColor: '#f5f5f5',
  },
  iconContainer: {
    padding: theme.spacing(1, 2, 1, 1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 3, 2, 2),
    },
  },
  locationInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    '& > p': {
      fontSize: '1em',
    },
  },
  productTitleContainer: {
    overflow: 'hidden',
  },
  totalContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  totalPrice: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
}));

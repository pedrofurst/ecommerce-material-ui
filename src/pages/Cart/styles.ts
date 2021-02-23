import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  cartContainer: {
    display: 'flex',
    minHeight: '78vh',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80vw',
    position: 'relative',

    margin: 0,
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
    },
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  contentContainer: {
    flex: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(5),
  },

  rowContainer: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #e6e6e6',
    height: 120,
  },
  productInfo: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '1fr 240px',
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: 120,
    objectFit: 'contain',
    padding: theme.spacing(3),
  },
  title: { fontSize: 16, fontWeight: 'bold' },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'end',
  },
  removeButton: {
    marginLeft: theme.spacing(),
  },
  total: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'end',
  },
  emptyCartContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  emptyCartText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  proceedToCheckoutContainer: {
    display: 'flex',
    flex: 1,
    height: '100%',
    padding: theme.spacing(5),
    paddingRight: 0,
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  totalRow: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    '& p': {
      padding: theme.spacing(1),
    },
  },
}));

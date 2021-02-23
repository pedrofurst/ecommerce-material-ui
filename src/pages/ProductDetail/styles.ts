import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  productDetailContainer: {
    display: 'flex',
    height: '78vh',
    overflow: 'hidden',
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
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingBottom: theme.spacing(3),
  },
  price: {
    fontWeight: 'bold',
    fontSize: 36,
    paddingBottom: theme.spacing(3),
  },
  inStock: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'darkgreen',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    padding: theme.spacing(5),
    overflow: 'auto',
  },
  descriptionContainer: {
    height: '25vh',
    overflowY: 'auto',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      flex: 2,
    },
  },
  productImage: {
    width: '25vw',
    objectFit: 'contain',
  },
}));

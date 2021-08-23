import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  productDetailContainer: {
    display: 'grid',
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    height: '100%',
    margin: 0,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
    },
    gridTemplate: `
    "title" 
    "image"
    "description"
    "price"
    "button"
  `,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 0,
      gridTemplate: `
      "image title" 
      "image description"
      "image price"
      "image button"
    `,
    },
  },
  backButton: {
    position: 'absolute',
    top: 8,
    [theme.breakpoints.up('sm')]: {
      top: 16,
      left: 16,
    },
  },
  title: {
    padding: theme.spacing(2),
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'start',
      fontSize: 24,
      padding: 0,
    },
    paddingBottom: theme.spacing(3),
    gridArea: 'title',
  },
  price: {
    fontWeight: 'bold',
    paddingBottom: theme.spacing(3),
    fontSize: 24,
    [theme.breakpoints.up('sm')]: {
      fontSize: 36,
    },
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
    padding: theme.spacing(5),
    overflow: 'auto',
  },
  descriptionContainer: {
    overflowY: 'auto',
    gridArea: 'description',
    maxHeight: '20vh',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: 0,
      maxHeight: '25vh',
    },
  },
  description: {
    fontSize: 12,
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5),
    },
    overflow: 'hidden',
    gridArea: 'image',
  },
  productImage: {
    width: '30vw',
    height: '30vh',
    objectFit: 'contain',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
      width: '20vw',
      height: '50vh',
    },
  },
  actionButtonContainer: {
    gridArea: 'button',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  priceContainer: {
    gridArea: 'price',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start',
    },
  },
}));

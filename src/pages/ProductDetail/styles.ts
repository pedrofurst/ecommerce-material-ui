import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  productDetailContainer: {
    display: 'grid',
    height: '78vh',
    width: '80vw',
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    margin: 0,
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
    },
    gridTemplateRows: '50px 50px 1fr 100px 80px',
    gridTemplate: `
    "."
    "title" 
    "image"
    "price"
    "button"
  `,
    [theme.breakpoints.up('sm')]: {
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
    top: 16,
    left: 16,
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
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      maxHeight: '25vh',
    },
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '90%',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5),
    },
    overflow: 'hidden',
    gridArea: 'image',
  },
  productImage: {
    width: '90%',
    objectFit: 'contain',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
      width: '20vw',
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

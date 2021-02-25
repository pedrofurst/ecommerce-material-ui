import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  cartContainer: {
    display: 'flex',
    minHeight: '78vh',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80vw',
    position: 'relative',
    overflow: 'hidden',

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
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5),
    },
  },

  rowContainer: {
    display: 'grid',
    gridTemplateRows: '50px 128px 1fr',
    gridTemplateAreas: `
    "title"
    "image"
    "price"
  `,
    padding: theme.spacing(4),
    width: '100%',
    alignItems: 'center',
    borderBottom: '1px solid #e6e6e6',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      gridTemplateRows: '1fr',
      gridTemplateColumns: '120px 1fr 240px',
      gridTemplateAreas: `
      "image title price"
    `,
    },
  },
  imageContainer: {
    gridArea: 'image',
    justifyContent: 'center',
    display: 'flex',
  },
  image: {
    width: 120,
    [theme.breakpoints.up('sm')]: {
      height: 120,
      width: 120,
    },
    objectFit: 'contain',
    padding: theme.spacing(3),
  },
  titleContainer: {
    gridArea: 'title',
    width: '100%',
    overflow: 'hidden',
  },
  title: {
    fontSize: '1em',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.2em',
      textAlign: 'start',
    },
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(),
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginTop: 0,
    },
    gridArea: 'price',
  },
  price: {
    fontSize: '1.5em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2em',
    },
    fontWeight: 'bold',
    textAlign: 'end',
  },
  removeButton: {
    marginLeft: theme.spacing(),
  },
  total: {
    fontSize: '1em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2em',
    },
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
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    flexDirection: 'column',
  },
  totalRow: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
    justifyContent: 'center',
    '& p': {
      padding: theme.spacing(1),
    },
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
  },
}));

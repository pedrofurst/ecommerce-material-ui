import { fade, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  toolBar: {
    position: 'relative',
    minHeight: 64,
  },
  toolbarContainer: {
    display: 'grid',
    maxWidth: 1280,
    margin: 'auto',
    width: '100%',
    alignItems: 'center',
    gridTemplate: `
    "logo search cart"
  `,
    [theme.breakpoints.up('md')]: {
      gridTemplateRows: '1fr 1fr',
      gridTemplateColumns: '30% 40% 30%',
      gridTemplate: `
      "logo search cart "
      "menu search cart" 
    `,
    },
  },
  topBarTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: theme.spacing(),
  },
  appBar: {
    background:
      'linear-gradient(90deg, rgba(	2, 98, 157,1) 1%, rgba(24,144,133, 1) 50%, rgba(	2, 98, 157,1) 100%)',
    color: 'white',
    [theme.breakpoints.up('md')]: {
      maxHeight: 100,
    },
    padding: '0 16px',
  },
  searchContainer: {
    gridArea: 'search',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: 0,
    width: '95%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  searchIcon: {
    right: 0,
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 0, 1, 1),
    paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  logoContainer: {
    gridArea: 'logo',
  },
  cartButton: {
    gridArea: 'cart',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuContainer: {
    gridArea: 'menu',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  menuItem: {
    display: 'flex',
    padding: theme.spacing(),
    paddingLeft: 0,
    cursor: 'pointer',
  },
  categoriesMenu: {
    display: 'flex',
  },
}));

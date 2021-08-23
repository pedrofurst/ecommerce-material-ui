import { fade, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  toolBar: {
    position: 'relative',
    minHeight: 64,
  },
  toolbarContainer: {
    display: 'flex',
    maxWidth: 1280,
    margin: 'auto',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBarTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: theme.spacing(),
  },
  appBar: {
    position: 'relative',
    background:
      'linear-gradient(90deg, rgba(	2, 98, 157,1) 1%, rgba(24,144,133, 1) 50%, rgba(	2, 98, 157,1) 100%)',
    color: 'white',
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
  logoContainer: {
    gridArea: 'logo',
  },
  cartButton: {
    gridArea: 'cart',
    display: 'flex',
    justifyContent: 'flex-end',
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

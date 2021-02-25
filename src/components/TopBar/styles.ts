import { fade, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  grow: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  toolBar: {
    position: 'relative',
    height: '100%',
  },
  toolbarContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    maxWidth: 1280,
    margin: 'auto',
    paddingRight: 8,
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
    [theme.breakpoints.up('sm')]: {
      height: 100,
    },
    padding: '0 16px',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: 0,
    marginLeft: theme.spacing(2),
    width: 150,
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(3),
      width: '25%',
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
  row: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomRow: {
    justifyContent: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
    },
  },
  menuContainer: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
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

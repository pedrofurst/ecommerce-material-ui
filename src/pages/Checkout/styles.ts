import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  checkoutContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '78vh',
    alignItems: 'center',
    width: '80vw',
    position: 'relative',
    padding: theme.spacing(2),
    margin: 0,
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      minHeight: '88vh',
    },
  },
  stepper: {
    padding: theme.spacing(2, 0, 2),
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
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
}));

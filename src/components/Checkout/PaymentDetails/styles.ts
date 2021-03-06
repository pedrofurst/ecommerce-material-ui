import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  creditCardContainer: {
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(6),
    },
  },
  cardContainer: {
    [theme.breakpoints.down(480)]: {
      display: 'none',
    },
  },
}));

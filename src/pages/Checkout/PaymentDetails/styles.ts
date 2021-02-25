import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  creditCardContainer: {
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(6),
    },
  },
  cardContainer: {
    '& .rccs__card': {
      width: '90%',
    },
    [theme.breakpoints.up('sm')]: {
      '& .rccs__card': {
        width: '100%',
      },
    },
  },
}));

import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  root: {
    minWidth: 304,
    maxWidth: 304,
    margin: theme.spacing(),
  },
  cardActionArea: {
    height: 350,
  },
  media: {
    height: 280,
    objectFit: 'contain',
    width: '100%',
    padding: theme.spacing(),
  },
  mediaContainer: {
    margin: 'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
  cardActionsContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  cardContent: {
    textAlign: 'center',
  },
  productTitle: {},
  addButtonContainer: {
    display: 'flex',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  priceContainer: {
    paddingTop: theme.spacing(),
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  categoryText: {
    textTransform: 'capitalize',
  },
}));

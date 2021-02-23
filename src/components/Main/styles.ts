import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  mainContainer: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
  },
  content: {
    backgroundColor: '#F0E4E1',
    flexGrow: 1,
    paddingTop: theme.spacing(5),
    height: '100%',
    overflow: 'auto',
  },
  container: {
    paddingTop: 100,
    paddingBottom: theme.spacing(4),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

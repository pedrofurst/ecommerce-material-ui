import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  mainContainer: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    flexDirection: 'column',
    backgroundColor: '#F0E4E1',
  },
  contentContainer: {
    overflow: 'auto',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    padding: 0,
    flex: 1,
  },
}));

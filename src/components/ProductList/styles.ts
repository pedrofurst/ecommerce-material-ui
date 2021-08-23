import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  productListContainer: {
    display: 'grid',
    gridGap: 16,
    gridTemplateColumns: 'repeat(auto-fill, 308px)',
    justifyContent: 'center',
  },
});

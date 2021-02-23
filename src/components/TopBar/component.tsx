import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
  InputBase,
  Link,
  Button,
} from '@material-ui/core';
import { ReactElement } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import { CartType } from '../../features/providers/cart/model';
import useChildren from '../../features/hooks/useChildren';

type TopBarPropsType = {
  cart: CartType;
  children: ReactElement;
  onNavigateToCart: () => void;
};

function TopBar(props: TopBarPropsType) {
  const { cart, children, onNavigateToCart } = props;
  const { getChildrenById } = useChildren(children);

  const categoriesMenu = getChildrenById('categories-menu');

  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar disableGutters className={classes.toolBar}>
        <div className={classes.searchContainer}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </div>
        <div className={classes.toolbarContainer}>
          <div className={classes.row}>
            <Link href="/" onClick={() => {}} color="inherit">
              <Typography variant="h6" noWrap className={classes.topBarTitle}>
                Ecommerce
              </Typography>
            </Link>

            <Button color="inherit" onClick={() => {}}>
              <Typography>Sign Out</Typography>
            </Button>
          </div>
          <div className={clsx(classes.row, classes.bottomRow)}>
            <div className={classes.menuContainer}>
              <div className={classes.menuItem}>{categoriesMenu}</div>
              <div className={classes.menuItem}>
                <Button color="inherit" onClick={() => {}}>
                  <Typography>Favorites</Typography>
                </Button>
              </div>
            </div>
            <IconButton
              aria-label="show cart count"
              color="inherit"
              onClick={onNavigateToCart}
            >
              <Badge badgeContent={cart.products.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
  Link,
} from '@material-ui/core';
import { ReactElement } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartType } from '@features/providers/cart/model';
import useChildren from '@features/hooks/useChildren';
import useStyles from './styles';

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
    <AppBar className={classes.appBar}>
      <Toolbar disableGutters className={classes.toolBar}>
        <div className={classes.toolbarContainer}>
          <div className={classes.logoContainer}>
            <Link href="/" color="inherit">
              <Typography variant="h6" noWrap className={classes.topBarTitle}>
                Shop
              </Typography>
            </Link>
          </div>
          <div className={classes.menuItem}>{categoriesMenu}</div>
          <div className={classes.cartButton}>
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

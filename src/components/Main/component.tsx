import { ReactElement } from 'react';
import { Container } from '@material-ui/core';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CheckoutContainer from '@components/Checkout/container';
import ProductListContainer from '@components/ProductList/container';
import ProductDetailContainer from '@components/ProductDetail/container';
import CartContainer from '@components/Cart/container';
import useChildren from '@features/hooks/useChildren';
import useStyles from './styles';

type MainPropsType = {
  children: ReactElement;
};

function Main(props: MainPropsType) {
  const classes = useStyles();
  const { children } = props;
  const { getChildrenById } = useChildren(children);

  const topBar = getChildrenById('top-bar');

  return (
    <BrowserRouter>
      <div className={classes.mainContainer}>
        {topBar}
        <div className={classes.contentContainer}>
          <Container className={classes.content}>
            <Switch>
              <Route path="/" exact component={ProductListContainer} />
              <Route
                path="/product/:productId"
                component={ProductDetailContainer}
              />
              <Route path="/cart" component={CartContainer} />
              <Route path="/checkout" component={CheckoutContainer} />
            </Switch>
          </Container>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Main;

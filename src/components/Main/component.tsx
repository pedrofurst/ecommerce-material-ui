import { ReactElement } from 'react';
import { Container } from '@material-ui/core';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import useStyles from './styles';
import HomeContainer from '../../pages/Home/container';
import ProductDetailContainer from '../../pages/ProductDetail/container';
import CartContainer from '../../pages/Cart/container';
import useChildren from '../../features/hooks/useChildren';
import CheckoutContainer from '../../pages/Checkout/container';

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
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container} disableGutters>
            <Switch>
              <Route path="/" exact component={HomeContainer} />
              <Route
                path="/product/:productId"
                component={ProductDetailContainer}
              />
              <Route path="/cart" component={CartContainer} />
              <Route path="/checkout" component={CheckoutContainer} />
            </Switch>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default Main;

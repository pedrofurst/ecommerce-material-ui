import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import useCartContext from '../../features/providers/cart/useCartContext';
import { ContainerIdType } from '../../features/types/ContainerIdType';
import TopBar from './component';
import CategoriesMenuContainer from '../CategoriesMenu/container';

function TopBarContainer(props: ContainerIdType) {
  const { cart } = useCartContext();
  const history = useHistory();
  const handleOnNavigateToCart = useCallback(() => history.push('/cart'), [
    history,
  ]);

  return (
    <TopBar cart={cart} onNavigateToCart={handleOnNavigateToCart}>
      <CategoriesMenuContainer id="categories-menu" />
    </TopBar>
  );
}

export default TopBarContainer;

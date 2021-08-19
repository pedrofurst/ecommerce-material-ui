import { ReactElement } from 'react';
import useChildren from '@features/hooks/useChildren';

type HomePropsType = {
  children: ReactElement;
};

function Home(props: HomePropsType) {
  const { children } = props;
  const { getChildrenById } = useChildren(children);
  const productList = getChildrenById('product-list');

  return <>{productList}</>;
}

export default Home;

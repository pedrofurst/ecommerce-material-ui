import { useCallback, useEffect } from 'react';
import TopBarContainer from '@components/TopBar/container';
import useProductContext from '@features/providers/product/useProductContext';
import useCategoryContext from '@features/providers/category/useCategoryContext';
import useApi from '@features/hooks/useApi';
import Main from './component';

function MainContainer() {
  const { updateProducts } = useProductContext();
  const { updateCategories } = useCategoryContext();
  const { loadProducts, loadCategories } = useApi();

  const initializeProducts = useCallback(async () => {
    updateProducts(await loadProducts());
  }, [loadProducts, updateProducts]);

  const initializeCategories = useCallback(async () => {
    updateCategories(await loadCategories());
  }, [loadCategories, updateCategories]);

  useEffect(() => {
    initializeProducts();
  }, [initializeProducts]);

  useEffect(() => {
    initializeCategories();
  }, [initializeCategories]);

  return (
    <Main>
      <TopBarContainer id="top-bar" />
    </Main>
  );
}

export default MainContainer;

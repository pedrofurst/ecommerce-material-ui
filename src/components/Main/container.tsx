import axios from 'axios';
import { useCallback, useEffect } from 'react';
import TopBarContainer from '@components/TopBar/container';
import useProductContext from '@features/providers/product/useProductContext';
import useCategoryContext from '@features/providers/category/useCategoryContext';
import Main from './component';

function MainContainer() {
  const { updateProducts } = useProductContext();
  const { updateCategories } = useCategoryContext();

  const loadProducts = useCallback(async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    updateProducts(response.data);
  }, [updateProducts]);

  const loadCategories = useCallback(async () => {
    const response = await axios.get(
      'https://fakestoreapi.com/products/categories'
    );
    updateCategories(response.data);
  }, [updateCategories]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <Main>
      <TopBarContainer id="top-bar" />
    </Main>
  );
}

export default MainContainer;

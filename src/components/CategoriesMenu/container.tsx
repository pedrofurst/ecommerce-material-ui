import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import useCategoryContext from '../../features/providers/category/useCategoryContext';
import { ContainerIdType } from '../../features/types/ContainerIdType';
import CategoriesMenu from './component';

function CategoriesMenuContainer(props: ContainerIdType) {
  const {
    categories,
    selectedCategory,
    updateSelectedCategory,
  } = useCategoryContext();

  const history = useHistory();

  const handleSelectCategoryFilter = useCallback(
    (category: string) => {
      history.push('/');
      if (selectedCategory === category) {
        updateSelectedCategory('');
      } else {
        updateSelectedCategory(category);
      }
    },
    [updateSelectedCategory, history, selectedCategory]
  );

  return (
    <CategoriesMenu
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={handleSelectCategoryFilter}
    />
  );
}

export default CategoriesMenuContainer;

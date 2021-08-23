import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import useCategoryContext from '@features/providers/category/useCategoryContext';
import { ContainerIdType } from '@features/types/ContainerIdType';
import useProductContext from '@features/providers/product/useProductContext';
import CategoriesMenu from './component';

function CategoriesMenuContainer(props: ContainerIdType) {
  const {
    categories,
    selectedCategory,
    updateSelectedCategory,
  } = useCategoryContext();

  const { filterBy, clearFilter } = useProductContext();

  const history = useHistory();

  const handleSelectCategoryFilter = useCallback(
    (category: string) => {
      history.push('/');
      if (selectedCategory === category) {
        updateSelectedCategory('');
        clearFilter();
      } else {
        updateSelectedCategory(category);
        filterBy(category);
      }
    },
    [history, selectedCategory, updateSelectedCategory, clearFilter, filterBy]
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

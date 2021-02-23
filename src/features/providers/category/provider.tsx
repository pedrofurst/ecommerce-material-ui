import { PropsWithChildren, useCallback, useState } from 'react';

import CategoryContext from './context';

function CategoryProvider(props: PropsWithChildren<{}>) {
  const { children } = props;
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleUpdateCategories = useCallback((value: string[]) => {
    setCategories(value);
  }, []);

  const handleUpdateSelectedCategory = useCallback((value: string) => {
    setSelectedCategory(value);
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        updateCategories: handleUpdateCategories,
        selectedCategory,
        updateSelectedCategory: handleUpdateSelectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;

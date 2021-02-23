import React from 'react';
import { CategoryContextType } from './model';

const CategoryContext = React.createContext<CategoryContextType>({
  categories: [],
  updateCategories: (value: string[]) => {},
  selectedCategory: '',
  updateSelectedCategory: (value: string) => {},
});

export default CategoryContext;

import { useContext } from 'react';
import CategoryContext from './context';

export default function useCategoryContext() {
  return useContext(CategoryContext);
}

export type CategoryContextType = {
  categories: string[];
  updateCategories: (categories: string[]) => void;
  selectedCategory: string;
  updateSelectedCategory: (category: string) => void;
};

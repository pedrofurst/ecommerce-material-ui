import { mount } from 'enzyme';
import CategoryProvider from '../provider';
import useCategoryContext from '../useCategoryContext';

describe('Category context', () => {
  it('Should update categories', () => {
    const TestComponent = () => {
      const { categories, updateCategories } = useCategoryContext();

      const handleUpdateCategories = () => {
        updateCategories(['Category1']);
      };
      return (
        <>
          <div>
            {categories.map((category) => (
              <div className="category-id" key={category}>
                {category}
              </div>
            ))}
          </div>
          <button type="button" onClick={handleUpdateCategories} id="update">
            update
          </button>
        </>
      );
    };
    const wrapper = mount(
      <CategoryProvider>
        <TestComponent />
      </CategoryProvider>
    );
    expect(wrapper.find('.category-id').exists()).toBeFalsy();
    wrapper.find('#update').simulate('click');
    expect(wrapper.find('.category-id').exists()).toBeTruthy();
    expect(wrapper.find('.category-id').length).toBe(1);
  });

  it('Should select a category', () => {
    const TestComponent = () => {
      const { selectedCategory, updateSelectedCategory } = useCategoryContext();

      const handleSelectCategory = () => {
        updateSelectedCategory('Category1');
      };
      return (
        <>
          <div id="selected-category">{selectedCategory}</div>
          <button type="button" onClick={handleSelectCategory} id="select">
            select
          </button>
        </>
      );
    };
    const wrapper = mount(
      <CategoryProvider>
        <TestComponent />
      </CategoryProvider>
    );
    expect(wrapper.find('#selected-category').text()).toEqual('');
    wrapper.find('#select').simulate('click');
    expect(wrapper.find('#selected-category').text()).toEqual('Category1');
  });
});

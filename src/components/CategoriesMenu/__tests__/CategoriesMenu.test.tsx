import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CategoriesMenu from '../component';

describe('<CategoriesMenu />', () => {
  it('Should render categories menu', () => {
    const component = renderer.create(
      <CategoriesMenu
        categories={[]}
        onSelectCategory={jest.fn()}
        selectedCategory=""
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render categories menu with categories', () => {
    const component = renderer.create(
      <CategoriesMenu
        categories={['Category1', 'Category2']}
        onSelectCategory={jest.fn()}
        selectedCategory=""
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render categories menu with selectedCategory', () => {
    const component = renderer.create(
      <CategoriesMenu
        categories={['Category1', 'Category2']}
        onSelectCategory={jest.fn()}
        selectedCategory="Category1"
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should call onSelectCategory when selects a category', () => {
    const onSelectCategory = jest.fn();
    const wrapper = shallow(
      <CategoriesMenu
        categories={['Category1']}
        onSelectCategory={onSelectCategory}
        selectedCategory=""
      />
    );
    wrapper
      .find('#categories-menu-button')
      .simulate('click', { currentTarget: {} });

    wrapper.find('.category-item').simulate('click');
    expect(onSelectCategory).toHaveBeenCalledWith('Category1');
  });
});

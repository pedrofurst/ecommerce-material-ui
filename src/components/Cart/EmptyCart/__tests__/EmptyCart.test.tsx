import renderer from 'react-test-renderer';
import EmptyCart from '../component';

describe('<EmptyCart />', () => {
  it('Should have empty cart message', () => {
    const component = renderer.create(<EmptyCart />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

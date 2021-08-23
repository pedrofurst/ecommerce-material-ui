import renderer from 'react-test-renderer';
import Confirmation from '../component';

describe('<Confirmation />', () => {
  it('Should have confirmation message', () => {
    const component = renderer.create(<Confirmation />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

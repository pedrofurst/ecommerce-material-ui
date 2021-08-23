import renderer from 'react-test-renderer';
import StepIcon from '../component';

describe('<StepIcon />', () => {
  it('Should render active step icon', () => {
    const component = renderer.create(
      <StepIcon active completed icon={<></>} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

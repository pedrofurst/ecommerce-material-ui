import renderer from 'react-test-renderer';
import Main from '../component';

describe('<Main />', () => {
  it('Should renders main component properly', () => {
    const component = renderer.create(
      <Main>
        <div>children</div>
      </Main>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

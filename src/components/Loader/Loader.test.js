import ReactTestRenderer from 'react-test-renderer';
import Loader from  './Loader';

describe('Loader component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <Loader />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

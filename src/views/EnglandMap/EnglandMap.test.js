import ReactTestRenderer from 'react-test-renderer';
import EnglandMap from  './EnglandMap';

describe('EnglandMap component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <EnglandMap />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
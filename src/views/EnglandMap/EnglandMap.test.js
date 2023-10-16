import ReactTestRenderer from 'react-test-renderer';
import EnglandMap from  './EnglandMap';
import locations from '../../locations.json';

const mockFn = jest.fn();

describe('EnglandMap component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <EnglandMap 
        locations={locations}
        favorites={[]}
        setFavorites={mockFn}
        isLoadingLocal={false}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

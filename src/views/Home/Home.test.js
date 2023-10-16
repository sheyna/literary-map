import ReactTestRenderer from 'react-test-renderer';
import Home from  './Home';
import locations from '../../locations.json';

const mockFn = jest.fn();

describe('Home component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <Home 
        setShowDecorativeTitle={mockFn}
        locations={locations}
        favorites={[]}
        setFavorites={mockFn}
        isLoadingLocal={false}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

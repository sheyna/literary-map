import ReactTestRenderer from 'react-test-renderer';
import List from  './List';
import locations from '../../locations.json';

const mockFn = jest.fn();

describe('List component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <List 
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

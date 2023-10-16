import ReactTestRenderer from 'react-test-renderer';
import MapElement from  './MapElement';
import locations from '../../locations.json';

const mockFn = jest.fn();

describe('MapElement component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <MapElement
        locations={locations}
        openInfoBox={mockFn}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

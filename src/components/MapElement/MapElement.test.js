import ReactTestRenderer from 'react-test-renderer';
import MapElement from  './MapElement';
import locations from '../../locations.json';

describe('MapElement component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <MapElement locations={locations}/>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
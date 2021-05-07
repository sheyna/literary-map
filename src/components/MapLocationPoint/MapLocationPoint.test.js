import ReactTestRenderer from 'react-test-renderer';
import MapLocationPoint from  './MapLocationPoint';
import locations from '../../locations.json';

describe('MapElement component', () => {
	const openInfoBox = jest.fn();

  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <MapLocationPoint location={locations[0]} openInfoBox={openInfoBox}/>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
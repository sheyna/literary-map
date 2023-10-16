import ReactTestRenderer from 'react-test-renderer';
import MapLocationPoint from  './MapLocationPoint';

const mockFn = jest.fn();

const testLocation = {
	"locationId": 9,
	"title": "Elizabeth Gaskell's Home",
	"book": "Mary Barton, North and South, Cranford, Wives and Daughters",
	"author": "Elizabeth Gaskell",
	"positionTop": 38,
	"positionLeft": 48,
	"townName":  "Manchester",
	"bodyText": "Gaskell's historic home was restored in 2014. It is now a museum to the author and her times."
};

describe('MapElement component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <MapLocationPoint
        location={testLocation}
        openInfoBox={mockFn}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

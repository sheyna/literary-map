import ReactTestRenderer from 'react-test-renderer';
import FavoriteIcon from  './FavoriteIcon';

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

const testLocationInFavs = [{...testLocation, _id: 5, __v: 0}];
const testLocationNotInFavs = [];

// {locationInfo, favorites, setFavorites}
describe('FavoriteIcon component', () => {
  it('should match snapshot of favs', () => {
    const component = ReactTestRenderer.create(
      <FavoriteIcon
        locationInfo={testLocation}
        favorites={testLocationInFavs}
        setFavorites={mockFn}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should match snapshot of NOT favs', () => {
    const component = ReactTestRenderer.create(
      <FavoriteIcon
        locationInfo={testLocation}
        favorites={testLocationNotInFavs}
        setFavorites={mockFn}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

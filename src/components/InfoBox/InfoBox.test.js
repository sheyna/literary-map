import ReactTestRenderer from 'react-test-renderer';
import InfoBox from  './InfoBox';

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

const testLocationWithPhoto = {
	"locationId": 1,
	"title": "Brontë Country",
	"book": "Jane Eyre, Wuthering Heights ...",
	"author": "Emily, Charlotte and Anne Brontë",
	"thumb": "brontes-thumb.png",
	"image": "brontes.png",
	"positionTop": 30,
	"positionLeft": 49,
	"townName": "Haworth, West Yorkshire",
	"bodyText": "Among the most famous literary families the Brontë sisters wrote some of the most beloved works in literature. The parsonage where they lived with their father and brother is now a museum. The family, with the exception of Anne is buried in the church's vault. The Brontë Waterfall nearby was a favorite site of the sisters."
}

describe('InfoBox component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <InfoBox
				infoBoxLocation={testLocation}
				openInfoBox={mockFn}
				favorites={[]}
				setFavorites={mockFn}
			/>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

	it('should match snapshot WITH Photo', () => {
    const component = ReactTestRenderer.create(
      <InfoBox
				infoBoxLocation={testLocationWithPhoto}
				openInfoBox={mockFn}
				favorites={[]}
				setFavorites={mockFn}
			/>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

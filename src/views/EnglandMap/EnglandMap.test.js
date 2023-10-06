import ReactTestRenderer from 'react-test-renderer';
import EnglandMap from  './EnglandMap';

import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

const testLocation = {
	"title": "Elizabeth Gaskell's Home",
	"book": "Mary Barton, North and South, Cranford, Wives and Daughters",
	"author": "Elizabeth Gaskell",
	"positionTop": 38,
	"positionLeft": 48,
	"townName":  "Manchester",
	"bodyText": "Gaskell's historic home was restored in 2014. It is now a museum to the author and her times."
};

describe('EnglandMap component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <EnglandMap />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

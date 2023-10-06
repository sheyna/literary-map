import ReactTestRenderer from 'react-test-renderer';
import InfoBox from  './InfoBox';
import locations from '../../locations.json';

const mockFn = jest.fn()

describe('InfoBox component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <InfoBox infoBoxLocation={locations[0]} openInfoBox={mockFn}/>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

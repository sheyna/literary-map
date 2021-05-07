import ReactTestRenderer from 'react-test-renderer';
import InfoBox from  './InfoBox';
import locations from '../../locations.json';

describe('InfoBox component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <InfoBox infoBoxLocation={locations[0]} openInfoBox={true}/>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
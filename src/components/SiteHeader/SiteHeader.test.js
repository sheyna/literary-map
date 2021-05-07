import ReactTestRenderer from 'react-test-renderer';
import SiteHeader from  './SiteHeader';

describe('SiteHeader component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <SiteHeader />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
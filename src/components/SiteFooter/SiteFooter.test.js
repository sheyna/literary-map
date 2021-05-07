import ReactTestRenderer from 'react-test-renderer';
import SiteFooter from  './SiteFooter';

describe('SiteFooter component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <SiteFooter />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
import ReactTestRenderer from 'react-test-renderer';
import About from  './About';

describe('SiteFooter component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <About />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

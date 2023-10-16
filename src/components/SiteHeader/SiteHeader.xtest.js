import ReactTestRenderer from 'react-test-renderer';
import SiteHeader from  './SiteHeader';

// TODO, update this test
describe('SiteHeader component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <SiteHeader 
        showDecorativeTitle={true}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

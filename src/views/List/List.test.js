import ReactTestRenderer from 'react-test-renderer';
import List from  './List';

describe('SiteFooter component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <List />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

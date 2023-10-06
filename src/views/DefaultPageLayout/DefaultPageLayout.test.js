import ReactTestRenderer from 'react-test-renderer';
import DefaultPageLayout from  './DefaultPageLayout';

describe('DefaultPageLayout component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <DefaultPageLayout>
        <p>child</p>
      </DefaultPageLayout>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

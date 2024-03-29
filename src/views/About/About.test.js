import ReactTestRenderer from 'react-test-renderer';
import About from  './About';

const mockFn = jest.fn();

describe('About component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <About
        setShowDecorativeTitle={mockFn}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

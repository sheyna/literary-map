import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import ReactTestRenderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <App />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

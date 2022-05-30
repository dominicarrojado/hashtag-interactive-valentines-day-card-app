import { render } from '@testing-library/react';
import TagManager from '../tagManager';

describe('<TagManager />', () => {
  const renderComponent = () => render(<TagManager />);

  it('should render without errors', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });
});

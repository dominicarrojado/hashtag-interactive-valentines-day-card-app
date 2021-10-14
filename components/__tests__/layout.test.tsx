import { render, screen } from '@testing-library/react';
import { getFakeSentences } from '../../lib/test-helpers';
import Layout from '../layout';

describe('<Layout />', () => {
  it('should render children', () => {
    const text = getFakeSentences();

    render(<Layout>{text}</Layout>);

    const layoutEl = screen.queryByText(text);

    expect(layoutEl).toBeInTheDocument();
  });
});

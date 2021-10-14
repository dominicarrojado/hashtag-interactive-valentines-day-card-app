import { render, screen } from '@testing-library/react';
import { getFakeSentences } from '../../lib/test-helpers';
import Tooltip from '../tooltip';

describe('<Tooltip />', () => {
  it('should render children', () => {
    const text = getFakeSentences();

    render(<Tooltip>{text}</Tooltip>);

    const tooltipEl = screen.queryByText(text);

    expect(tooltipEl).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { getFakeSentences } from '../../lib/test-helpers';
import Portal from '../portal';

describe('<Portal />', () => {
  it('should append children on body', () => {
    const text = getFakeSentences();

    render(<Portal>{text}</Portal>);

    const containerEl = screen.queryByText(text);
    const parentEl = containerEl?.parentElement;

    expect(parentEl).toBe(document.body);
  });
});

import { render, screen } from '@testing-library/react';
import { getFakeImageUrl, getFakeWord } from '../../lib/test-helpers';
import CoverRadio from '../coverRadio';

describe('<CoverRadio />', () => {
  it('should have expected tag', () => {
    const role = getFakeWord();

    render(<CoverRadio role={role} image={getFakeImageUrl()} />);

    const inputEl = screen.queryByRole(role);

    expect(inputEl?.tagName).toBe('INPUT');
    expect(inputEl).toHaveAttribute('type', 'radio');
  });

  it('should accept image prop', () => {
    const role = getFakeWord();
    const imageUrl = getFakeImageUrl();

    render(<CoverRadio role={role} image={imageUrl} />);

    const inputEl = screen.queryByRole(role);
    const coverEl = inputEl?.nextElementSibling;

    expect(coverEl).toHaveStyle({ backgroundImage: `url(${imageUrl})` });
  });
});

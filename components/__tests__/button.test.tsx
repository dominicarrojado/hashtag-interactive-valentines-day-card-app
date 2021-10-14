import { render, screen } from '@testing-library/react';
import { getFakeSentences } from '../../lib/test-helpers';
import { CoverName } from '../../lib/types';
import { COVER_NAMES } from '../../lib/constants';
import Button from '../button';

describe('<Button />', () => {
  it('should accept type prop', () => {
    const btnTypes = ['button', 'submit'] as const;

    btnTypes.forEach((type) => {
      const text = getFakeSentences();

      const { unmount } = render(
        <Button type={type} theme={CoverName.TEAL}>
          {text}
        </Button>
      );

      const btnEl = screen.queryByText(text);

      expect(btnEl).toHaveAttribute('type', type);

      unmount();
    });
  });

  it('should accept theme prop', () => {
    COVER_NAMES.forEach((theme) => {
      const text = getFakeSentences();

      const { unmount } = render(
        <Button type="button" theme={theme}>
          {text}
        </Button>
      );

      const btnEl = screen.queryByText(text);

      expect(btnEl).toHaveAttribute('data-theme', theme);

      unmount();
    });
  });
});

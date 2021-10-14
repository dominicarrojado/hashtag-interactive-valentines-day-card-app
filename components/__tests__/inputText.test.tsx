import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { getFakeSentence } from '../../lib/test-helpers';
import InputText from '../inputText';

describe('<InputText />', () => {
  it('should have expected tag', () => {
    const placeholder = getFakeSentence();

    render(<InputText placeholder={placeholder} />);

    const inputEl = screen.queryByPlaceholderText(placeholder);

    expect(inputEl?.tagName).toBe('INPUT');
    expect(inputEl).toHaveAttribute('type', 'text');
  });

  describe('label prop', () => {
    it('should NOT render label if undefined', () => {
      const placeholder = getFakeSentence();

      render(<InputText placeholder={placeholder} />);

      const inputEl = screen.queryByPlaceholderText(placeholder);

      expect(inputEl?.previousElementSibling).toBeNull();
    });

    it('should render if label if defined', () => {
      const placeholder = getFakeSentence();
      const label = getFakeSentence();

      render(<InputText placeholder={placeholder} label={label} />);

      const inputEl = screen.queryByPlaceholderText(placeholder);
      const labelEl = inputEl?.previousElementSibling;

      expect(labelEl).toHaveTextContent(label);
    });
  });

  it('should accept ref prop', () => {
    const inputRef = createRef<HTMLInputElement>();
    const placeholder = getFakeSentence();

    render(<InputText ref={inputRef} placeholder={placeholder} />);

    const inputEl = screen.queryByPlaceholderText(placeholder);

    expect(inputRef.current).toEqual(inputEl);
  });
});

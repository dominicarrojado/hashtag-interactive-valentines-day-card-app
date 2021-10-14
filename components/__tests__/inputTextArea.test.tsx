import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { getFakeSentence } from '../../lib/test-helpers';
import InputTextArea from '../inputTextArea';

describe('<InputTextArea />', () => {
  it('should have expected tag', () => {
    const placeholder = getFakeSentence();

    render(<InputTextArea placeholder={placeholder} />);

    const inputEl = screen.queryByPlaceholderText(placeholder);

    expect(inputEl?.tagName).toBe('TEXTAREA');
  });

  it('should accept ref prop', () => {
    const inputRef = createRef<HTMLTextAreaElement>();
    const placeholder = getFakeSentence();

    render(<InputTextArea ref={inputRef} placeholder={placeholder} />);

    const inputEl = screen.queryByPlaceholderText(placeholder);

    expect(inputRef.current).toEqual(inputEl);
  });
});

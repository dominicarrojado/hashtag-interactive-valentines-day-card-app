import { render, screen } from '@testing-library/react';
import { getFormattedDate, getInputDate } from '../../lib/date';
import { getFakeDate, getFakeWord } from '../../lib/test-helpers';
import DateText from '../dateText';

describe('<DateText />', () => {
  const renderComponent = (props: { date: Date; className?: string }) =>
    render(<DateText {...props} />);

  it('should render formatted date', () => {
    const dateObj = new Date(getFakeDate());
    const formattedDate = getFormattedDate(dateObj);

    const { container } = renderComponent({ date: dateObj });

    const dateEl = screen.queryByText(formattedDate);

    expect(container.firstChild).toEqual(dateEl);
    expect(dateEl?.tagName).toBe('TIME');
    expect(dateEl).toHaveAttribute('datetime', getInputDate(dateObj));
  });

  it('should accept className prop', () => {
    const className = getFakeWord();

    const { container } = renderComponent({
      className,
      date: new Date(getFakeDate()),
    });

    expect(container.firstChild).toHaveClass(className);
  });
});

import { getFormattedDate, getInputDate } from '../lib/date';

function DateText({ date, className }: { date: Date; className?: string }) {
  return (
    <time dateTime={getInputDate(date)} className={className}>
      {getFormattedDate(date)}
    </time>
  );
}

export default DateText;

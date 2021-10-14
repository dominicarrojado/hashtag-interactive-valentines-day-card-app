export function checkDateValid(date: any) {
  return (
    (typeof date === 'string' || typeof date === 'number') &&
    !isNaN(new Date(date).getTime())
  );
}

export function getMonthName(monthIdx: number) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[monthIdx];
}

export function getFormattedDate(date: string | Date) {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const monthIdx = dateObj.getMonth();

  return `${getMonthName(
    monthIdx
  )} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
}

export function getInputDate(date: string | Date) {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const year = dateObj.getFullYear();
  const monthNum = dateObj.getMonth() + 1;
  const month = monthNum > 9 ? monthNum.toString() : `0${monthNum}`;
  const dayNum = dateObj.getDate();
  const day = dayNum > 9 ? dayNum.toString() : `0${dayNum}`;

  return `${year}-${month}-${day}`;
}

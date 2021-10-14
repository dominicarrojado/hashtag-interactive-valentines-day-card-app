import { getFakeDate, getNonDateValues } from '../test-helpers';
import {
  checkDateValid,
  getFormattedDate,
  getInputDate,
  getMonthName,
} from '../date';

describe('date utilities', () => {
  describe('checkDateValid()', () => {
    it('should return true if valid', () => {
      const dateStrings = [getFakeDate(), new Date().toDateString()];

      dateStrings.forEach((value) => {
        const res = checkDateValid(value);

        expect(res).toBe(true);
      });
    });

    it('should return false if NOT valid', () => {
      const invalidDates = getNonDateValues();

      invalidDates.forEach((date) => {
        const res = checkDateValid(date);

        expect(res).toBe(false);
      });
    });
  });

  describe('getMonthName()', () => {
    it('should return expected month name', () => {
      const map = {
        '0': 'January',
        '1': 'February',
        '2': 'March',
        '3': 'April',
        '4': 'May',
        '5': 'June',
        '6': 'July',
        '7': 'August',
        '8': 'September',
        '9': 'October',
        '10': 'November',
        '11': 'December',
      };

      Object.entries(map).forEach(([monthIdx, monthName]) => {
        const res = getMonthName(Number(monthIdx));

        expect(res).toBe(monthName);
      });
    });
  });

  describe('getFormattedDate()', () => {
    it('should return formatted date', () => {
      const dateMap = {
        '2021-01-13': 'January 13, 2021',
        '2020-10-02': 'October 2, 2020',
        '2022-12-25': 'December 25, 2022',
      };

      Object.entries(dateMap).forEach(([dateString, formattedDate]) => {
        const res = getFormattedDate(dateString);

        expect(res).toBe(formattedDate);
      });
    });

    it('should accept date object', () => {
      const dateString = 'February 5, 2018';
      const dateObj = new Date(dateString);
      const res = getFormattedDate(dateObj);

      expect(res).toBe(dateString);
    });
  });

  describe('getInputDate()', () => {
    it('should return formatted date', () => {
      const dateMap = {
        '2021-04-07': 'April 7, 2021',
        '2020-07-23': 'July 23, 2020',
        '2022-09-01': 'September 1, 2022',
      };

      Object.entries(dateMap).forEach(([dateString, formattedDate]) => {
        const res = getInputDate(formattedDate);

        expect(res).toBe(dateString);
      });
    });

    it('should accept date object', () => {
      const dateString = 'May 25, 2016';
      const dateObj = new Date(dateString);
      const res = getInputDate(dateObj);

      expect(res).toBe('2016-05-25');
    });
  });
});

import {
  getFakeDate,
  getFakeFirstName,
  getFakeSentences,
  getNonDateValues,
  getNonObjectValues,
  getNonStringValues,
} from '../test-helpers';
import { serializeObject } from '../crypto';
import { CoverName } from '../types';
import { getCardInfo } from '../card';

describe('card utilities', () => {
  describe('getCardInfo()', () => {
    it('should return null if data is NOT valid', () => {
      const invalidData = getNonObjectValues();

      invalidData.forEach((data) => {
        const key = serializeObject(data as any);
        const res = getCardInfo(key);

        expect(res).toBeNull();
      });
    });

    it('should return null if cover is NOT valid', () => {
      const invalidCovers = [
        ...getNonStringValues(),
        '',

        // unsupported covers
        'violet',
        'white',
      ];

      invalidCovers.forEach((cover) => {
        const key = serializeObject({ c: cover });
        const res = getCardInfo(key);

        expect(res).toBeNull();
      });
    });

    it('should return null if "date" is NOT valid', () => {
      const invalidDates = getNonDateValues();

      invalidDates.forEach((date) => {
        const key = serializeObject({
          cover: CoverName.TEAL,
          d: date,
        });
        const res = getCardInfo(key);

        expect(res).toBeNull();
      });
    });

    it('should return null if "to" is NOT valid', () => {
      const invalidTos = [...getNonStringValues(), ''];

      invalidTos.forEach((to) => {
        const key = serializeObject({
          c: CoverName.TEAL,
          d: new Date(getFakeDate()).getTime(),
          t: to,
        });
        const res = getCardInfo(key);

        expect(res).toBeNull();
      });
    });

    it('should return null if "from" is NOT valid', () => {
      const invalidFroms = [...getNonStringValues(), ''];

      invalidFroms.forEach((from) => {
        const key = serializeObject({
          c: CoverName.TEAL,
          d: new Date(getFakeDate()).getTime(),
          t: getFakeFirstName(),
          f: from,
        });
        const res = getCardInfo(key);

        expect(res).toBeNull();
      });
    });

    it('should return null if "message" is NOT valid', () => {
      const invalidMessages = [...getNonStringValues(), ''];

      invalidMessages.forEach((message) => {
        const key = serializeObject({
          c: CoverName.TEAL,
          d: new Date(getFakeDate()).getTime(),
          t: getFakeFirstName(),
          f: getFakeFirstName(),
          m: message,
        });
        const res = getCardInfo(key);

        expect(res).toBeNull();
      });
    });

    it('should return card info if data is valid', () => {
      const cardInfo = {
        c: CoverName.TEAL,
        d: new Date(getFakeDate()).getTime(),
        t: getFakeFirstName(),
        f: getFakeFirstName(),
        m: getFakeSentences(),
      };
      const key = serializeObject(cardInfo);
      const res = getCardInfo(key);

      expect(res).toEqual(cardInfo);
    });
  });
});

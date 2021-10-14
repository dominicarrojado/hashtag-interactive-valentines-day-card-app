import { getFakeString } from '../test-helpers';
import { getRefValue } from '../hooks';

describe('hooks utilities', () => {
  describe('getRefValue()', () => {
    it('should return expected value', () => {
      const refValue = getFakeString();
      const refObject = { current: refValue };

      expect(getRefValue(refObject)).toBe(refValue);
    });
  });
});

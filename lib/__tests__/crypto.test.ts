import { getFakeFirstName, getFakeSentences } from '../test-helpers';
import { CoverName } from '../types';
import { deserializeObject, serializeObject } from '../crypto';

describe('crypto utilities', () => {
  describe('serializeObject() & deserializeObject()', () => {
    it('should serialize and deserialize', () => {
      const cardInfo = {
        cover: CoverName.TEAL,
        to: getFakeFirstName(),
        from: getFakeFirstName(),
        message: getFakeSentences(),
      };
      const serialized = serializeObject(cardInfo);

      expect(typeof serialized).toBe('string');
      expect(serialized).not.toContain(cardInfo.cover);
      expect(serialized).not.toContain(cardInfo.to);
      expect(serialized).not.toContain(cardInfo.from);
      expect(serialized).not.toContain(cardInfo.message);

      const deserialized = deserializeObject(serialized);

      expect(deserialized).toEqual(cardInfo);
    });
  });
});

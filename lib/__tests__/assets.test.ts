import { getFakeDirectoryPath, setReadOnlyProperty } from '../test-helpers';
import { MAIN_URL } from '../constants';
import { getAssetUrl } from '../assets';

describe('assets utilities', () => {
  describe('getAssetUrl()', () => {
    const origEnv = process.env;

    beforeEach(() => {
      // it clears the cache, needed to be able to set the values of process.env
      jest.resetModules();

      process.env = { ...origEnv };
    });

    afterAll(() => {
      process.env = origEnv;
    });

    it('should NOT return full url on development env', () => {
      setReadOnlyProperty(process.env, 'NODE_ENV', 'development');

      const path = getFakeDirectoryPath();
      const url = getAssetUrl(path);

      expect(url).toBe(`/${path}`);
    });

    it('should return full url on production env', () => {
      setReadOnlyProperty(process.env, 'NODE_ENV', 'production');

      const path = getFakeDirectoryPath();
      const url = getAssetUrl(path);

      expect(url).toBe(`${MAIN_URL}${path}`);
    });
  });
});

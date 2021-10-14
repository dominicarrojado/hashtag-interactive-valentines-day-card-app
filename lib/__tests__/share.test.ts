import {
  getFakeDomainWord,
  getFakeUrl,
  setReadOnlyProperty,
} from '../test-helpers';
import { CARD_INFO_PRE_MESSAGE, CARD_INFO_QUERY_KEY } from '../constants';
import {
  getFacebookShareUrl,
  getMainShareUrl,
  getTwitterShareUrl,
} from '../share';

describe('share utilities', () => {
  describe('getMainShareUrl()', () => {
    const locationOrig = window.location;

    beforeEach(() => {
      delete (window as any).location;
    });

    afterEach(() => {
      setReadOnlyProperty(window, 'location', locationOrig);
    });

    it('should return url with only card info query', () => {
      const origin = `${getFakeUrl()}/`;
      const queryId = getFakeDomainWord();
      const queryRandom = getFakeDomainWord();
      const mainShareUrl = `${origin}?${CARD_INFO_QUERY_KEY}=${queryId}`;
      const locationHref = `${mainShareUrl}&${queryRandom}=${queryRandom}`;

      setReadOnlyProperty(window, 'location', {
        href: locationHref,
      });

      const res = getMainShareUrl();

      expect(res).toBe(mainShareUrl);
    });
  });

  describe('getFacebookShareUrl()', () => {
    it('should return url for facebook', () => {
      const url = getFakeUrl();
      const res = getFacebookShareUrl(url);

      expect(res).toBe(
        `https://www.facebook.com/sharer?u=${encodeURIComponent(url)}`
      );
    });
  });

  describe('getTwitterShareUrl()', () => {
    it('should return url for twitter', () => {
      const url = getFakeUrl();
      const res = getTwitterShareUrl(url);

      expect(res).toBe(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          CARD_INFO_PRE_MESSAGE
        )}&url=${encodeURIComponent(url)}`
      );
    });
  });
});

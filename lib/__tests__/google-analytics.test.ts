import {
  getFakeDomainWord,
  getFakeSentence,
  getRandomCover,
  setReadOnlyProperty,
} from '../test-helpers';
import { GoogleAnalyticsEvent, SocialName } from '../types';
import { trackEvent } from '../google-analytics';

describe('google-analytics utilities', () => {
  describe('trackEvent()', () => {
    const dataLayerOrig = window.dataLayer;
    const locationOrig = window.location;

    beforeEach(() => {
      delete (window as any).dataLayer;
      delete (window as any).location;
    });

    afterEach(() => {
      window.dataLayer = dataLayerOrig;
      setReadOnlyProperty(window, 'location', locationOrig);
    });

    it('should NOT track event on local development', () => {
      setReadOnlyProperty(window, 'location', {
        hostname: 'localhost',
      });

      const event = {
        event: GoogleAnalyticsEvent.CARD_CREATE,
        projectTitle: getFakeSentence(),
        cardCover: getRandomCover().name,
      } as const;

      trackEvent(event);

      expect(window.dataLayer).toBeUndefined();
    });

    it('should track event if dataLayer is NOT defined yet', () => {
      setReadOnlyProperty(window, 'location', {
        hostname: getFakeDomainWord(),
      });

      const event = {
        event: GoogleAnalyticsEvent.CARD_RECREATE,
        projectTitle: getFakeSentence(),
        cardCover: getRandomCover().name,
      } as const;

      trackEvent(event);

      expect(window.dataLayer).toEqual([event]);
    });

    it('should track event if dataLayer is defined', () => {
      setReadOnlyProperty(window, 'location', {
        hostname: getFakeDomainWord(),
      });

      const currentDataLayer = [
        {
          event: GoogleAnalyticsEvent.CARD_LINK_COPY,
          projectTitle: getFakeSentence(),
          buttonText: getFakeSentence(),
          cardCover: getRandomCover().name,
        },
      ];

      window.dataLayer = [...currentDataLayer];

      const event = {
        event: GoogleAnalyticsEvent.CARD_SHARE,
        projectTitle: getFakeSentence(),
        socialName: SocialName.FACEBOOK,
        linkText: getFakeSentence(),
        cardCover: getRandomCover().name,
      } as const;

      trackEvent(event);

      expect(window.dataLayer).toEqual([...currentDataLayer, event]);
    });
  });
});

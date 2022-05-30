import { checkIsLocalhost } from './location';
import { CoverName, GoogleAnalyticsEvent, SocialName } from './types';

declare global {
  interface Window {
    dataLayer: Array<Record<string, any>>;
  }
}

type EventCardCreate = {
  event: GoogleAnalyticsEvent.CARD_CREATE;
  projectTitle: string;
  cardCover: CoverName;
};

type EventCardRereate = {
  event: GoogleAnalyticsEvent.CARD_RECREATE;
  projectTitle: string;
  cardCover: CoverName;
};

type EventCardShare = {
  event: GoogleAnalyticsEvent.CARD_SHARE;
  projectTitle: string;
  socialName: SocialName;
  linkText: string;
  cardCover: CoverName;
};

type EventCardLinkCopy = {
  event: GoogleAnalyticsEvent.CARD_LINK_COPY;
  projectTitle: string;
  buttonText: string;
  cardCover: CoverName;
};

type EventCardTemplateMessageClick = {
  event: GoogleAnalyticsEvent.CARD_TEMPLATE_MESSAGE_CLICK;
  projectTitle: string;
  buttonText: string;
};

type EventModalOpen = {
  event: GoogleAnalyticsEvent.MODAL_OPEN;
  projectTitle: string;
  buttonText: string;
};

export function trackEvent(
  data:
    | EventCardCreate
    | EventCardRereate
    | EventCardShare
    | EventCardLinkCopy
    | EventCardTemplateMessageClick
    | EventModalOpen
) {
  if (checkIsLocalhost()) {
    return;
  }

  window.dataLayer = Array.isArray(window.dataLayer) ? window.dataLayer : [];
  window.dataLayer.push(data);
}

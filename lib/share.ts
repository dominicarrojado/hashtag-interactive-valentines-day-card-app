import { CARD_INFO_PRE_MESSAGE, CARD_INFO_QUERY_KEY } from './constants';

export function getMainShareUrl() {
  const urlObj = new URL(window.location.href);
  const queryValue = urlObj.searchParams.get(CARD_INFO_QUERY_KEY) as string;

  return `${urlObj.origin}${
    urlObj.pathname
  }?${CARD_INFO_QUERY_KEY}=${encodeURIComponent(queryValue)}`;
}

export function getFacebookShareUrl(url: string) {
  return `https://www.facebook.com/sharer?u=${encodeURIComponent(url)}`;
}

export function getTwitterShareUrl(url: string) {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    CARD_INFO_PRE_MESSAGE
  )}&url=${encodeURIComponent(url)}`;
}

export enum CoverName {
  TEAL = 'teal',
  RED = 'red',
  PINK = 'pink',
  BLACK = 'black',
  PURPLE = 'purple',
}

export enum FormName {
  COVER = 'cover',
  TO = 'to',
  FROM = 'from',
  MESSAGE = 'message',
}

export enum SocialName {
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
}

export enum GoogleAnalyticsEvent {
  CARD_CREATE = 'card_create',
  CARD_RECREATE = 'card_recreate',
  CARD_SHARE = 'card_share',
  CARD_LINK_COPY = 'card_link_copy',
  CARD_TEMPLATE_MESSAGE_CLICK = 'card_template_msg_click',
  MODAL_OPEN = 'modal_open',
}

export type Nullish<T> = T | null | undefined;

export type Cover = {
  name: CoverName;
  gif: string;
  image: string;
  imageAlt: string;
};

export type CardInfo = {
  c: CoverName;
  d: Date;
  t: string;
  f: string;
  m: string;
};

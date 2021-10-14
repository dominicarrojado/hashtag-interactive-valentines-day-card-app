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

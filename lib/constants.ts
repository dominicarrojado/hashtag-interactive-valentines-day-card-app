import { getAssetUrl } from './assets';
import { CoverName } from './types';

export const SITE_NAME = 'Dominic Arrojado';
export const PROJECT_TITLE = 'To My Valentine';
export const MAIN_AUTHOR = 'Dominic Arrojado';
export const MAIN_TITLE = `${PROJECT_TITLE} | ${SITE_NAME}`;
export const MAIN_DESC =
  "Tug at your special someone's heartstrings by making a cute e-card just for them.";
export const MAIN_ORIGIN = 'https://dominicarrojado.com';
export const MAIN_PATH = '/hashtag-interactive-valentines-day-card-app/';
export const MAIN_URL = `${MAIN_ORIGIN}${MAIN_PATH}`;
export const META_IMAGE = `${MAIN_URL}images/screenshot.png`;
export const META_IMAGE_WIDTH = 1052;
export const META_IMAGE_HEIGHT = 550;
export const META_IMAGE_ALT = 'To My Valentine';
export const META_IMAGE_TYPE = 'image/png';

export const COVER_NAMES = Object.values(CoverName);
export const COVERS = [
  {
    name: CoverName.TEAL,
    gif: getAssetUrl('images/cover-teal-cat.gif'),
    image: getAssetUrl('images/cover-teal-cat-mini.png'),
    imageAlt: 'card cover with a cat and teal background',
  },
  {
    name: CoverName.RED,
    gif: getAssetUrl('images/cover-red-cupcake.gif'),
    image: getAssetUrl('images/cover-red-cupcake-mini.png'),
    imageAlt: 'card cover with a cupecake and red background',
  },
  {
    name: CoverName.PINK,
    gif: getAssetUrl('images/cover-pink-rose.gif'),
    image: getAssetUrl('images/cover-pink-rose-mini.png'),
    imageAlt: 'card cover with a rose and pink background',
  },
  {
    name: CoverName.BLACK,
    gif: getAssetUrl('images/cover-black-gift.gif'),
    image: getAssetUrl('images/cover-black-gift-mini.png'),
    imageAlt: 'card cover with a giftbox and black background',
  },
  {
    name: CoverName.PURPLE,
    gif: getAssetUrl('images/cover-purple-pineapple.gif'),
    image: getAssetUrl('images/cover-purple-pineapple-mini.png'),
    imageAlt: 'card cover with a pineapple and purple background',
  },
];
export const COVER_DEFAULT = COVERS[0];

export const TEMPLATE_MESSAGES = [
  'Loved you then,\nLove you still,\nAlways have,\nAlways will.',
  "When I say I love you\nIt's because it's true\nAnd because no one on earth\nIs as wonderful as you!",
  "Don't take this the wrong way,\nI think that you're hot.\nYou're also very lovely,\nAnd I fancy you a lot.",
  "A dream is a dream\nUntil it comes true.\nLove was just a word\n'Til the day I met you.",
  'You are\nThe peanut to my butter,\nThe Twinkle in my eye,\nThe Milk to My Shake,\nThe Love of My Life.',
];

export const CARD_INFO_QUERY_KEY = 'id';
export const CARD_INFO_PRE_MESSAGE = 'I have a message for you, check it here:';

export const TEXT_COPIED_TIMEOUT = 1500;

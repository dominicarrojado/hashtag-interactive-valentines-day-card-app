import { MAIN_URL } from './constants';

export function getAssetUrl(path: string) {
  return process.env.NODE_ENV === 'production'
    ? `${MAIN_URL}${path}`
    : `/${path}`;
}

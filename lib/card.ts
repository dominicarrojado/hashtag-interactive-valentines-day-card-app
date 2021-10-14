import { deserializeObject } from './crypto';
import { checkDateValid } from './date';
import { CardInfo } from './types';
import { COVER_NAMES } from './constants';

/**
 * Note: used single-letter key values to have shorter hash key
 * c - cover
 * d - date
 * t - to
 * f - from
 * m - message
 */
export function getCardInfo(key: any) {
  if (typeof key !== 'string') {
    return null;
  }

  const obj = deserializeObject(key);

  if (
    !obj ||
    typeof obj !== 'object' ||
    typeof obj.c !== 'string' ||
    !COVER_NAMES.includes(obj.c) ||
    !checkDateValid(obj.d) ||
    typeof obj.t !== 'string' ||
    obj.t === '' ||
    typeof obj.f !== 'string' ||
    obj.f === '' ||
    typeof obj.m !== 'string' ||
    obj.m === ''
  ) {
    return null;
  }

  return obj as CardInfo;
}

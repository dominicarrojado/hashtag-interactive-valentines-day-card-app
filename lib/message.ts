import { escape } from 'underscore';

export function parseMessage(value: string) {
  // escape html tags
  let message = escape(value);

  // replace newline with br
  message = message.replace(/\n/gm, ' <br />');

  // replace double space with nbsp
  message = message.replace(/  /gm, ' &nbsp;');

  return message;
}

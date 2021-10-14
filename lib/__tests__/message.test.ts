import { getFakeSentence, getFakeSentences } from '../test-helpers';
import { parseMessage } from '../message';

describe('message utilities', () => {
  describe('parseMessage()', () => {
    it('should escape HTML tags', () => {
      const stringOne = getFakeSentence();
      const stringTwo = getFakeSentences();
      const stringThree = getFakeSentences();
      const value = `<script>console.log("${stringOne}");</script>${stringTwo}<div>${stringThree}</div>`;

      const res = parseMessage(value);

      expect(res).toBe(
        `&lt;script&gt;console.log(&quot;${stringOne}&quot;);&lt;/script&gt;${stringTwo}&lt;div&gt;${stringThree}&lt;/div&gt;`
      );
    });

    it('should replace new line with <br />', () => {
      const stringOne = getFakeSentences();
      const stringTwo = getFakeSentences();
      const stringThree = getFakeSentences();
      const value = `${stringOne}\n\n${stringTwo}\n${stringThree}`;

      const res = parseMessage(value);

      expect(res).toBe(
        `${stringOne} <br /> <br />${stringTwo} <br />${stringThree}`
      );
    });

    it('should replace double space with &nbsp;', () => {
      const stringOne = getFakeSentences();
      const stringTwo = getFakeSentences();
      const stringThree = getFakeSentences();
      const stringFour = getFakeSentences();
      const value = `${stringOne}  ${stringTwo}    ${stringThree}   ${stringFour}`;

      const res = parseMessage(value);

      expect(res).toBe(
        `${stringOne} &nbsp;${stringTwo} &nbsp; &nbsp;${stringThree} &nbsp; ${stringFour}`
      );
    });
  });
});

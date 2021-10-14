import { getFakeNumber, setReadOnlyProperty } from '../test-helpers';
import { checkIsTouchScreen, copyTextToClipboard } from '../dom';

describe('dom utilities', () => {
  describe('copyTextToClipboard()', () => {
    const clipboardOrig = navigator.clipboard;
    const consoleErrorOrig = console.error;

    beforeEach(() => {
      setReadOnlyProperty(navigator, 'clipboard', {});
    });

    afterEach(() => {
      setReadOnlyProperty(navigator, 'clipboard', clipboardOrig);
      console.error = consoleErrorOrig;
    });

    it('should copy text to clipboard', () => {
      const writeTextMock = jest.fn();

      navigator.clipboard.writeText = writeTextMock;

      const text = 'Hello World';
      const res = copyTextToClipboard(text);

      expect(res).toBe(true);
      expect(writeTextMock).toBeCalledTimes(1);
      expect(writeTextMock).toBeCalledWith(text);
    });

    it('should handle unexpected error', () => {
      const consoleErrorMock = jest.fn();

      console.error = consoleErrorMock;

      const unexpectedError = 'unexpected error';

      navigator.clipboard.writeText = jest.fn(() => {
        throw unexpectedError;
      });

      const res = copyTextToClipboard('Hello World');

      expect(res).toBe(false);
      expect(consoleErrorMock).toBeCalledTimes(1);
      expect(consoleErrorMock).toBeCalledWith(
        'Error on copy text to clipboard:',
        unexpectedError
      );
    });
  });

  describe('checkIsTouchScreen()', () => {
    const maxTouchPointsOrig = navigator.maxTouchPoints;

    afterEach(() => {
      setReadOnlyProperty(navigator, 'maxTouchPoints', maxTouchPointsOrig);
    });

    it('should return false if zero', () => {
      setReadOnlyProperty(navigator, 'maxTouchPoints', 0);

      const res = checkIsTouchScreen();

      expect(res).toBe(false);
    });

    it('should return true if more than zero', () => {
      setReadOnlyProperty(
        navigator,
        'maxTouchPoints',
        getFakeNumber({ min: 1 })
      );

      const res = checkIsTouchScreen();

      expect(res).toBe(true);
    });
  });
});

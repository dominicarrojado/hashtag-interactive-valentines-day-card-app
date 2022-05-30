import { fireEvent, render, screen } from '@testing-library/react';
import { getFakeBoolean, queryByTextIgnoreHTML } from '../../lib/test-helpers';
import { StoreContext } from '../../lib/store';
import { GoogleAnalyticsEvent } from '../../lib/types';
import { PROJECT_TITLE, TEMPLATE_MESSAGES } from '../../lib/constants';
import * as message from '../../lib/message';
import * as ga from '../../lib/google-analytics';
import ModalMessages from '../modalMessages';

describe('<ModalMessages />', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render expected title', () => {
    const store = {
      isModalOpen: getFakeBoolean(),
    } as any;

    render(
      <StoreContext.Provider value={store}>
        <ModalMessages />
      </StoreContext.Provider>
    );

    const titleEl = queryByTextIgnoreHTML(
      screen,
      "Can't think of a message? Pick one from here!"
    );

    expect(titleEl.tagName).toBe('H5');
  });

  it('should render messages for selection', () => {
    jest.spyOn(message, 'parseMessage').mockImplementation((value) => value);

    const store = {
      isModalOpen: getFakeBoolean(),
    } as any;

    render(
      <StoreContext.Provider value={store}>
        <ModalMessages />
      </StoreContext.Provider>
    );

    TEMPLATE_MESSAGES.forEach((message) => {
      const messageBtnEl = queryByTextIgnoreHTML(screen, message);

      expect(messageBtnEl?.tagName).toBe('BUTTON');
    });
  });

  it('should update message on select', () => {
    jest.spyOn(message, 'parseMessage').mockImplementation((value) => value);

    const setMessageMock = jest.fn();
    const setIsModalOpenMock = jest.fn();

    const store = {
      isModalOpen: false,
      setMessage: setMessageMock,
      setIsModalOpen: setIsModalOpenMock,
    } as any;

    render(
      <StoreContext.Provider value={store}>
        <ModalMessages />
      </StoreContext.Provider>
    );

    TEMPLATE_MESSAGES.forEach((message) => {
      const messageBtnEl = queryByTextIgnoreHTML(
        screen,
        message
      ) as HTMLButtonElement;

      fireEvent.click(messageBtnEl);

      expect(setMessageMock).toBeCalledTimes(1);
      expect(setMessageMock).toBeCalledWith(message);

      expect(setIsModalOpenMock).toBeCalledTimes(1);
      expect(setIsModalOpenMock).toBeCalledWith(false);

      setMessageMock.mockClear();
      setIsModalOpenMock.mockClear();
    });
  });

  it('should track message select', () => {
    jest.spyOn(message, 'parseMessage').mockImplementation((value) => value);

    const trackEventSpy = jest.spyOn(ga, 'trackEvent');

    const store = {
      isModalOpen: false,
      setMessage: jest.fn(),
      setIsModalOpen: jest.fn(),
    } as any;

    render(
      <StoreContext.Provider value={store}>
        <ModalMessages />
      </StoreContext.Provider>
    );

    TEMPLATE_MESSAGES.forEach((message) => {
      const messageBtnEl = queryByTextIgnoreHTML(
        screen,
        message
      ) as HTMLButtonElement;

      fireEvent.click(messageBtnEl);

      expect(trackEventSpy).toBeCalledTimes(1);
      expect(trackEventSpy).toBeCalledWith({
        event: GoogleAnalyticsEvent.CARD_TEMPLATE_MESSAGE_CLICK,
        projectTitle: PROJECT_TITLE,
        buttonText: message,
      });

      trackEventSpy.mockClear();
    });
  });

  describe('isOpen prop', () => {
    it('should have expected attribute if true', () => {
      const store = {
        isModalOpen: true,
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <ModalMessages />
        </StoreContext.Provider>
      );

      const modalEl = screen.queryByTestId('modal');
      const modalBackdropEl = screen.queryByTestId('modal');

      expect(modalEl).toHaveAttribute('aria-hidden', 'false');
      expect(modalBackdropEl).toHaveAttribute('aria-hidden', 'false');
    });

    it('should have expected attribute if false', () => {
      const store = {
        isModalOpen: false,
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <ModalMessages />
        </StoreContext.Provider>
      );

      const modalEl = screen.queryByTestId('modal');
      const modalBackdropEl = screen.queryByTestId('modal');

      expect(modalEl).toHaveAttribute('aria-hidden', 'true');
      expect(modalBackdropEl).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('closeModal prop', () => {
    it('should be called on close icon click', () => {
      const setIsModalOpenMock = jest.fn();

      const store = {
        isModalOpen: false,
        setIsModalOpen: setIsModalOpenMock,
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <ModalMessages />
        </StoreContext.Provider>
      );

      const closeBtnEl = screen.queryByLabelText('Close') as HTMLButtonElement;

      fireEvent.click(closeBtnEl);

      expect(setIsModalOpenMock).toBeCalledTimes(1);
      expect(setIsModalOpenMock).toBeCalledWith(false);
    });
  });
});

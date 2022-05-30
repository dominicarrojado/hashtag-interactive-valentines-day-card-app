import { act, fireEvent, render, screen } from '@testing-library/react';
import * as router from 'next/router';
import {
  getFakeBoolean,
  getFakeDate,
  getFakeFirstName,
  getFakeSentences,
  getRandomCover,
  setReadOnlyProperty,
} from '../../lib/test-helpers';
import {
  getFacebookShareUrl,
  getMainShareUrl,
  getTwitterShareUrl,
} from '../../lib/share';
import { getFormattedDate, getInputDate } from '../../lib/date';
import { StoreContext } from '../../lib/store';
import { GoogleAnalyticsEvent, SocialName } from '../../lib/types';
import {
  CARD_INFO_PRE_MESSAGE,
  MAIN_TITLE,
  PROJECT_TITLE,
  TEXT_COPIED_TIMEOUT,
} from '../../lib/constants';
import * as dom from '../../lib/dom';
import * as ga from '../../lib/google-analytics';
import CardInfo from '../cardInfo';

jest.useFakeTimers();

describe('<CardInfo />', () => {
  const store = {
    cover: getRandomCover(),
    cardTo: getFakeFirstName(),
    cardFrom: getFakeFirstName(),
    cardDate: new Date(getFakeDate()),
    message: getFakeSentences(),
    isCardOwner: getFakeBoolean(),
  } as any;

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('card info', () => {
    beforeEach(() => {
      render(
        <StoreContext.Provider value={store}>
          <CardInfo />
        </StoreContext.Provider>
      );
    });

    it('should render date', () => {
      const dateObj = new Date(store.cardDate);
      const formattedDate = getFormattedDate(dateObj);

      const dateEl = screen.queryByText(formattedDate);

      expect(dateEl?.tagName).toBe('TIME');
      expect(dateEl).toHaveAttribute('datetime', getInputDate(dateObj));
    });

    it('should render "to"', () => {
      const toEl = screen.queryByText(store.cardTo);
      const labelEl = toEl?.previousElementSibling;

      expect(labelEl).toHaveTextContent('To:');
    });

    it('should render "from"', () => {
      const fromEl = screen.queryByText(store.cardFrom);
      const labelEl = fromEl?.previousElementSibling;

      expect(labelEl).toHaveTextContent('From:');
    });

    it('should render message', () => {
      const messageEl = screen.queryByText(store.message);

      expect(messageEl).toBeInTheDocument();
    });

    it('should render share title', () => {
      const titleEl = screen.queryByText('Share this card');

      expect(titleEl).toBeInTheDocument();
    });

    it('should render share to facebook anchor', () => {
      const anchorEl = screen.queryByTitle('Share to Facebook');

      expect(anchorEl?.tagName).toBe('A');
      expect(anchorEl).toHaveAttribute(
        'href',
        getFacebookShareUrl(getMainShareUrl())
      );
      expect(anchorEl).toHaveAttribute('target', '_blank');
      expect(anchorEl).toHaveAttribute('rel', 'noopener noreferrer nofollow');
    });

    it('should track share to facebook', () => {
      const trackEventSpy = jest.spyOn(ga, 'trackEvent');

      const anchorText = 'Share to Facebook';
      const anchorEl = screen.queryByTitle(anchorText) as HTMLAnchorElement;

      fireEvent.click(anchorEl);

      expect(trackEventSpy).toBeCalledTimes(1);
      expect(trackEventSpy).toBeCalledWith({
        event: GoogleAnalyticsEvent.CARD_SHARE,
        projectTitle: PROJECT_TITLE,
        socialName: SocialName.FACEBOOK,
        linkText: anchorText,
        cardCover: store.cover.name,
      });
    });

    it('should render share to twitter anchor', () => {
      const anchorEl = screen.queryByTitle('Share to Twitter');

      expect(anchorEl?.tagName).toBe('A');
      expect(anchorEl).toHaveAttribute(
        'href',
        getTwitterShareUrl(getMainShareUrl())
      );
      expect(anchorEl).toHaveAttribute('target', '_blank');
      expect(anchorEl).toHaveAttribute('rel', 'noopener noreferrer nofollow');
    });

    it('should track share to twitter', () => {
      const trackEventSpy = jest.spyOn(ga, 'trackEvent');

      const anchorText = 'Share to Twitter';
      const anchorEl = screen.queryByTitle(anchorText) as HTMLAnchorElement;

      fireEvent.click(anchorEl);

      expect(trackEventSpy).toBeCalledTimes(1);
      expect(trackEventSpy).toBeCalledWith({
        event: GoogleAnalyticsEvent.CARD_SHARE,
        projectTitle: PROJECT_TITLE,
        socialName: SocialName.TWITTER,
        linkText: anchorText,
        cardCover: store.cover.name,
      });
    });
  });

  describe('create button', () => {
    it('should have expected button text if owner', () => {
      store.isCardOwner = true;

      render(
        <StoreContext.Provider value={store}>
          <CardInfo />
        </StoreContext.Provider>
      );

      const btnEl = screen.queryAllByRole('button')[0] as HTMLButtonElement;

      expect(btnEl).toHaveTextContent('Create another one');
    });

    it('should have expected button text if NOT owner', () => {
      store.isCardOwner = false;

      render(
        <StoreContext.Provider value={store}>
          <CardInfo />
        </StoreContext.Provider>
      );

      const btnEl = screen.queryAllByRole('button')[0] as HTMLButtonElement;

      expect(btnEl).toHaveTextContent('Create your own');
    });

    it('should reset route on create click', () => {
      const routerPushMock = jest.fn();

      jest.spyOn(router, 'useRouter').mockReturnValue({
        push: routerPushMock,
      } as any);

      render(
        <StoreContext.Provider value={store}>
          <CardInfo />
        </StoreContext.Provider>
      );

      const btnEl = screen.queryAllByRole('button')[0] as HTMLButtonElement;

      fireEvent.click(btnEl);

      expect(routerPushMock).toBeCalledTimes(1);
      expect(routerPushMock).toBeCalledWith('/');
    });

    it('should track create click', () => {
      jest.spyOn(router, 'useRouter').mockReturnValue({
        push: jest.fn(),
      } as any);

      const trackEventSpy = jest.spyOn(ga, 'trackEvent');

      render(
        <StoreContext.Provider value={store}>
          <CardInfo />
        </StoreContext.Provider>
      );

      const btnEl = screen.queryAllByRole('button')[0] as HTMLButtonElement;

      fireEvent.click(btnEl);

      expect(trackEventSpy).toBeCalledTimes(1);
      expect(trackEventSpy).toBeCalledWith({
        event: GoogleAnalyticsEvent.CARD_RECREATE,
        projectTitle: PROJECT_TITLE,
        cardCover: store.cover.name,
      });
    });
  });

  describe('copy link', () => {
    const navigatorShareOrig = navigator.share;
    const consoleErrorOrig = console.error;
    const clipboardOrig = navigator.clipboard;

    beforeEach(() => {
      setReadOnlyProperty(navigator, 'clipboard', {});
    });

    afterEach(() => {
      navigator.share = navigatorShareOrig;
      console.error = consoleErrorOrig;
      setReadOnlyProperty(navigator, 'clipboard', clipboardOrig);
    });

    it('should use share web api if mobile device', () => {
      jest.spyOn(dom, 'checkIsTouchScreen').mockReturnValue(true);

      const navigatorShareMock = jest.fn();

      navigator.share = navigatorShareMock;

      render(
        <StoreContext.Provider value={store}>
          <CardInfo />
        </StoreContext.Provider>
      );

      const btnEl = screen.queryByTitle('Copy link') as HTMLButtonElement;

      fireEvent.click(btnEl);

      expect(navigatorShareMock).toBeCalledTimes(1);
      expect(navigatorShareMock).toBeCalledWith({
        title: MAIN_TITLE,
        text: CARD_INFO_PRE_MESSAGE,
        url: getMainShareUrl(),
      });

      const copiedEl = screen.queryByText('Copied!');

      expect(copiedEl).not.toBeInTheDocument();
    });

    it('should copy text to clipboard if NOT mobile device', () => {
      jest.spyOn(dom, 'checkIsTouchScreen').mockReturnValue(false);
      navigator.clipboard.writeText = jest.fn();

      const copyTextToClipboardSpy = jest.spyOn(dom, 'copyTextToClipboard');

      render(
        <StoreContext.Provider value={store}>
          <CardInfo />
        </StoreContext.Provider>
      );

      let copiedEl = screen.queryByText('Copied!');

      expect(copiedEl).not.toBeInTheDocument();

      const btnEl = screen.queryByTitle('Copy link') as HTMLButtonElement;

      fireEvent.click(btnEl);

      expect(copyTextToClipboardSpy).toBeCalledTimes(1);
      expect(copyTextToClipboardSpy).toBeCalledWith(getMainShareUrl());

      copiedEl = screen.queryByText('Copied!');

      expect(copiedEl).toBeInTheDocument();

      // should disappear after timeout
      act(() => {
        jest.advanceTimersByTime(TEXT_COPIED_TIMEOUT);
      });

      expect(copiedEl).not.toBeInTheDocument();
    });

    it('should handle copy text to clipboard failure', () => {
      jest.spyOn(dom, 'checkIsTouchScreen').mockReturnValue(false);
      console.error = jest.fn();

      render(
        <StoreContext.Provider value={store}>
          <CardInfo />
        </StoreContext.Provider>
      );

      const btnEl = screen.queryByTitle('Copy link') as HTMLButtonElement;

      fireEvent.click(btnEl);

      const copiedEl = screen.queryByText('Copied!');

      expect(copiedEl).not.toBeInTheDocument();
    });

    it('should track copy text', () => {
      const trackEventSpy = jest.spyOn(ga, 'trackEvent');

      // randomize from 3 cases above
      jest.spyOn(dom, 'checkIsTouchScreen').mockReturnValue(getFakeBoolean());
      navigator.clipboard.writeText = (
        getFakeBoolean() ? jest.fn() : undefined
      ) as any;
      console.error = jest.fn();

      render(
        <StoreContext.Provider value={store}>
          <CardInfo />
        </StoreContext.Provider>
      );

      const btnText = 'Copy link';
      const btnEl = screen.queryByTitle(btnText) as HTMLButtonElement;

      fireEvent.click(btnEl);

      expect(trackEventSpy).toBeCalledTimes(1);
      expect(trackEventSpy).toBeCalledWith({
        event: GoogleAnalyticsEvent.CARD_LINK_COPY,
        projectTitle: PROJECT_TITLE,
        buttonText: btnText,
        cardCover: store.cover.name,
      });
    });
  });
});

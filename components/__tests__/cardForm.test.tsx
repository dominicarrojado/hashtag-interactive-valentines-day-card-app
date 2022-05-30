import { fireEvent, render, screen } from '@testing-library/react';
import * as router from 'next/router';
import {
  getFakeDate,
  getFakeFirstName,
  getFakeNumber,
  getFakeSentences,
  getRandomCover,
} from '../../lib/test-helpers';
import { serializeObject } from '../../lib/crypto';
import { getFormattedDate, getInputDate } from '../../lib/date';
import { StoreContext } from '../../lib/store';
import { FormName, GoogleAnalyticsEvent } from '../../lib/types';
import {
  CARD_INFO_QUERY_KEY,
  COVERS,
  PROJECT_TITLE,
} from '../../lib/constants';
import * as ga from '../../lib/google-analytics';
import CardForm from '../cardForm';

describe('<CardForm />', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render note', () => {
    const store = {
      cover: getRandomCover(),
      cardDate: new Date(getFakeDate()),
    } as any;

    render(
      <StoreContext.Provider value={store}>
        <CardForm />
      </StoreContext.Provider>
    );

    const noteText =
      'Note: We do not store the text information you provide in this form into our server. When you create a card, it is transformed into an unreadable text and added into the URL. It is your responsibility to whom you share this URL to.';
    const noteEl = screen.queryByText(noteText);

    expect(noteEl).toBeInTheDocument();
  });

  describe('cover', () => {
    it('should have expected container theme', () => {
      COVERS.forEach((cover) => {
        const store = { cover, cardDate: new Date(getFakeDate()) } as any;

        const { unmount } = render(
          <StoreContext.Provider value={store}>
            <CardForm />
          </StoreContext.Provider>
        );

        const coverContainerEl = screen.queryByTestId('cover-container');

        expect(coverContainerEl).toHaveAttribute('data-theme', cover.name);

        unmount();
      });
    });

    it('should render covers for preview', () => {
      const selectedCover = getRandomCover();
      const store = {
        cover: selectedCover,
        cardDate: new Date(getFakeDate()),
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const coverContainerEl = screen.queryByTestId('cover-container');
      const coverImgEls =
        coverContainerEl?.childNodes as NodeListOf<HTMLImageElement>;

      expect(coverImgEls).toHaveLength(COVERS.length);

      coverImgEls.forEach((coverImgEl, idx) => {
        const coverData = COVERS[idx];

        expect(coverImgEl.tagName).toBe('IMG');
        expect(coverImgEl).toHaveAttribute('src', coverData.gif);
        expect(coverImgEl).toHaveAttribute('alt', coverData.imageAlt);
        expect(coverImgEl).toHaveAttribute('draggable', 'false');
        expect(coverImgEl).toHaveAttribute(
          'aria-hidden',
          (coverData.name !== selectedCover.name).toString()
        );
      });
    });

    it('should render label', () => {
      const store = {
        cover: getRandomCover(),
        cardDate: new Date(getFakeDate()),
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const labelEl = screen.queryByText('Select a cover');

      expect(labelEl).toBeInTheDocument();
    });

    it('should render radios for cover selection', () => {
      const selectedCover = getRandomCover();
      const store = {
        cover: selectedCover,
        cardDate: new Date(getFakeDate()),
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const radioEls = screen.queryAllByRole(
        'radio'
      ) as Array<HTMLInputElement>;

      expect(radioEls).toHaveLength(COVERS.length);

      radioEls.forEach((radioEl, idx) => {
        const coverData = COVERS[idx];

        expect(radioEl.tagName).toBe('INPUT');
        expect(radioEl).toHaveAttribute('name', FormName.COVER);
        expect(radioEl).toHaveAttribute('value', coverData.name);
        expect(radioEl.checked).toBe(coverData.name === selectedCover.name);

        const radioImgEl = radioEl.nextElementSibling;

        expect(radioImgEl).toHaveStyle({
          backgroundImage: `url(${coverData.image})`,
        });
      });
    });

    it('should update cover on select', () => {
      const setCoverMock = jest.fn();
      const selectedCover = getRandomCover();
      const store = {
        cover: selectedCover,
        cardDate: new Date(getFakeDate()),
        setCover: setCoverMock,
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const radioEls = screen.queryAllByRole(
        'radio'
      ) as Array<HTMLInputElement>;

      const getRandomIdx = (): number => {
        const idx = getFakeNumber({ min: 0, max: radioEls.length - 1 });

        // new selected cover must be different from current selected to trigger change
        if (
          idx === COVERS.findIndex((item) => item.name === selectedCover.name)
        ) {
          return getRandomIdx();
        }

        return idx;
      };
      const randomIdx = getRandomIdx();

      const newSelectedRadioEl = radioEls[randomIdx];
      const newSelectedCover = COVERS[randomIdx];

      fireEvent.click(newSelectedRadioEl);

      expect(setCoverMock).toBeCalledTimes(1);
      expect(setCoverMock).toBeCalledWith(newSelectedCover);
    });
  });

  it('should render date', () => {
    const cardDate = new Date(getFakeDate());
    const store = {
      cardDate,
      cover: getRandomCover(),
    } as any;

    render(
      <StoreContext.Provider value={store}>
        <CardForm />
      </StoreContext.Provider>
    );

    const formattedDate = getFormattedDate(cardDate);

    const dateEl = screen.queryByText(formattedDate);

    expect(dateEl?.tagName).toBe('TIME');
    expect(dateEl).toHaveAttribute('datetime', getInputDate(cardDate));
  });

  describe('"to"', () => {
    it('should render input', () => {
      const cardTo = getFakeFirstName();
      const store = {
        cardTo,
        cover: getRandomCover(),
        cardDate: new Date(getFakeDate()),
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const inputEl = screen.queryByLabelText('To:') as HTMLInputElement;

      expect(inputEl.tagName).toBe('INPUT');
      expect(inputEl).toHaveAttribute('spellCheck', 'false');
      expect(inputEl.value).toBe(cardTo);
    });

    it('should update "to" on input change', () => {
      const setCardToMock = jest.fn();
      const store = {
        cover: getRandomCover(),
        cardTo: getFakeFirstName(),
        cardDate: new Date(getFakeDate()),
        setCardTo: setCardToMock,
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const inputEl = screen.queryByLabelText('To:') as HTMLInputElement;
      const newValue = getFakeFirstName();

      fireEvent.change(inputEl, { target: { value: newValue } });

      expect(setCardToMock).toBeCalledTimes(1);
      expect(setCardToMock).toBeCalledWith(newValue);
    });
  });

  describe('"from"', () => {
    it('should render input', () => {
      const cardFrom = getFakeFirstName();
      const store = {
        cardFrom,
        cover: getRandomCover(),
        cardDate: new Date(getFakeDate()),
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const inputEl = screen.queryByLabelText('From:') as HTMLInputElement;

      expect(inputEl.tagName).toBe('INPUT');
      expect(inputEl).toHaveAttribute('spellCheck', 'false');
      expect(inputEl.value).toBe(cardFrom);
    });

    it('should update "from" on input change', () => {
      const setCardFromMock = jest.fn();
      const store = {
        cover: getRandomCover(),
        cardFrom: getFakeFirstName(),
        cardDate: new Date(getFakeDate()),
        setCardFrom: setCardFromMock,
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const inputEl = screen.queryByLabelText('From:') as HTMLInputElement;
      const newValue = getFakeFirstName();

      fireEvent.change(inputEl, { target: { value: newValue } });

      expect(setCardFromMock).toBeCalledTimes(1);
      expect(setCardFromMock).toBeCalledWith(newValue);
    });
  });

  describe('message', () => {
    it('should render input', () => {
      const message = getFakeSentences();
      const store = {
        message,
        cover: getRandomCover(),
        cardDate: new Date(getFakeDate()),
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const inputEl = screen.queryByPlaceholderText(
        'Type your message here...'
      ) as HTMLInputElement;

      expect(inputEl.tagName).toBe('TEXTAREA');
      expect(inputEl).toHaveAttribute('spellCheck', 'false');
      expect(inputEl.value).toBe(message);
    });

    it('should update message on input change', () => {
      const setMessageMock = jest.fn();
      const store = {
        cover: getRandomCover(),
        message: getFakeSentences(),
        cardDate: new Date(getFakeDate()),
        setMessage: setMessageMock,
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const inputEl = screen.queryByPlaceholderText(
        'Type your message here...'
      ) as HTMLInputElement;
      const newValue = getFakeSentences();

      fireEvent.change(inputEl, { target: { value: newValue } });

      expect(setMessageMock).toBeCalledTimes(1);
      expect(setMessageMock).toBeCalledWith(newValue);
    });
  });

  describe('message helper', () => {
    it('should render button', () => {
      const store = {
        cover: getRandomCover(),
        cardDate: new Date(getFakeDate()),
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const btnEl = screen.queryByTitle(
        "Can't think of a message? Pick one from here!"
      );

      expect(btnEl?.tagName).toBe('BUTTON');
      expect(btnEl).toHaveAttribute('type', 'button');
    });

    it('should show modal on click', () => {
      const setIsModalOpenMock = jest.fn();
      const store = {
        cover: getRandomCover(),
        cardDate: new Date(getFakeDate()),
        setIsModalOpen: setIsModalOpenMock,
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const btnEl = screen.queryByTitle(
        "Can't think of a message? Pick one from here!"
      ) as HTMLButtonElement;

      fireEvent.click(btnEl);

      expect(setIsModalOpenMock).toBeCalledTimes(1);
      expect(setIsModalOpenMock).toBeCalledWith(true);
    });

    it('should track show modal', () => {
      const trackEventSpy = jest.spyOn(ga, 'trackEvent');

      const store = {
        cover: getRandomCover(),
        cardDate: new Date(getFakeDate()),
        setIsModalOpen: jest.fn(),
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const btnText = "Can't think of a message? Pick one from here!";
      const btnEl = screen.queryByTitle(btnText) as HTMLButtonElement;

      fireEvent.click(btnEl);

      expect(trackEventSpy).toBeCalledTimes(1);
      expect(trackEventSpy).toBeCalledWith({
        event: GoogleAnalyticsEvent.MODAL_OPEN,
        projectTitle: PROJECT_TITLE,
        buttonText: btnText,
      });
    });
  });

  describe('form submit', () => {
    it('should show error if values are invalid on submit', () => {
      const invalidPayloads = [
        {
          cardTo: '',
          cardFrom: getFakeFirstName(),
          message: getFakeSentences(),
        },
        {
          cardTo: getFakeFirstName(),
          cardFrom: ' ',
          message: getFakeSentences(),
        },
        {
          cardTo: getFakeFirstName(),
          cardFrom: getFakeFirstName(),
          message: '  ',
        },
      ];

      invalidPayloads.forEach((invalidPayload) => {
        const store = {
          ...invalidPayload,
          cover: getRandomCover(),
          cardDate: new Date(getFakeDate()),
        } as any;

        const { unmount } = render(
          <StoreContext.Provider value={store}>
            <CardForm />
          </StoreContext.Provider>
        );

        const btnEl = screen.queryByText('Create') as HTMLButtonElement;

        const errorText =
          'Do not rush love! Please fill out everything before creating.';
        let errorEl = screen.queryByText(errorText);

        expect(errorEl).not.toBeInTheDocument();

        fireEvent.click(btnEl);

        errorEl = screen.queryByText(errorText);

        expect(errorEl).toBeInTheDocument();

        unmount();
      });
    });

    it('should update route on submit success', () => {
      const routerPushMock = jest.fn();

      jest.spyOn(router, 'useRouter').mockReturnValue({
        push: routerPushMock,
      } as any);

      const cardDateTime = new Date(getFakeDate()).getTime();

      jest.spyOn(Date.prototype, 'getTime').mockReturnValue(cardDateTime);

      const setIsCardOwnerMock = jest.fn();
      const setIsCardOpenMock = jest.fn();

      const store = {
        cover: getRandomCover(),
        cardDate: new Date(cardDateTime),
        cardTo: getFakeFirstName(),
        cardFrom: getFakeFirstName(),
        message: getFakeSentences(),
        setIsCardOwner: setIsCardOwnerMock,
        setIsCardOpen: setIsCardOpenMock,
      } as any;
      const id = serializeObject({
        c: store.cover.name,
        d: new Date().getTime(),
        t: store.cardTo,
        f: store.cardFrom,
        m: store.message,
      });

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const btnEl = screen.queryByText('Create') as HTMLButtonElement;

      fireEvent.click(btnEl);

      expect(setIsCardOwnerMock).toBeCalledTimes(1);
      expect(setIsCardOwnerMock).toBeCalledWith(true);
      expect(setIsCardOpenMock).toBeCalledTimes(1);
      expect(setIsCardOpenMock).toBeCalledWith(true);

      expect(routerPushMock).toBeCalledTimes(1);
      expect(routerPushMock).toBeCalledWith({
        pathname: '/',
        query: { [CARD_INFO_QUERY_KEY]: id },
      });
    });

    it('should track submit success', () => {
      const trackEventSpy = jest.spyOn(ga, 'trackEvent');

      jest.spyOn(router, 'useRouter').mockReturnValue({
        push: jest.fn(),
      } as any);

      const store = {
        cover: getRandomCover(),
        cardDate: new Date(getFakeDate()),
        cardTo: getFakeFirstName(),
        cardFrom: getFakeFirstName(),
        message: getFakeSentences(),
        setIsCardOwner: jest.fn(),
        setIsCardOpen: jest.fn(),
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardForm />
        </StoreContext.Provider>
      );

      const btnEl = screen.queryByText('Create') as HTMLButtonElement;

      fireEvent.click(btnEl);

      expect(trackEventSpy).toBeCalledTimes(1);
      expect(trackEventSpy).toBeCalledWith({
        event: GoogleAnalyticsEvent.CARD_CREATE,
        projectTitle: PROJECT_TITLE,
        cardCover: store.cover.name,
      });
    });
  });
});

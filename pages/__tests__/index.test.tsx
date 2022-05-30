import { act, render } from '@testing-library/react';
import * as router from 'next/router';
import { serializeObject } from '../../lib/crypto';
import {
  getFakeDate,
  getFakeFirstName,
  getFakeSentences,
  getRandomCover,
} from '../../lib/test-helpers';
import { CARD_INFO_QUERY_KEY } from '../../lib/constants';
import * as CardForm from '../../components/cardForm';
import * as ModalMessages from '../../components/modalMessages';
import * as CardCover from '../../components/cardCover';
import * as CardInfo from '../../components/cardInfo';
import Home from '../index.page';

jest.useFakeTimers();

describe('<Home />', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render expected components if card info is NOT valid', () => {
    jest.spyOn(router, 'useRouter').mockReturnValue({ query: {} } as any);

    const cardFormSpy = jest.spyOn(CardForm, 'default');
    const modalMessagesSpy = jest.spyOn(ModalMessages, 'default');
    const cardCoverSpy = jest.spyOn(CardCover, 'default');
    const cardInfoSpy = jest.spyOn(CardInfo, 'default');

    render(<Home />);

    act(() => {
      jest.advanceTimersByTime(100); // mount delay
    });

    expect(cardFormSpy).toBeCalled();
    expect(modalMessagesSpy).toBeCalled();
    expect(cardCoverSpy).not.toBeCalled();
    expect(cardInfoSpy).not.toBeCalled();
  });

  it('should render expected components if card info is valid', () => {
    const id = serializeObject({
      c: getRandomCover().name,
      d: new Date(getFakeDate()).getTime(),
      t: getFakeFirstName(),
      f: getFakeFirstName(),
      m: getFakeSentences(),
    });

    jest
      .spyOn(router, 'useRouter')
      .mockReturnValue({ query: { [CARD_INFO_QUERY_KEY]: id } } as any);

    const cardFormSpy = jest.spyOn(CardForm, 'default');
    const modalMessagesSpy = jest.spyOn(ModalMessages, 'default');
    const cardCoverSpy = jest.spyOn(CardCover, 'default');
    const cardInfoSpy = jest.spyOn(CardInfo, 'default');

    render(<Home />);

    act(() => {
      jest.advanceTimersByTime(100); // mount delay
    });

    expect(cardCoverSpy).toBeCalled();
    expect(cardInfoSpy).toBeCalled();
    expect(cardFormSpy).not.toBeCalled();
    expect(modalMessagesSpy).not.toBeCalled();
  });
});

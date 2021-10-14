import { fireEvent, render, screen } from '@testing-library/react';
import { getFakeBoolean, getRandomCover } from '../../lib/test-helpers';
import { StoreContext } from '../../lib/store';
import CardCover from '../cardCover';

describe('<CardCover />', () => {
  describe('isCardOpen prop', () => {
    it('should have expected attribute if true', () => {
      const isCardOpen = true;
      const cover = getRandomCover();
      const store = {
        isCardOpen,
        cover,
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardCover />
        </StoreContext.Provider>
      );

      const imgEl = screen.queryByRole('img');
      const imgContainerEl = imgEl?.parentElement;

      expect(imgContainerEl).toHaveAttribute(
        'aria-expanded',
        isCardOpen.toString()
      );
    });

    it('should have expected toggle if true', () => {
      const store = {
        isCardOpen: true,
        cover: getRandomCover(),
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardCover />
        </StoreContext.Provider>
      );

      const toggleBtnEl = screen.queryByText('Close');

      expect(toggleBtnEl?.tagName).toBe('BUTTON');
    });

    it('should have expected attribute if false', () => {
      const isCardOpen = false;
      const cover = getRandomCover();
      const store = {
        isCardOpen,
        cover,
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardCover />
        </StoreContext.Provider>
      );

      const imgEl = screen.queryByRole('img');
      const imgContainerEl = imgEl?.parentElement;

      expect(imgContainerEl).toHaveAttribute(
        'aria-expanded',
        isCardOpen.toString()
      );
    });

    it('should have expected toggle if false', () => {
      const store = {
        isCardOpen: false,
        cover: getRandomCover(),
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardCover />
        </StoreContext.Provider>
      );

      const toggleBtnEl = screen.queryByText('Open');

      expect(toggleBtnEl?.tagName).toBe('BUTTON');
    });
  });

  it('should render expected gif', () => {
    const cover = getRandomCover();
    const store = {
      cover,
      isCardOpen: getFakeBoolean(),
    } as any;

    render(
      <StoreContext.Provider value={store}>
        <CardCover />
      </StoreContext.Provider>
    );

    const imgEl = screen.queryByRole('img');

    expect(imgEl).toHaveAttribute('src', cover.gif);
    expect(imgEl).toHaveAttribute('alt', cover.imageAlt);
  });

  describe('toggle button', () => {
    it('should close the card if toggle is clicked', () => {
      const isCardOpen = true;
      const setIsCardOpenMock = jest.fn();
      const store = {
        isCardOpen,
        cover: getRandomCover(),
        setIsCardOpen: jest.fn((callback) => {
          const res = callback(isCardOpen);
          setIsCardOpenMock(res);
        }),
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardCover />
        </StoreContext.Provider>
      );

      const toggleBtnEl = screen.queryByText('Close') as HTMLButtonElement;

      fireEvent.click(toggleBtnEl);

      expect(setIsCardOpenMock).toBeCalledTimes(1);
      expect(setIsCardOpenMock).toBeCalledWith(!isCardOpen);
    });

    it('should open the card if toggle is clicked', () => {
      const isCardOpen = false;
      const setIsCardOpenMock = jest.fn();
      const store = {
        isCardOpen,
        cover: getRandomCover(),
        setIsCardOpen: jest.fn((callback) => {
          const res = callback(isCardOpen);
          setIsCardOpenMock(res);
        }),
      } as any;

      render(
        <StoreContext.Provider value={store}>
          <CardCover />
        </StoreContext.Provider>
      );

      const toggleBtnEl = screen.queryByText('Open') as HTMLButtonElement;

      fireEvent.click(toggleBtnEl);

      expect(setIsCardOpenMock).toBeCalledTimes(1);
      expect(setIsCardOpenMock).toBeCalledWith(!isCardOpen);
    });
  });
});

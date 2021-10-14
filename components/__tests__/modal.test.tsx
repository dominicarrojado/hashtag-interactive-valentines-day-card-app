import { fireEvent, render, screen } from '@testing-library/react';
import {
  getFakeBoolean,
  getFakeSentence,
  getFakeSentences,
} from '../../lib/test-helpers';
import * as hooks from '../../lib/hooks';
import Modal from '../modal';

describe('<Modal />', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render children', () => {
    const text = getFakeSentences();

    render(
      <Modal
        isOpen={getFakeBoolean()}
        title={getFakeSentence()}
        closeModal={jest.fn()}
      >
        {text}
      </Modal>
    );

    const textEl = screen.queryByText(text);

    expect(textEl).toBeInTheDocument();
  });

  it('should accept title prop', () => {
    const title = getFakeSentence();

    render(
      <Modal isOpen={getFakeBoolean()} title={title} closeModal={jest.fn()}>
        {getFakeSentences()}
      </Modal>
    );

    const titleEl = screen.queryByText(title);

    expect(titleEl?.tagName).toBe('H5');
  });

  describe('isOpen prop', () => {
    it('should have expected attribute if true', () => {
      render(
        <Modal isOpen={true} title={getFakeSentence()} closeModal={jest.fn()}>
          {getFakeSentences()}
        </Modal>
      );

      const modalEl = screen.queryByTestId('modal');
      const modalBackdropEl = screen.queryByTestId('modal');

      expect(modalEl).toHaveAttribute('aria-hidden', 'false');
      expect(modalBackdropEl).toHaveAttribute('aria-hidden', 'false');
    });

    it('should have expected attribute if false', () => {
      render(
        <Modal isOpen={false} title={getFakeSentence()} closeModal={jest.fn()}>
          {getFakeSentences()}
        </Modal>
      );

      const modalEl = screen.queryByTestId('modal');
      const modalBackdropEl = screen.queryByTestId('modal');

      expect(modalEl).toHaveAttribute('aria-hidden', 'true');
      expect(modalBackdropEl).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('closeModal prop', () => {
    it('should NOT be called by default', () => {
      const closeModalMock = jest.fn();

      render(
        <Modal
          isOpen={getFakeBoolean()}
          title={getFakeSentence()}
          closeModal={closeModalMock}
        >
          {getFakeSentences()}
        </Modal>
      );

      expect(closeModalMock).not.toBeCalled();
    });

    it('should be called on close icon click', () => {
      const closeModalMock = jest.fn();

      render(
        <Modal
          isOpen={getFakeBoolean()}
          title={getFakeSentence()}
          closeModal={closeModalMock}
        >
          {getFakeSentences()}
        </Modal>
      );

      const closeBtnEl = screen.queryByLabelText('Close') as HTMLButtonElement;

      fireEvent.click(closeBtnEl);

      expect(closeModalMock).toBeCalledTimes(1);
    });
  });

  describe('body scroll', () => {
    it('should hide body scroll on open', () => {
      render(
        <Modal isOpen={true} title={getFakeSentence()} closeModal={jest.fn()}>
          {getFakeSentences()}
        </Modal>
      );

      expect(document.body.className).not.toHaveLength(0);
    });

    it('should NOT hide body scroll on close', () => {
      render(
        <Modal isOpen={false} title={getFakeSentence()} closeModal={jest.fn()}>
          {getFakeSentences()}
        </Modal>
      );

      expect(document.body.className).toHaveLength(0);
    });
  });

  describe('modal body scroll top', () => {
    it('should reset modal body scroll top on open', () => {
      const getRefValueSpy = jest
        .spyOn(hooks, 'getRefValue')
        .mockReturnValue({});

      render(
        <Modal isOpen={true} title={getFakeSentence()} closeModal={jest.fn()}>
          {getFakeSentences()}
        </Modal>
      );

      expect(getRefValueSpy).toBeCalledTimes(1);
    });

    it('should NOT reset modal body scroll top on close', () => {
      const getRefValueSpy = jest
        .spyOn(hooks, 'getRefValue')
        .mockReturnValue({});

      render(
        <Modal isOpen={false} title={getFakeSentence()} closeModal={jest.fn()}>
          {getFakeSentences()}
        </Modal>
      );

      expect(getRefValueSpy).not.toBeCalled();
    });
  });
});

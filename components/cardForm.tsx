import React, {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import autosize from 'autosize';
import cn from 'classnames';
import { getRefValue } from '../lib/hooks';
import { getAssetUrl } from '../lib/assets';
import { serializeObject } from '../lib/crypto';
import { trackEvent } from '../lib/google-analytics';
import { StoreContext } from '../lib/store';
import DateText from './dateText';
import CoverRadio from './coverRadio';
import InputText from './inputText';
import InputTextArea from './inputTextArea';
import Button from './button';
import { Cover, CoverName, FormName, GoogleAnalyticsEvent } from '../lib/types';
import { CARD_INFO_QUERY_KEY, COVERS, PROJECT_TITLE } from '../lib/constants';
import styles from './cardForm.module.css';
import bgColorStyles from '../styles/bgColor.module.css';

function CardForm() {
  const router = useRouter();
  const cardToRef = useRef<HTMLInputElement>(null);
  const cardFromRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const context = useContext(StoreContext);
  const [hasError, setHasError] = useState(false);
  const coverName = context.cover.name;
  const coverContainerClassName = cn(styles.cardCoverContainer, {
    [bgColorStyles.teal]: coverName === CoverName.TEAL,
    [bgColorStyles.red]: coverName === CoverName.RED,
    [bgColorStyles.pink]: coverName === CoverName.PINK,
    [bgColorStyles.black]: coverName === CoverName.BLACK,
    [bgColorStyles.purple]: coverName === CoverName.PURPLE,
  });
  const coverOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCover = COVERS.find(
      (item) => item.name === e.target.value
    ) as Cover;

    context.setCover(newCover);
  };
  const cardToOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHasError(false);
    context.setCardTo(e.target.value);
  };
  const cardFromOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHasError(false);
    context.setCardFrom(e.target.value);
  };
  const messageOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setHasError(false);
    context.setMessage(e.target.value);
  };
  const openModal = (e: MouseEvent<HTMLButtonElement>) => {
    setHasError(false);
    context.setIsModalOpen(true);

    trackEvent({
      event: GoogleAnalyticsEvent.MODAL_OPEN,
      projectTitle: PROJECT_TITLE,
      buttonText: e.currentTarget.title,
    });
  };
  const formOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cardTo = getRefValue(cardToRef).value.trim();
    const cardFrom = getRefValue(cardFromRef).value.trim();
    const message = getRefValue(messageRef).value.trim();

    if (cardTo === '' || cardFrom === '' || message === '') {
      return setHasError(true);
    }

    context.setIsCardOwner(true);
    context.setIsCardOpen(true);

    const coverName = context.cover.name;
    const id = serializeObject({
      c: coverName,
      d: new Date().getTime(),
      t: cardTo,
      f: cardFrom,
      m: message,
    });

    router.push({
      pathname: '/',
      query: { [CARD_INFO_QUERY_KEY]: id },
    });

    trackEvent({
      event: GoogleAnalyticsEvent.CARD_CREATE,
      projectTitle: PROJECT_TITLE,
      cardCover: coverName,
    });
  };

  useEffect(() => {
    const messageEl = getRefValue(messageRef);

    autosize(messageEl);
  }, []);

  return (
    <>
      <div
        className={coverContainerClassName}
        data-theme={coverName}
        data-testid="cover-container"
      >
        {COVERS.map((item) => (
          <img
            key={item.name}
            src={item.gif}
            alt={item.imageAlt}
            className={cn(styles.cardCoverImg, {
              [styles.cardCoverImgActive]: item.name === coverName,
            })}
            draggable={false}
            aria-hidden={item.name !== coverName}
          />
        ))}
      </div>
      <form className={styles.cardForm} onSubmit={formOnSubmit}>
        <div className={styles.coverRadiosContainer}>
          <label className={styles.coverLabel}>Select a cover</label>
          <div className={styles.coverRadios} role="radiogroup">
            {COVERS.map((item) => (
              <CoverRadio
                key={item.name}
                name={FormName.COVER}
                image={item.image}
                role="radio"
                value={item.name}
                checked={item.name === coverName}
                onChange={coverOnChange}
              />
            ))}
          </div>
        </div>
        <div className={styles.date}>
          <DateText date={context.cardDate} />
        </div>
        <div className={styles.formGroup}>
          <InputText
            ref={cardToRef}
            label="To:"
            spellCheck={false}
            value={context.cardTo}
            onChange={cardToOnChange}
          />
        </div>
        <div className={styles.formGroup}>
          <InputText
            ref={cardFromRef}
            label="From:"
            spellCheck={false}
            value={context.cardFrom}
            onChange={cardFromOnChange}
          />
        </div>
        <div className={styles.formGroup}>
          <InputTextArea
            ref={messageRef}
            placeholder="Type your message here..."
            spellCheck={false}
            value={context.message}
            onChange={messageOnChange}
          />
          <button
            type="button"
            className={styles.formIconBtn}
            title="Can't think of a message? Pick one from here!"
            onClick={openModal}
          >
            <img
              src={getAssetUrl('images/icon-circle-question.png')}
              alt="question mark icon"
              className={styles.formIconImg}
            />
          </button>
        </div>
        <div className={styles.note}>
          Note: We do not store the text information you provide in this form
          into our server. When you create a card, it is transformed into an
          unreadable text and added into the URL. It is your responsibility to
          whom you share this URL to.
        </div>
        {hasError && (
          <div className={styles.error}>
            Do not rush love! Please fill out everything before creating.
          </div>
        )}
        <div className={styles.formBtn}>
          <Button type="submit" theme={coverName}>
            Create
          </Button>
        </div>
      </form>
    </>
  );
}

export default CardForm;

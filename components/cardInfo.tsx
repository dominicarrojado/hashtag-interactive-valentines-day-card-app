import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { getAssetUrl } from '../lib/assets';
import { checkIsTouchScreen, copyTextToClipboard } from '../lib/dom';
import { parseMessage } from '../lib/message';
import {
  getFacebookShareUrl,
  getMainShareUrl,
  getTwitterShareUrl,
} from '../lib/share';
import { StoreContext } from '../lib/store';
import Button from './button';
import DateText from './dateText';
import Tooltip from './tooltip';
import {
  CARD_INFO_PRE_MESSAGE,
  MAIN_TITLE,
  TEXT_COPIED_TIMEOUT,
} from '../lib/constants';
import styles from './cardInfo.module.css';

function CardInfo() {
  const router = useRouter();
  const timeoutRef = useRef(0);
  const context = useContext(StoreContext);
  const mainShareUrl = getMainShareUrl();
  const [isCopied, setIsCopied] = useState(false);
  const createOnClick = () => router.push('/');
  const copyOnClick = () => {
    if (checkIsTouchScreen() && typeof navigator.share === 'function') {
      return navigator.share({
        title: MAIN_TITLE,
        text: CARD_INFO_PRE_MESSAGE,
        url: mainShareUrl,
      });
    }

    const res = copyTextToClipboard(mainShareUrl);

    if (!res) {
      return;
    }

    setIsCopied(res);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(
      () => setIsCopied(false),
      TEXT_COPIED_TIMEOUT
    );
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className={styles.cardInfo}>
      <div className={styles.date}>
        <DateText date={context.cardDate} />
      </div>
      <div className={styles.infoGroup}>
        <div className={styles.infoLabel}>To:</div>
        <div className={styles.infoValue}>{context.cardTo}</div>
      </div>
      <div className={styles.infoGroup}>
        <div className={styles.infoLabel}>From:</div>
        <div className={styles.infoValue}>{context.cardFrom}</div>
      </div>
      <div className={styles.infoGroup}>
        <div
          className={styles.infoValue}
          dangerouslySetInnerHTML={{ __html: parseMessage(context.message) }}
        />
      </div>
      <div className={styles.cardBtn}>
        <Button
          type="button"
          theme={context.cover.name}
          onClick={createOnClick}
        >
          {context.isCardOwner ? 'Create another one' : 'Create your own'}
        </Button>
      </div>
      <div className={styles.shareContainer}>
        <div className={styles.shareTitle}>Share this card</div>
        <div className={styles.shareBtns}>
          <a
            href={getFacebookShareUrl(mainShareUrl)}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={styles.shareBtn}
            aria-label="Share to Facebook"
          >
            <img
              src={getAssetUrl('images/icon-facebook.png')}
              alt="Facebook icon"
              className={styles.shareBtnImg}
            />
          </a>
          <a
            href={getTwitterShareUrl(mainShareUrl)}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={styles.shareBtn}
            aria-label="Share to Twitter"
          >
            <img
              src={getAssetUrl('images/icon-twitter.png')}
              alt="Twitter icon"
              className={styles.shareBtnImg}
            />
          </a>
          <button
            type="button"
            className={styles.shareBtn}
            onClick={copyOnClick}
            aria-label="Copy link"
          >
            <img
              src={getAssetUrl('images/icon-link.png')}
              alt="Link icon"
              className={styles.shareBtnImg}
            />
            {isCopied && <Tooltip>Copied!</Tooltip>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;

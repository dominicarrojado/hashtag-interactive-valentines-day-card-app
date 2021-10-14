import React, { useContext } from 'react';
import cn from 'classnames';
import { StoreContext } from '../lib/store';
import { CoverName } from '../lib/types';
import styles from './cardCover.module.css';
import bgColorStyles from '../styles/bgColor.module.css';

function CardCover() {
  const context = useContext(StoreContext);
  const { cover, isCardOpen } = context;
  const coverName = cover.name;
  const coverContainerClassName = cn(styles.cardCoverContainer, {
    [styles.cardOpen]: isCardOpen,
    [bgColorStyles.teal]: coverName === CoverName.TEAL,
    [bgColorStyles.red]: coverName === CoverName.RED,
    [bgColorStyles.pink]: coverName === CoverName.PINK,
    [bgColorStyles.black]: coverName === CoverName.BLACK,
    [bgColorStyles.purple]: coverName === CoverName.PURPLE,
  });
  const toggleBtnClassName = cn(styles.cardToggleBtn, {
    [bgColorStyles.btnPink]: coverName === CoverName.TEAL,
    [bgColorStyles.btnTeal]: coverName === CoverName.RED,
    [bgColorStyles.btnPinkDark]: coverName === CoverName.PINK,
    [bgColorStyles.btnGold]: coverName === CoverName.BLACK,
    [bgColorStyles.btnGreen]: coverName === CoverName.PURPLE,
  });
  const toggleOnClick = () => context.setIsCardOpen((value) => !value);

  return (
    <>
      <div className={coverContainerClassName} aria-expanded={isCardOpen}>
        <img
          src={cover.gif}
          alt={cover.imageAlt}
          className={styles.cardCoverImg}
          draggable={false}
        />
      </div>
      <button className={toggleBtnClassName} onClick={toggleOnClick}>
        {!isCardOpen ? 'Open' : 'Close'}
      </button>
    </>
  );
}

export default CardCover;

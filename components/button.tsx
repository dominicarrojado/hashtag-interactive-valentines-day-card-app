import React, { HTMLProps } from 'react';
import cn from 'classnames';
import { CoverName } from '../lib/types';
import styles from './button.module.css';
import bgColorStyles from '../styles/bgColor.module.css';

function Button({
  theme,
  children,
  ...props
}: HTMLProps<HTMLButtonElement> & {
  type: 'submit' | 'button';
  theme: CoverName;
}) {
  const btnClassName = cn(styles.btn, {
    [bgColorStyles.btnPink]: theme === CoverName.TEAL,
    [bgColorStyles.btnTeal]: theme === CoverName.RED,
    [bgColorStyles.btnPinkDark]: theme === CoverName.PINK,
    [bgColorStyles.btnGold]: theme === CoverName.BLACK,
    [bgColorStyles.btnGreen]: theme === CoverName.PURPLE,
  });

  return (
    <button {...props} className={btnClassName} data-theme={theme}>
      {children}
    </button>
  );
}

export default Button;

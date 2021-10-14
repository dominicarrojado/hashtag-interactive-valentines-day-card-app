import React, { ReactNode } from 'react';
import styles from './tooltip.module.css';

function Tooltip({ children }: { children: ReactNode }) {
  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltipText}>{children}</span>
    </div>
  );
}

export default Tooltip;

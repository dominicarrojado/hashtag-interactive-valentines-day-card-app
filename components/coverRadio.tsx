import React, { HTMLProps } from 'react';
import styles from './coverRadio.module.css';

function CoverRadio(props: HTMLProps<HTMLInputElement> & { image: string }) {
  return (
    <label className={styles.coverRadioContainer}>
      <input type="radio" className={styles.coverRadioInput} {...props} />
      <div
        className={styles.coverRadio}
        style={{ backgroundImage: `url(${props.image})` }}
      />
    </label>
  );
}

export default CoverRadio;

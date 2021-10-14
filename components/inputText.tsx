import React, { ForwardedRef, forwardRef, HTMLProps } from 'react';
import styles from './inputText.module.css';

const InputText = forwardRef(
  (
    { label, ...props }: HTMLProps<HTMLInputElement> & { label?: string },
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <label className={styles.inputContainer}>
      {label && <div className={styles.inputLabel}>{label}</div>}
      <input ref={ref} type="text" className={styles.inputText} {...props} />
    </label>
  )
);

InputText.displayName = 'InputText';

export default InputText;

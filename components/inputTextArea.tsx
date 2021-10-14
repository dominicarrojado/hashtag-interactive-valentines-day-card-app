import React, { ForwardedRef, forwardRef, HTMLProps } from 'react';
import cn from 'classnames';
import styles from './inputTextArea.module.css';

const InputTextArea = forwardRef(
  (
    props: HTMLProps<HTMLTextAreaElement>,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => (
    <div className={styles.inputContainer}>
      <textarea
        ref={ref}
        {...props}
        className={cn(styles.inputText, props.className)}
      />
    </div>
  )
);

InputTextArea.displayName = 'InputTextArea';

export default InputTextArea;

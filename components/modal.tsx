import React, { ReactNode, useEffect, useRef } from 'react';
import cn from 'classnames';
import { getRefValue } from '../lib/hooks';
import Portal from './portal';
import styles from './modal.module.css';

function Modal({
  isOpen,
  title,
  children,
  closeModal,
}: {
  isOpen: boolean;
  title: ReactNode;
  children: ReactNode;
  closeModal: () => void;
}) {
  const modalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bodyEl = document.body;

    if (isOpen) {
      bodyEl.classList.add(styles.modalOpen);

      // reset modal body scroll
      const modalBodyEl = getRefValue(modalBodyRef);

      if (modalBodyEl) {
        modalBodyEl.scrollTop = 0;
      }
    } else {
      bodyEl.classList.remove(styles.modalOpen);
    }

    return () => {
      bodyEl.classList.remove(styles.modalOpen);
    };
  }, [isOpen]);

  return (
    <Portal>
      <div
        className={cn(styles.modal, {
          [styles.show]: isOpen,
        })}
        aria-hidden={!isOpen}
        data-testid="modal"
      >
        <div className={styles.modalDialog}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h5 className={styles.modalTitle}>{title}</h5>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={closeModal}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div ref={modalBodyRef} className={styles.modalBody}>
              {children}
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(styles.modalBackdrop, {
          [styles.show]: isOpen,
        })}
        aria-hidden={!isOpen}
        data-testid="modal-backdrop"
      />
    </Portal>
  );
}

export default Modal;

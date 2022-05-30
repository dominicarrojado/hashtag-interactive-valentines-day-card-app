import React, { useContext } from 'react';
import { parseMessage } from '../lib/message';
import { trackEvent } from '../lib/google-analytics';
import { StoreContext } from '../lib/store';
import Modal from './modal';
import { GoogleAnalyticsEvent } from '../lib/types';
import { PROJECT_TITLE, TEMPLATE_MESSAGES } from '../lib/constants';
import styles from './modalMessages.module.css';

function ModalMessages() {
  const context = useContext(StoreContext);
  const title = (
    <>
      Can't think of a message? <br />
      Pick one from here!
    </>
  );
  const closeModal = () => context.setIsModalOpen(false);
  const messageOnClick = (message: string) => {
    context.setMessage(message);
    closeModal();

    trackEvent({
      event: GoogleAnalyticsEvent.CARD_TEMPLATE_MESSAGE_CLICK,
      projectTitle: PROJECT_TITLE,
      buttonText: message,
    });
  };

  return (
    <Modal isOpen={context.isModalOpen} title={title} closeModal={closeModal}>
      <div className={styles.messages}>
        {TEMPLATE_MESSAGES.map((message, idx) => (
          <button
            key={idx}
            className={styles.messageBtn}
            dangerouslySetInnerHTML={{ __html: parseMessage(message) }}
            onClick={() => messageOnClick(message)}
          />
        ))}
      </div>
    </Modal>
  );
}

export default ModalMessages;

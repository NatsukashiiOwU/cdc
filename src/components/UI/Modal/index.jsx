import React from 'react';
import cn from 'classnames';
import styles from './Modal.module.scss';

const Modal = ({
  children,
  className,
  isFull,
  isOpen,
}) => (
  <section className={cn(styles.modal,
    !isFull && styles.modal_small,
    isFull && styles.modal_full,
    isOpen && styles.modal_isOpen,
    className)}
  >
    <div className={styles.modal__content}>
      {children}
    </div>
  </section>
);

export default React.memo(Modal);

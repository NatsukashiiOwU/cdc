import React from 'react';
import cn from 'classnames';
import styles from './SmallModal.module.scss';

const SmallModal = ({ isOpen, children }) => (
  <div className={cn(styles.smallModal, isOpen && styles.smallModal_open)}>
    {children}
  </div>
);

export default React.memo(SmallModal);

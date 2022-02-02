/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styles from './BlockThanks.module.scss';

const BlockThanks = () => (
  <div className={styles.blockThanks}>
    <div className={styles.blockThanks__text}>
      <h3>Спасибо!</h3>
      <span>
        После одобрения вашего запроса вы получите реквизиты доступа к вашему КОД-КЛАССУ
        на <a href="mailto:angar.ulsu@gmail.com">angar.ulsu@gmail.com</a>
      </span>
    </div>
  </div>
);

export default React.memo(BlockThanks);

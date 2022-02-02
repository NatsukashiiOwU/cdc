/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';
import styles from './Adresses.module.scss';

const Adress = ({ className, adresses }) => (
  <div className={cn(className, styles.adresses)}>
    {
      adresses.map((address) => (
        <div className={styles.adresses__adress} key={address}>
          { address }
        </div>
      ))
    }
  </div>
);

export default Adress;

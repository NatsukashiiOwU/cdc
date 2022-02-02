/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';
import styles from './Search.module.scss';

// eslint-disable-next-line import/no-unresolved
import Sprite from '../../../assets/sprites/icons.svg';

const Search = ({ className, placeholder }) => (
  <div className={cn(styles.search, className)}>
    <input className={styles.search__input} type="search" placeholder={placeholder} />
    <div className={styles.search__circle}>
      <svg>
        <use href={`${Sprite}#search`} />
      </svg>
    </div>
  </div>
);

export default Search;

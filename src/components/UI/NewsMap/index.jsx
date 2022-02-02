/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import cn from 'classnames';
import styles from './NewsMap.module.scss';

const NewsMap = ({
  className, title, numbers, max,
}) => (
  <div className={cn(styles.newsMap, className)}>
    <div className={cn(styles.newsMap__text, styles.newsMap__text_title)}>
      {title}
    </div>
    <select className={styles.newsMap__select}>
      { numbers.map((number) => (
        <option value={number} key={number}>{number}</option>
      )) }
    </select>
    <div className={cn(styles.newsMap__text, styles.newsMap__text_number)}>
      1-5 из
      { ' ' }
      { max }
    </div>
    <div className={styles.newsMap__arrows}>
      <div className={cn(styles.newsMap__arrow, styles.newsMap__arrow_arrowPrev)} />
      <div
        className={
          cn(styles.newsMap__arrow, styles.newsMap__arrow_arrowNext, styles.newsMap__arrow_active)
        }
      />
    </div>
  </div>
);

export default memo(NewsMap);

/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';

import styles from './NewsMiniBanner.module.scss';

import star from '../../assets/images/star.png';
import banner_icon from '../../assets/images/News/Banner/iconBanner.png';

const NewsMiniBanner = ({
  imagePng, title, text, banner = false,
}) => (
  <section className={cn(styles.newsMiniBanner, !imagePng && styles.newsMiniBanner__gradient)} style={imagePng && { backgroundImage: `url(${imagePng})` }}>
    <div className={styles.newsMiniBanner__contentWrapper}>
      {banner ? (
        <div className={styles.newsMiniBanner__image}>
          <img src={banner_icon} alt={title} />
        </div>
      ) : (
        <div className={styles.newsMiniBanner__notImg}>
          <img src={star} alt={title} />
        </div>
      )}
      <div className={styles.newsMiniBanner__text}>
        {title ? (
          <h1>{title}</h1>
        ) : (
          <h1 className={styles.newsMiniBanner__textOpacity}>Название код класса</h1>
        )}
        {text ? (
          <span>{text}</span>
        ) : (
          <span className={styles.newsMiniBanner__textOpacity}>Название школы</span>
        )}
      </div>
    </div>
  </section>
);

export default NewsMiniBanner;

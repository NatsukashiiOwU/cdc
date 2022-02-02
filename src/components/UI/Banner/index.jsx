/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Banner.module.scss';

const Banner = ({ imagePng, imageWebp, title }) => (
  <section className={styles.banner}>
    <div className={styles.banner__image}>
      <picture>
        <source srcSet={imageWebp} type="image/webp" />
        <img src={imagePng} alt={title} />
      </picture>
    </div>
    <div className={styles.banner__title}>
      <div className={styles.banner__textWrapper}>
        <div className={styles.banner__text}>
          <h1>Код–классы</h1>
          <span>Ульяновского Государственного Университета</span>
        </div>
        <h2 className={styles.banner__pageTitle}>
          {title}
        </h2>
      </div>
    </div>

  </section>
);

export default React.memo(Banner);

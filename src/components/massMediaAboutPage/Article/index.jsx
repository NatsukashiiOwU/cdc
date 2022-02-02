import React from 'react';
import styles from './Article.module.scss';

import Vector from '../../../assets/images/SMI/Vector.png';

const Article = ({
  title,
  date,
  cityName,
  textTitle,
  textDescription,
  image,
}) => (
  <div className={styles.article}>
    <div className={styles.article__wrapper}>
      <div className={styles.article__titleWrapper}>
        <h3 className={styles.article__articleName}>
          {title}
        </h3>
        <div className={styles.article__date}>
          <img src={Vector} alt="vector" />
          <div className={styles.article__dateText}>
            {date}
          </div>
          |
          <div className={styles.article__cityName}>
            {cityName}
          </div>
        </div>
        <div className={styles.article__textTitle}>
          {textTitle}
        </div>
      </div>
      <div
        className={styles.article__textDescription}
        dangerouslySetInnerHTML={{ __html: textDescription }}
      />
    </div>
    <div className={styles.article__pictureWrapper}>
      {image.map((img) => (
        <div key={img.imgWebp} className={styles.article__pictureItem}>
          <picture>
            <source srcSet={img.imgWebp} type="image/webp" />
            <img src={img.imgPng} alt={title} />
          </picture>
        </div>
      ))}
    </div>
  </div>
);

export default React.memo(Article);

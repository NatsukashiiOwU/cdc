import React from 'react';
import Button from '../../UI/Button';
import Icon from '../../UI/Icon';
import styles from './CodeClass.module.scss';

import buttonImage from '../../../assets/images/listPage/CodeClass/buttomImage.png';

const CodeClass = ({
  imageWebp,
  imagePng,
  title,
  color,
  personImageWebp,
  personImagePng,
  personSurname,
  personName,
}) => (
  <div className={styles.codeClass}>
    <div className={styles.codeClass__image}>
      {color ? (
        <div className={styles.codeClass__svg} style={{ backgroundColor: color, width: '100%', height: '100%' }}>
          <Icon view="classes" className={styles.codeClass__svgItem} />
        </div>
      ) : (
        <picture>
          <source srcSet={imageWebp} type="image/webp" />
          <img src={imagePng} alt={title} />
        </picture>
      )}

    </div>
    <div className={styles.codeClass__description}>
      <div className={styles.codeClass__title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.codeClass__info}>
        <div className={styles.codeClass__person}>
          <div className={styles.codeClass__personImage}>
            <picture>
              <source srcSet={personImageWebp} type="image/webp" />
              <img src={personImagePng} alt={title} />
            </picture>
          </div>
          <div className={styles.codeClass__personName}>
            <div>{personSurname}</div>
            <div>{personName}</div>
          </div>
        </div>
        <div className={styles.codeClass__buttons}>
          <Button className={styles.codeClass__button} href="/code-classes/detail/news">
            подробнее
          </Button>
          <Button className={styles.codeClass__buttonContextMenu}>
            <img src={buttonImage} alt="context menu" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(CodeClass);

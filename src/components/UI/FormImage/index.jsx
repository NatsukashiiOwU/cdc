import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import Icon from '../Icon';
import styles from './FormImage.module.scss';

const FormImage = ({ photoWebp, photoPng, alt }) => {
  const [isShowButtonDelete, setIsShowButtonDelete] = useState(false);

  const showButton = useCallback(() => {
    setIsShowButtonDelete(true);
  }, []);

  const hideButton = useCallback(() => {
    setIsShowButtonDelete(false);
  }, []);

  return (
    <div
      onMouseOver={showButton}
      onFocus={showButton}
      onMouseOut={hideButton}
      onBlur={hideButton}
      className={styles.formImage}
    >
      <span className={cn(styles.formImage__delete,
        isShowButtonDelete && styles.formImage__delete_isShow)}
      >
        <Icon view="delImage" />
        <p>удалить</p>
      </span>
      <picture>
        <source srcSet={photoWebp} type="image/webp" />
        <img src={photoPng} alt={alt} />
      </picture>
    </div>
  );
};

export default React.memo(FormImage);

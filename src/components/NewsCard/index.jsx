import React from 'react';
import cn from 'classnames';
import styles from './NewsCard.module.scss';
import Icon from '../UI/Icon';
import SocialIcon from '../UI/SocialIcon';
import Button from '../UI/Button';

const ICON = ['facebook', 'vk', 'instagram', 'share'];

const NewsCard = ({
  className, title, area, date, description, image, smallImage, isSmall, auth, check,
}) => (
  <div className={cn(styles.newsCard, className, isSmall && styles.newsCard__isSmall)}>
    {!check ? (
      <img className={styles.newsCard__image} src={image} alt={title} />
    ) : (
      <div className={styles.newsCard__checkBlock}>
        <img className={styles.newsCard__checkImage} src={image} alt={title} />
        <div className={styles.newsCard__checkText}>
          <div className={cn(styles.newsCard__userAuthBlock, styles.newsCard__deleteIconBlock)}>
            <span className={cn(styles.newsCard__userAuthIcon, styles.newsCard__deleteIcon)}>
              &#65794;
            </span>
            <span className={cn(styles.newsCard__captionIcon, styles.newsCard__captionDeleteIcon)}>
              Удалить
            </span>
          </div>
          <h3>ваша новость на модерации</h3>
        </div>
      </div>
    )}
    <div className={styles.newsCard__content}>
      <div className={styles.newsCard__title}>
        { title }
      </div>
      {!isSmall && (
      <div className={styles.newsCard__areaWrapper}>
        <img className={styles.newsCard__iconImage} src={smallImage} alt={title} />
        <div className={styles.newsCard__area}>{ area }</div>
      </div>
      )}
      <div>
        <div className={styles.newsCard__textContent}>{ date }</div>
        <div className={styles.newsCard__textContent}>{ description }</div>
      </div>
      {(!auth && !check) && (
        <div className={styles.newsCard__buttonWrapper}>
          <Button className={styles.newsCard__button}>
            Читать
          </Button>
          <div className={styles.newsCard__icons}>
            {
              ICON.map((icon, index) => (
                ICON.length - 1 !== index ? (
                  <SocialIcon
                    key={+index}
                    inCircle
                    className={styles.newsCard__circleIcon}
                    view={icon}
                  />
                ) : (
                  <SocialIcon
                    key={+index}
                    className={styles.newsCard__circleIcon}
                    view={icon}
                  />
                )
              ))
            }
          </div>
        </div>
      )}
      {(auth && !check) && (
        <div className={styles.newsCard__iconsAuth}>
          <div className={styles.newsCard__userAuthBlock}>
            <Icon className={styles.newsCard__userAuthIcon} view="editing" />
            <span className={styles.newsCard__captionIcon}>Редактировать</span>
          </div>
          <div className={styles.newsCard__userAuthBlock}>
            <Icon className={styles.newsCard__userAuthIcon} view="delete" />
            <span className={styles.newsCard__captionIcon}>Удалить</span>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default React.memo(NewsCard);

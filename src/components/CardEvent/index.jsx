import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import Icon from '../UI/SocialIcon';

const CardEvent = ({
  className,
  title,
  description,
  image,
  area,
  socialLinks,
  members,
  isSmall,
  auth,
}) => (
  <div className={cn(styles.cardEvent, className, isSmall && styles.cardEvent__isSmall)}>
    <img className={styles.cardEvent__image} src={image} alt="eventImage" />
    <div className={styles.cardEvent__content}>
      <div className={styles.cardEvent__title}>
        { title }
      </div>
      {!isSmall && (
        <div className={styles.cardEvent__areaWrapper}>
          <img className={styles.cardEvent__iconImage} src={area.image} alt="icon" />
          <div className={styles.cardEvent__area}>{area.text}</div>
        </div>
      )}
      <div className={styles.cardEvent__textContent}>{description}</div>
      <div className={cn(styles.cardEvent__interactive, auth && styles.cardEvent__authInteractive)}>
        <div className={styles.cardEvent__members}>
          <span className={styles.cardEvent__membersText}>участников</span>
          <span className={styles.cardEvent__membersValue}>{members}</span>
        </div>
        {!auth ? (
          <div className={styles.cardEvent__icons}>
            <Icon inCircle className={styles.cardEvent__circleIcon} link={socialLinks.facebook} view="facebook" />
            <Icon inCircle className={styles.cardEvent__circleIcon} link={socialLinks.vk} view="vk" />
            <Icon inCircle className={styles.cardEvent__circleIcon} link={socialLinks.instagram} view="instagram" />
            <Icon className={styles.cardEvent__circleIcon} view="share" />
          </div>
        ) : (
          <div className={styles.cardEvent__iconsAuth}>
            <div className={styles.cardEvent__userAuthBlock}>
              <Icon className={styles.cardEvent__userAuthIcon} title="Редактировать" view="editing" />
              <span className={styles.cardEvent__captionIcon}>Редактировать</span>
            </div>
            <div className={styles.cardEvent__userAuthBlock}>
              <Icon className={styles.cardEvent__userAuthIcon} title="Удалить" view="delete" />
              <span className={styles.cardEvent__captionIcon}>Удалить</span>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default React.memo(CardEvent);

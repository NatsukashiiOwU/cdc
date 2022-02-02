import React, { memo } from 'react';
import cn from 'classnames';

import styles from './profileUser.module.scss';

import Button from '../../../../components/UI/Button';
import Icon from '../../../../components/UI/Icon';

import avatar from '../../../../assets/images/Profile/avatar.png';
import cover from '../../../../assets/images/Profile/cover.png';
import logo from '../../../../assets/images/Profile/logo-profile.png';

const profileUser = () => (
  <form id="profileUser" className={styles.profileUser}>
    <div className={cn(styles.profileUser__block, styles.profileUser__block_between)}>
      <h4 className={styles.profileUser__blockTitle}>Название</h4>
      <input className={cn(styles.profileUser__nameInput, styles.profileUser__input)} placeholder="Центр развития сообществ Код классов" type="text" />
    </div>
    <div className={cn(styles.profileUser__block, styles.profileUser__block_between)}>
      <h4 className={styles.profileUser__blockTitle}>Адрес код класса</h4>
      <div className={styles.profileUser__blocksSelect}>
        <div className={styles.profileUser__itemSelect}>
          <input className={cn(styles.profileUser__nameInput, styles.profileUser__input)} placeholder="Ульяновская область" type="text" />
          <Icon className={styles.profileUser__selectArrow} view="arrow" />
        </div>
        <div className={styles.profileUser__itemSelect}>
          <input className={cn(styles.profileUser__nameInput, styles.profileUser__input)} placeholder="г. Ульяновск" type="text" />
          <Icon className={styles.profileUser__selectArrow} view="arrow" />
        </div>
        <div className={styles.profileUser__itemSelect}>
          <input className={cn(styles.profileUser__nameInput, styles.profileUser__input)} placeholder="г. Ульяновск, ул. 12 Сентября, д. 9, каб. 208" type="text" />
          <Icon className={styles.profileUser__selectArrow} view="arrow" />
        </div>
      </div>
    </div>
    <div className={cn(styles.profileUser__block, styles.profileUser__block_between)}>
      <h4 className={cn(styles.profileUser__blockTitle, styles.profileUser__blockTitle_br)}>
        Руководитель проекта
      </h4>
      <input className={cn(styles.profileUser__nameInput, styles.profileUser__input)} placeholder="John Tutor-" type="text" />
    </div>
    <div className={styles.profileUser__block}>
      <h4 className={cn(styles.profileUser__blockTitle, styles.profileUser__blockTitle_mt)}>
        Аватар:
      </h4>
      <img className={cn(styles.profileUser__blockImg, styles.profileUser__blockImgAvatar)} src={avatar} alt="Аватар" />
    </div>
    <div className={styles.profileUser__block}>
      <h4 className={styles.profileUser__blockTitle}>Обложка:</h4>
      <img className={styles.profileUser__blockImg} src={cover} alt="Обложка" />
    </div>
    <div className={styles.profileUser__block}>
      <h4 className={styles.profileUser__blockTitle}>Логотип / эмблема / герб код класса:</h4>
      <img className={styles.profileUser__blockImg} src={logo} alt="Логотип" />
    </div>
    <div className={styles.profileUser__blockSubmit}>
      <Button className={styles.profileUser__submitForm} type="profile">
        ИЗМЕНИТЬ ПРОФИЛЬ
      </Button>
    </div>
  </form>
);

export default memo(profileUser);

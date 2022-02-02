import React, { memo } from 'react';
import cn from 'classnames';

import styles from './profile.module.scss';

import Button from '../../../../components/UI/Button';
import Icon from '../../../../components/UI/Icon';

const Profile = () => (
  <form id="profile" className={styles.profile}>
    <div className={styles.profile__block}>
      <h4 className={styles.profile__blockTitle}>Название код класса *:</h4>
      <input className={cn(styles.profile__nameInput, styles.profile__input)} placeholder="Ведите назание код класса (Напимер: “Совята ...)" type="text" />
    </div>
    <div className={styles.profile__block}>
      <h4 className={styles.profile__blockTitle}>Название школы *:</h4>
      <textarea className={cn(styles.profile__contentInput, styles.profile__input)} placeholder="Ведите назание школы (Напимер: МБОУ «Средняя школа №72 с углубленным изучением отдельных  ...)" type="text" />
    </div>
    <div className={styles.profile__block}>
      <h4 className={styles.profile__blockTitle}>Адрес код класса *:</h4>
      <div className={styles.profile__blocksSelect}>
        <div className={styles.profile__itemSelect}>
          <input className={cn(styles.profile__nameInput, styles.profile__input)} placeholder="Регион (субъект федерации)" type="text" />
          <Icon className={styles.profile__selectArrow} view="arrow" />
        </div>
        <div className={styles.profile__itemSelect}>
          <input className={cn(styles.profile__nameInput, styles.profile__input)} placeholder="Город" type="text" />
          <Icon className={styles.profile__selectArrow} view="arrow" />
        </div>
        <div className={styles.profile__itemSelect}>
          <input className={cn(styles.profile__nameInput, styles.profile__input)} placeholder="Адрес" type="text" />
          <Icon className={styles.profile__selectArrow} view="arrow" />
        </div>
      </div>
    </div>
    <div className={styles.profile__block}>
      <h4 className={styles.profile__blockTitle}>Руководитель код класса *:</h4>
      <input className={cn(styles.profile__nameInput, styles.profile__input)} placeholder="ФИО" type="text" />
    </div>
    <div className={styles.profile__block}>
      <h4 className={styles.profile__blockTitle}>Аватар *:</h4>
      <Button type="file" className={styles.profile__addImg}>
        выбрать фото
      </Button>
    </div>
    <div className={styles.profile__block}>
      <h4 className={styles.profile__blockTitle}>Обложка *:</h4>
      <Button type="file" className={styles.profile__addImg}>
        выбрать фото
      </Button>
    </div>
    <div className={styles.profile__block}>
      <h4 className={styles.profile__blockTitle}>Логотип / эмблема / герб код класса *:</h4>
      <Button type="file" className={styles.profile__addImg}>
        выбрать фото
      </Button>
    </div>
    <div className={styles.profile__blockSubmit}>
      <Button className={styles.profile__submitForm} type="profile">
        ИЗМЕНИТЬ ПРОФИЛЬ
      </Button>
    </div>
    <p className={styles.profile__subTitleForm}> * Обязательное поле ввода</p>
  </form>
);

export default memo(Profile);

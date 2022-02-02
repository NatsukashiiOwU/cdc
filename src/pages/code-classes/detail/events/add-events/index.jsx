import React, { memo } from 'react';
import cn from 'classnames';

import Button from '../../../../../components/UI/Button';
import Icon from '../../../../../components/UI/Icon';

import styles from './AddEvents.module.scss';

const AddEvents = () => (
  <form id="addEvents" className={styles.addEvents}>
    <div className={styles.addEvents__block}>
      <h4 className={styles.addEvents__blockTitle}>Дата начала *:</h4>
      <div className={styles.addEvents__addDate}>
        <input placeholder="20.09.2021" className={cn(styles.addEvents__dateInput, styles.addEvents__input)} type="text" />
        <Icon className={styles.addEvents__dateIcon} view="calendar" />
      </div>
    </div>
    <div className={styles.addEvents__block}>
      <h4 className={styles.addEvents__blockTitle}>Дата завершения :</h4>
      <div className={styles.addEvents__addDate}>
        <input placeholder="6.10.2021" className={cn(styles.addEvents__dateInput, styles.addEvents__input)} type="text" />
        <Icon className={styles.addEvents__dateIcon} view="calendar" />
      </div>
    </div>
    <div className={styles.addEvents__block}>
      <h4 className={styles.addEvents__blockTitle}>Название *:</h4>
      <input className={cn(styles.addEvents__nameInput, styles.addEvents__input)} placeholder="Ведите назание мероприятия (Напимер: Открытый урок ...)" type="text" />
    </div>
    <div className={styles.addEvents__block}>
      <h4 className={styles.addEvents__blockTitle}>Число участников *:</h4>
      <input className={cn(styles.addEvents__dateInput, styles.addEvents__input)} type="text" />
    </div>
    <div className={styles.addEvents__block}>
      <h4 className={styles.addEvents__blockTitle}>Добавить обложку *:</h4>
      <Button type="file" className={styles.addEvents__addImg}>
        выбрать фото
      </Button>
    </div>
    <div className={styles.addEvents__blockSubmit}>
      <Button className={styles.addEvents__submitForm} type="addEvents">
        ОПУБЛИКОВАТЬ
      </Button>
    </div>
    <p className={styles.addEvents__subTitleForm}> * Обязательное поле ввода</p>
  </form>
);

export default memo(AddEvents);

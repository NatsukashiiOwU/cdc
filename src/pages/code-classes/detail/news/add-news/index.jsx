import React, { memo, useCallback, useState } from 'react';
import cn from 'classnames';

import axios from 'axios';

import { useSelector } from 'react-redux';
import authHeader from '../../../../../services/auth-header';

import styles from './AddNews.module.scss';

import Icon from '../../../../../components/UI/Icon';
import Button from '../../../../../components/UI/Button';

const AddNews = () => {
  // eslint-disable-next-line camelcase
  const { user } = useSelector((state) => state.auth);

  const [date, setDate] = useState('');
  const [article, setArticle] = useState('');
  const [contents, setContents] = useState('');
  const [banner, setBanner] = useState('');
  const [pictures, setPictures] = useState('');

  const enterDate = useCallback((e) => {
    setDate(e.target.value);
  }, [date]);

  const enterArticle = useCallback((e) => {
    setArticle(e.target.value);
  }, [article]);

  const enterContents = useCallback((e) => {
    setContents(e.target.value);
  }, [contents]);

  const enterBanner = useCallback((e) => {
    setBanner(e.target.value);
  }, [banner]);

  const enterPictures = useCallback((e) => {
    setPictures(e.target.value);
  }, [pictures]);

  // eslint-disable-next-line camelcase
  const { cdc_id } = user;

  const url = 'http://localhost:8080/api/news';
  const data = {
    cdc_id, date, article, contents, banner, pictures,
  };

  /* async function postData() { // TODO fix post rerender
    try {
      const response = await fetch(url, {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: {
          headers: JSON.stringify(authHeader()),
        },
      });
      const json = await response.json();
      console.log('Успех:', JSON.stringify(json));
    } catch (error) {
      console.error('Ошибка:', error);
    }
  } */

  const postData = () => axios.post(url, data, { headers: authHeader() });

  return (
    <form id="addnews" className={styles.addNews}>
      <div className={styles.addNews__block}>
        <h4 className={styles.addNews__blockTitle}>Дата *:</h4>
        <div className={styles.addNews__addDate}>
          <input className={cn(styles.addNews__dateInput, styles.addNews__input)} type="text" onChange={enterDate} />
          <Icon className={styles.addNews__dateIcon} view="calendar" />
        </div>
      </div>
      <div className={styles.addNews__block}>
        <h4 className={styles.addNews__blockTitle}>Название *:</h4>
        <input
          className={cn(styles.addNews__nameInput, styles.addNews__input)}
          onChange={enterArticle}
          placeholder="Ведите назание мероприятия (Напимер: Открытый урок ...)"
          type="text"
        />
      </div>
      <div className={styles.addNews__block}>
        <h4 className={styles.addNews__blockTitle}>Содержание *:</h4>
        <textarea className={cn(styles.addNews__contentInput, styles.addNews__input)} onChange={enterContents} type="text" />
      </div>
      <div className={styles.addNews__block}>
        <h4 className={styles.addNews__blockTitle}>Обложка *:</h4>
        <Button type="file" className={styles.addNews__addImg} onChange={enterBanner}>
          выбрать фото
        </Button>
      </div>
      <div className={styles.addNews__block}>
        <h4 className={styles.addNews__blockTitle}>Добавить фото *:</h4>
        <Button type="file" className={styles.addNews__addImg} onChange={enterPictures}>
          выбрать фото
        </Button>
      </div>
      <div className={styles.addNews__blockSubmit}>
        {/* eslint-disable-next-line no-sequences */}
        <Button onClick={(e) => (e.preventDefault(), postData())} className={styles.addNews__submitForm} type="addnews">
          ОТПРАВИТЬ НА МОДЕРАЦИЮ
        </Button>
      </div>
      <p className={styles.addNews__subTitleForm}> * Обязательное поле ввода</p>
    </form>
  );
};

export default memo(AddNews);

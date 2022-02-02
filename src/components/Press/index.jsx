import React, { memo, useState } from 'react';
import cn from 'classnames';
import styles from './Press.module.scss';
import Button from '../UI/Button';
import Icon from '../UI/Icon';

const Press = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  return (
    <div className={styles.press}>
      <div className={styles.press__title}>
        Редактирование публикации, выступления и упоминания в средствах массовой информации.
      </div>
      <input
        type="text"
        className={styles.press__input}
        placeholder="Название СМИ (*):"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <input
        type="text"
        className={styles.press__input}
        placeholder="Заголовок статьи, название передачи (*):"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <input
        type="text"
        className={styles.press__input}
        placeholder="URL для Интернет-публикации :"
        onChange={(event) => setUrl(event.target.value)}
        value={url}
      />
      <input
        type="text"
        className={styles.press__input}
        placeholder="Краткое описание:"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />
      <div className={styles.press__dateWrapper}>
        <input
          type="text"
          className={cn(styles.press__input, styles.press__input_date)}
          placeholder="Дата:"
          onChange={(event) => setDate(event.target.value)}
          value={date}
        />
        <Icon className={styles.press__icon} view="calendar" />
      </div>
      <Button className={styles.press__button}>ОПУБЛИКОВАТЬ СТАТЬЮ</Button>
    </div>
  );
};

export default memo(Press);

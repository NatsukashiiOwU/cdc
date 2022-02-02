import React, { memo, useState, useCallback } from 'react';
import cn from 'classnames';
import Button from '../UI/Button';
import SmallModal from '../UI/SmallModal';
import NewsMap from '../UI/NewsMap';
import Persone from './Persone';
import styles from './Management.module.scss';

const CONTENT = [
  {
    codeClass: 'МБОУ СОШ №1 МО "Барышский район"',
    director: 'Толстик Татьяна Викторовна',
    email: ' sosh_inform@mail.ru',
  },
  {
    codeClass: 'МБОУ СОШ №1 МО "Барышский район"',
    director: 'Толстик Татьяна Викторовна',
    email: ' sosh_inform@mail.ru',
  },
  {
    codeClass: 'МБОУ СОШ №1 МО "Барышский район"',
    director: 'Толстик Татьяна Викторовна',
    email: ' sosh_inform@mail.ru',
  },
  {
    codeClass: 'МБОУ СОШ №1 МО "Барышский район"',
    director: 'Толстик Татьяна Викторовна',
    email: ' sosh_inform@mail.ru',
  },
  {
    codeClass: 'МБОУ СОШ №1 МО "Барышский район"',
    director: 'Толстик Татьяна Викторовна',
    email: ' sosh_inform@mail.ru',
  },
  {
    codeClass: 'МБОУ СОШ №1 МО "Барышский район"',
    director: 'Толстик Татьяна Викторовна',
    email: ' sosh_inform@mail.ru',
  },
];
const NUMBERS = [1, 10];

const Management = () => {
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpenModal(false);
  }, [isOpenModal]);

  return (
    <>
      <div className={cn(styles.management, isMailOpen && styles.management_letterOpen)}>
        <Button className={styles.management__button} onClick={() => setIsMailOpen(true)}>
          ОТПРАВИТЬ ПИСЬМО УЧАСТНИКАМ
        </Button>
        <div className={cn(styles.management__letter,
          isMailOpen && styles.management__letter_open)}
        >
          <div className={styles.management__letterTitle}>
            Отправка письма партнерам
          </div>
          <input
            type="text"
            className={styles.management__input}
            placeholder="Тема письма:"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
          <textarea
            className={cn(styles.management__input, styles.management__input_content)}
            placeholder="Текст письма: "
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <div className={styles.management__addFiles}>
            Файлы:
            <Button type="file" className={styles.management__buttonFile}>выбрать файл</Button>
            <Button type="file" className={styles.management__buttonFile}>выбрать файл</Button>
            <Button type="file" className={styles.management__buttonFile}>выбрать файл</Button>
          </div>
        </div>
        <div className={styles.management__content}>
          <Persone isFirst codeClass="Код классы" director="Руководитель" email="E-mail" />
          {CONTENT.map((persone) => (
            <Persone
              codeClass={persone.codeClass}
              director={persone.director}
              email={persone.email}
              isDelete={isOpenModal}
              setIsDelete={setIsOpenModal}
            />
          ))}
        </div>
        <NewsMap className={styles.management__map} title="Мероприятий Код классов на странице" numbers={NUMBERS} max="13" />

      </div>
      <SmallModal isOpen={isOpenModal}>
        <div className={styles.management__modalContent}>
          <h3>Вы</h3>
          <p>Действительно хотите удалить КОД-КЛАСС: МБОО Старомайнская СШ №1 Старая Майна</p>
          <div className={styles.management__modalButtons}>
            <Button className={styles.management__modalButton} onClick={closeModal}>нет</Button>
            <Button className={styles.management__modalButton}>да</Button>
          </div>
        </div>
      </SmallModal>
    </>
  );
};

export default memo(Management);

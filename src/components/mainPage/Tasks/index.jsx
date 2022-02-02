import React from 'react';
import styles from './Tasks.module.scss';

const TasksContent = [
  {
    id: 1,
    content: 'Создание и развитие активно работающей сети КОД-КЛАССОВ',
  },
  {
    id: 2,
    content: 'Обучение базовым навыкам программирования и технологического предпринимательства.',
  },
  {
    id: 3,
    content: 'Создание устойчивой системы целевой предпрофильной подготовки школьников',
  },
  {
    id: 4,
    content: 'Знакомство школьников с возможностями построения карьеры в ИТ',
  },
  {
    id: 5,
    content: 'Отбор и подготовка профессионально ориентированных абитуриентов для УлГУ',
  },
  {
    id: 6,
    content: 'Повышение квалификации учителей информатики',
  },
];

const Tasks = () => (
  <div className={styles.tasks}>
    <div className={styles.tasks__container}>
      <div className={styles.tasks__title}>
        <h2>Задачи:</h2>
      </div>
      <ul className={styles.tasks__list}>
        {TasksContent.map((item) => (
          <li className={styles.tasks__listItem} key={item.id}>
            <span className={styles.tasks__listItem_number}>{item.id}</span>
            <p className={styles.tasks__listItem_content}>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Tasks;

/* eslint-disable react/prop-types */
import React, { memo } from 'react';

import styles from './news.module.scss';

import img from '../../../../assets/images/NewsPage/img.png';

import AddCard from '../../../../components/AddCard';
import NewsCard from '../../../../components/NewsCard';
import NewsMap from '../../../../components/UI/NewsMap';

const DATA_CARD = [
  {
    title: 'Мастер-класс «Основы проектирования нейронных сетей»',
    date: '22 Апр, 2021',
    auth: true,
    image: img,
    description: '21 апреля в школе №1 города Барыша состоялся День открытых дверей с участием представителей УлГУ. Ученики  10 класса […]',
  },
  {
    title: 'Мастер-класс «Основы проектирования нейронных сетей»',
    date: '22 Апр, 2021',
    image: img,
    auth: false,
    description: '21 апреля в школе №1 города Барыша состоялся День открытых дверей с участием представителей УлГУ. Ученики  10 класса […]',
  },
  {
    title: 'Мастер-класс «Основы проектирования нейронных сетей»',
    date: '22 Апр, 2021',
    image: img,
    auth: false,
    check: true,
    description: '21 апреля в школе №1 города Барыша состоялся День открытых дверей с участием представителей УлГУ. Ученики  10 класса […]',
  },
];

const NUMBERS = [1, 10];

const News = ({ isAuth = true }) => (
  <>
    {isAuth && (
      <AddCard className={styles.news__addCard} exact title="+ Добавить новость" href="/code-classes/detail/news/add-news" />
    )}
    {DATA_CARD.map((item) => (
      <NewsCard
        key={item.id}
        isSmall
        auth={item.auth}
        check={item.check}
        className={styles.news__newsCard}
        title={item.title}
        date={item.date}
        image={img}
        description={item.description}
      />
    ))}
    <NewsMap className={styles.news__newsMap} title="Новостей Код классов на странице" numbers={NUMBERS} max="13" />
  </>
);

export default memo(News);

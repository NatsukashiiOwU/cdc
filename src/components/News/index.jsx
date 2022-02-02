import cn from 'classnames';
import { Link } from 'react-router-dom';
import React from 'react';
import Image from '../../assets/images/news_image.png';
import Icon from '../UI/Icon';
import styles from './News.module.scss';

const DATA = [
  {
    id: 0,
    img: Image,
    date: '20 апреля 2021',
    description: 'В Барыше прошёл день открытых дверей Центра ДНК',
    src: '',
  },
  {
    id: 1,
    img: Image,
    date: '20 апреля 2021',
    description: 'В Барыше прошёл день открытых дверей Центра ДНК',
    src: '',
  },
  {
    id: 2,
    img: Image,
    date: '20 апреля 2021',
    description: 'В Барыше прошёл день открытых дверей Центра ДНК',
    src: '',
  },
];

const News = () => (
  <section className={styles.news}>
    <div className={styles.news__newsWrapper}>
      <div className={styles.news__header}>
        <div className={styles.news__title}>
          Новости
        </div>
        <button type="button" className={cn(styles.news__button, styles.news__button_headerButton)}>
          Все новости
        </button>
      </div>
      <div className={styles.news__main}>
        <div className={styles.news__mainItem}>
          <div className={styles.news__mainItemPic}>
            <img src={Image} alt="news" />
            <div className={cn(styles.news__picDesc, styles.news__picDesc_main)}>
              <div className={styles.news__picDescAvatar}>
                <img src={Image} alt="news" />
              </div>
              <div className={styles.news__picDescText}>
                МКОУ Уренокарлинская СШ село Урено&nbsp;-&nbsp;карлинское
                МКОУ Уренокарлинская СШ село Урено&nbsp;-&nbsp;карлинское
                МКОУ Уренокарлинская СШ село Урено&nbsp;-&nbsp;карлинское
              </div>
            </div>
          </div>
          <div className={styles.news__mainItemDescription}>
            Центр ДНК им. Ж.И. Алферова продолжает цикл мероприятий в рамках Международной акции
            «ALL DIGITAL WEEK-2021»
          </div>
          <div className={styles.news__mainItemAdditionally}>
            <div className={styles.news__dateWrapper}>
              <div className={styles.news__dateIcon}>
                <Icon view="date" />
              </div>
              <div className={styles.news__date}>
                20 апреля 2021
              </div>
            </div>
            <Link to="/news" className={cn(styles.news__button, styles.news__button_itemButton)}>
              Читать
            </Link>
          </div>
        </div>
        <div className={styles.news__semiItemsWrapper}>
          {DATA.map((item) => (
            <div key={item.id} className={styles.news__semiItem}>
              <div className={styles.news__semiItemPic}>
                <img src={item.img} alt="news" />
                <div className={cn(styles.news__picDesc, styles.news__picDesc_semi)}>
                  <div className={styles.news__picDescAvatar}>
                    <img src={Image} alt="news" />
                  </div>
                  <div className={styles.news__picDescText}>
                    МКОУ Уренокарлинская СШ село Урено&nbsp;-&nbsp;карлинское
                  </div>
                </div>
              </div>
              <div className={styles.news__semiItemContent}>
                <div>
                  <div className={styles.news__dateWrapper}>
                    <div className={styles.news__dateIcon}>
                      <Icon view="date" />
                    </div>
                    <div className={styles.news__date}>
                      {item.date}
                    </div>
                  </div>
                  <div className={styles.news__semiItemDescription}>
                    {item.description}
                  </div>
                </div>
                <Link to="/news" className={cn(styles.news__button, styles.news__button_itemButton)}>
                  Читать
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(News);

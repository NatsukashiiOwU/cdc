/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import styles from './Events.module.scss';

import eventImage_webp from '../../../assets/images/Events/eventImage.webp';
import eventImage_png from '../../../assets/images/Events/eventImage.png';
import img1_webp from '../../../assets/images/Events/img1.webp';
import img1_png from '../../../assets/images/Events/img1.png';
import img2_webp from '../../../assets/images/Events/img2.webp';
import img2_png from '../../../assets/images/Events/img2.png';
import img3_webp from '../../../assets/images/Events/img3.webp';
import img3_png from '../../../assets/images/Events/img3.png';
import logo_webp from '../../../assets/images/Events/logo.webp';
import logo_png from '../../../assets/images/Events/logo.png';

const EVENTS = [
  {
    dateNumber: '31–23',
    dateMonth_one: 'апреля',
    dateMonth_two: 'мая',
    imgWebp: img1_webp,
    imgPng: img1_png,
    logoWebp: logo_webp,
    logoPng: logo_png,
    title: 'МКОУ Уренокарлинская СШ село Урено-карлинское',
    description: 'Центр ДНК им. Ж.И. Алферова продолжает цикл мероприятий в рамках Международной акции «ALL DIGITAL WEEK-2021»',
  },
  {
    dateNumber: '31–23',
    dateMonth_one: 'апреля',
    dateMonth_two: 'мая',
    imgWebp: img2_webp,
    imgPng: img2_png,
    logoWebp: logo_webp,
    logoPng: logo_png,
    title: 'МКОУ Уренокарлинская СШ село Урено-карлинское',
    description: 'Центр ДНК им. Ж.И. Алферова продолжает цикл мероприятий в рамках Международной акции «ALL DIGITAL WEEK-2021»',
  },
  {
    dateNumber: '31–23',
    dateMonth_one: 'апреля',
    dateMonth_two: 'мая',
    imgWebp: img3_webp,
    imgPng: img3_png,
    logoWebp: logo_webp,
    logoPng: logo_png,
    title: 'МКОУ Уренокарлинская СШ село Урено-карлинское',
    description: 'Центр ДНК им. Ж.И. Алферова продолжает цикл мероприятий в рамках Международной акции «ALL DIGITAL WEEK-2021»',
  },
];

const Events = () => (
  <section className={styles.events}>
    <div className={styles.events__desc}>
      <div className={styles.events__titleBlock}>
        <h3>
          Мероприятия
        </h3>
        <span className={styles.events__text}>
          Полный список мероприятий предаставлен по ссылке
        </span>
      </div>
      <div className={styles.events__buttonWrap}>
        <Button className={styles.events__button}>
          все мероприятия
        </Button>
      </div>
    </div>
    <div className={styles.events__wrapper}>
      <div className={styles.events__blockImage}>
        <picture>
          <source srcSet={eventImage_webp} type="image/webp" />
          <img src={eventImage_png} alt="описание" />
        </picture>
      </div>
      <div className={styles.events__eventList}>
        {EVENTS.map((item) => (
          <Link to="/events" className={styles.events__item} key={item.imgWebp}>
            <div className={styles.events__itemImage}>
              <picture>
                <source srcSet={item.imgWebp} type="image/webp" />
                <img src={item.imgPng} alt={item.title} />
              </picture>
            </div>
            <div className={styles.events__itemDesc}>
              <div className={styles.events__itemDate}>
                <div className={styles.events__ItemDateNumber}>
                  {item.dateNumber}
                </div>
                <div className={styles.events__itemDateMonths}>
                  <div>{item.dateMonth_one}</div>
                  <div>{item.dateMonth_two}</div>
                </div>
              </div>
              <div className={styles.events__itemTitleBlock}>
                <div className={styles.events__itemLogo}>
                  <picture>
                    <source srcSet={item.logoWebp} type="image/webp" />
                    <img src={item.logoPng} alt="описание" />
                  </picture>
                </div>
                <div className={styles.events__itemTitle}>
                  <span>{item.title}</span>
                </div>
              </div>
              <div className={styles.events__itemDescription}>
                <span>{item.description}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <div className={styles.events__sliderButtons}>
      <div className={styles.events__sliderButtonsWrapper}>
        <Button className={styles.events__sliderButtonUp} />
        <Button className={styles.events__sliderButtonDown} />
      </div>
    </div>
  </section>
);

export default React.memo(Events);

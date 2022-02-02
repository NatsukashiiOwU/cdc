import React from 'react';
import styles from './AboutAs.module.scss';
import image from '../../../assets/images/dod.png';
import imgMac from '../../../assets/images/MacbookPro.png';

const content2 = 'С 2015 года при Ульяновском государственном университете создана сеть Код-классов (клубов по программированию) более чем в 50 партнерских школах региона.';
const content1 = 'На базе Код-классов школ-партнеров УлГУ проведено более 1500 мероприятий для более чем 80000 участников При финансовой поддержке Фонда развития ИТ УО и университета на базе ЦИО создан и работает ресурсный центр УлГУ, оснащенный самым современным оборудованием для занятий со школьниками и студентами ';
const content3 = 'За счет средств Фонда финансовую поддержку получают лучшие руководители Код-классов региона Мероприятия Центра при поддержке пресс-службы УлГУ, Корпорации развития ИТ и Правительства УО получают широкое освещение в СМИ – более 400 публикаций за 5 лет';
const content4 = 'Благодаря, в том числе, нашей деятельности, количество школьников, сдающих ЕГЭ по информатике, за последние 3 года увеличилось в 1,5 раза, а сдающих ОГЭ – в 1,7 раза!';
const AboutAs = () => (
  <div className={styles.aboutAs}>
    <div className={styles.aboutAs__image}>
      <img className={styles.aboutAs__image_duddle} src={image} alt="#" />
    </div>
    <div className={styles.aboutAs__contentBlock}>
      <div className={styles.aboutAs__content}>
        <h3 className={styles.aboutAs__contentTitle}>О нас</h3>
        <p className={styles.aboutAs__text}>{content2}</p>
        <h3 className={styles.aboutAs__contentTitle}>Факты:</h3>
        <p className={styles.aboutAs__text}>{content1}</p>
        <p className={styles.aboutAs__text}>{content3}</p>
        <p className={styles.aboutAs__text}>{content4}</p>
      </div>
      <div className={styles.aboutAs__contentImage}>
        <img src={imgMac} alt="#" />
      </div>
    </div>
  </div>
);

export default AboutAs;

import React from 'react';
import Banner from '../../components/UI/Banner';

import BannerPng from '../../assets/images/SMI/Banner/Banner.png';
import BannerWebp from '../../assets/images/SMI/Banner/Banner.webp';
import NewsMap from '../../components/UI/NewsMap';

import Article from '../../components/massMediaAboutPage/Article';
import Adresses from '../../components/UI/Adresses';
import data from '../../components/massMediaAboutPage/Article/data';

import styles from './MassMediaAboutPage.module.scss';

const NUMBERS = [1, 10];

const massMediaAboutPage = () => (
  <>
    <Banner
      imagePng={BannerPng}
      imageWebp={BannerWebp}
      title="СМИ о нас"
    />
    <section className={styles.smiAboutUs}>
      <Adresses adresses={['Главная', 'СМИ О НАС']} className={styles.smiAboutUs__smiAboutUsMap} />

      <div className={styles.smiAboutUs__wrapper}>
        {data.map((item) => (
          <Article
            title={item.name}
            date={item.date}
            cityName={item.city}
            textTitle={item.title}
            textDescription={item.description}
            image={item.image}
          />
        ))}
      </div>
      <NewsMap title="Статей на странице" numbers={NUMBERS} max="13" className={styles.smiAboutUsMap__smiAboutUsMap} />
    </section>
  </>
);

export default React.memo(massMediaAboutPage);

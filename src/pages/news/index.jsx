import React from 'react';
import Adresses from '../../components/UI/Adresses';
import Search from '../../components/UI/Search';
import NewsCard from '../../components/NewsCard';
import NewsMap from '../../components/UI/NewsMap';
import Banner from '../../components/UI/Banner';

import BannerPng from '../../assets/images/News/Banner/Banner.png';
import img from '../../assets/images/NewsPage/img.png';
import img2 from '../../assets/images/NewsPage/img2.png';

import styles from './News.module.scss';

const News = () => (
  <>
    <Banner
      imagePng={BannerPng}
      title="Новости"
    />
    <div className={styles.news}>
      <div className={styles.news__content}>
        <Adresses adresses={['Главная', 'Новости']} className={styles.news__newsMap} />
        <Search placeholder="Поиск" className={styles.news__search} />
        <div>
          <NewsCard
            className={styles.news__newsCard}
            title="День открытых дверей с УЛГУ"
            area="МОУ СОШ п. Поливаново МО &#34;Барышский район&#34;"
            date="22 Апр, 2021"
            description="21 апреля в школе №1 города Барыша состоялся День открытых дверей с участием представителей УлГУ. Ученики 10 класса МОУ СОШ п. Поливаново смогли поучаствовать"
            image={img}
            smallImage={img2}
          />
          <NewsCard
            className={styles.news__newsCard}
            title="День открытых дверей с УЛГУ"
            area="МОУ СОШ п. Поливаново МО &#34;Барышский район&#34;"
            date="22 Апр, 2021"
            description="21 апреля в школе №1 города Барыша состоялся День открытых дверей с участием представителей УлГУ. Ученики 10 класса МОУ СОШ п. Поливаново смогли поучаствовать"
            image={img}
            smallImage={img2}
          />
          <NewsCard
            className={styles.news__newsCard}
            title="День открытых дверей с УЛГУ"
            area="МОУ СОШ п. Поливаново МО &#34;Барышский район&#34;"
            date="22 Апр, 2021"
            description="21 апреля в школе №1 города Барыша состоялся День открытых дверей с участием представителей УлГУ. Ученики 10 класса МОУ СОШ п. Поливаново смогли поучаствовать"
            image={img}
            smallImage={img2}
          />
          <NewsCard
            className={styles.news__newsCard}
            title="День открытых дверей с УЛГУ"
            area="МОУ СОШ п. Поливаново МО &#34;Барышский район&#34;"
            date="22 Апр, 2021"
            description="21 апреля в школе №1 города Барыша состоялся День открытых дверей с участием представителей УлГУ. Ученики 10 класса МОУ СОШ п. Поливаново смогли поучаствовать"
            image={img}
            smallImage={img2}
          />
          <NewsCard
            className={styles.news__newsCard}
            title="День открытых дверей с УЛГУ"
            area="МОУ СОШ п. Поливаново МО &#34;Барышский район&#34;"
            date="22 Апр, 2021"
            description="21 апреля в школе №1 города Барыша состоялся День открытых дверей с участием представителей УлГУ. Ученики 10 класса МОУ СОШ п. Поливаново смогли поучаствовать"
            image={img}
            smallImage={img2}
          />
        </div>
        <NewsMap title="Новостей на странице" numbers={[3, 5, 10]} max="13" />
      </div>
    </div>
  </>
);

export default News;

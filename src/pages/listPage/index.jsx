import React from 'react';
import Banner from '../../components/UI/Banner';
import CodeClass from '../../components/listPage/CodeClass';
import Activity from '../../components/listPage/Activity';
import Adresses from '../../components/UI/Adresses';
import NewsMap from '../../components/UI/NewsMap';

import styles from './ListPage.module.scss';
import BannerPng from '../../assets/images/listPage/Banner/Banner.png';
import BannerWebp from '../../assets/images/listPage/Banner/Banner.webp';

import DATA from '../../components/listPage/CodeClass/data';

const ListPage = () => (
  <>
    <Banner
      imagePng={BannerPng}
      imageWebp={BannerWebp}
      title="Список КОД-КЛАССОВ"
    />
    <section className={styles.codeClasses}>
      <Adresses adresses={['Главная', 'Код-классы']} className={styles.codeClasses__codeClassesMap} />
      <div className={styles.codeClasses__wrapper}>
        <div className={styles.codeClasses__items}>
          {DATA.map((item) => (
            <CodeClass
              key={item.title}
              imageWebp={item.imageWebp}
              imagePng={item.imagePng}
              title={item.title}
              color={item.color}
              personImageWebp={item.personImageWebp}
              personImagePng={item.personImagePng}
              personSurname={item.personSurname}
              personName={item.personName}
            />
          ))}
        </div>
        <Activity />
      </div>
      <NewsMap title="Код классов на странице" numbers={[1, 10]} max="13" className={styles.codeClasses__codeClassesPag} />
    </section>
  </>
);

export default React.memo(ListPage);

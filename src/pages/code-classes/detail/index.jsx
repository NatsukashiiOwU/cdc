/* eslint-disable camelcase */
import React, { memo, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import Banner from '../../../components/UI/Banner';
import Toggle from '../../../components/Toggle';
import Adresses from '../../../components/UI/Adresses';
import Moderation from '../../../components/Moderation';

import img_banner_png from '../../../assets/images/News/Banner/BannerCdc.png';
import img_banner_webp from '../../../assets/images/News/Banner/BannerCdc.webp';
import img_mini from '../../../assets/images/News/Banner/NewsBannerMini.png';
import NewsMiniBanner from '../../../components/NewsMiniBanner';
import DirectorCard from '../../../components/DirectorCard';

import styles from './NewsCdc.module.scss';
import RouteAddNews from '../../../components/RouteAddNews';
import RouteAddEvents from '../../../components/RouteAddEvents';
import Press from '../../../components/Press';
import Management from '../../../components/Management';
import Profile from './profile';
import ProfileUser from './profile-user';
import { logIn, token } from '../../../store/action';

if (!token) {
  const dispatch = useDispatch();
  dispatch(logIn());
}

// eslint-disable-next-line no-unused-vars
const routeAuth = [
  {
    id: '0',
    title: 'Мероприятия',
    path: '/code-classes/detail/events',
    exact: false,
    Page: RouteAddEvents,
  },
  {
    id: '1',
    title: 'Новости',
    path: '/code-classes/detail/news',
    Page: RouteAddNews,
    exact: false,
  },
  {
    id: '2',
    title: 'Модерация',
    path: '/code-classes/detail/moderation',
    Page: Moderation,
    exact: false,
  },
  {
    id: '3',
    title: 'Пресса',
    exact: false,
    path: '/code-classes/detail/press',
    Page: Press,
  },
  {
    id: '4',
    title: 'Профиль',
    exact: false,
    path: '/code-classes/detail/profile-user',
    Page: ProfileUser,
  },
  {
    id: '6',
    title: 'Управление',
    exact: false,
    path: '/code-classes/detail/management',
    Page: Management,
  },
];

// eslint-disable-next-line no-unused-vars
const routeNotAuth = [
  {
    id: '0',
    title: 'Мероприятия',
    path: '/code-classes/detail/events',
    exact: false,
    Page: RouteAddEvents,
  },
  {
    id: '1',
    title: 'Новости',
    path: '/code-classes/detail/news',
    Page: RouteAddNews,
    exact: false,
  },
  {
    id: '2',
    title: 'Профиль',
    path: '/code-classes/detail/profile',
    Page: Profile,
    exact: false,
  },
];

const ADDRESS_TITLE = ['Главная', 'Код классы', 'МОУ СОШ п. Поливаново МО " Барышский район', 'Новости Код-класса'];

const CodeClassesDetail = () => {
  const store = useStore();
  const [user, setUser] = useState([]);
  store.subscribe(() => setUser(store.getState()));

  return (
    <div className={styles.codeClassesDetail}>
      <Banner
        imagePng={img_banner_png}
        imageWebp={img_banner_webp}
        title="Список КОД-КЛАССОВ"
      />
      <div className={styles.codeClassesDetail__container}>
        <Adresses className={styles.codeClassesDetail__adress} adresses={ADDRESS_TITLE} />
        <div className={styles.codeClassesDetail__wrapper}>
          <div className={styles.codeClassesDetail__banners}>
            <NewsMiniBanner
              imgBanWebp={img_mini}
            />
            {user.isAuth ? (
              <Toggle
                items={routeAuth}
                className={styles.codeClassesDetail__toggle}
              />
            ) : (
              <Toggle
                items={routeNotAuth}
                className={styles.codeClassesDetail__toggle}
              />
            )}
          </div>
          <div className={styles.codeClassesDetail__card}>
            <DirectorCard
              place="Руководитель клуба"
              name="ФИО"
              eventCount="0"
              userCount="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CodeClassesDetail);

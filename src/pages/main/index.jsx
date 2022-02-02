import React from 'react';
import News from '../../components/News';
import Basics from '../../components/Basics';
import Events from '../../components/mainPage/Events';
import Tasks from '../../components/mainPage/Tasks/index';
import AboutAs from '../../components/mainPage/AboutAs/index';
import Map from '../../components/mainPage/Map';

import styles from './main.module.scss';

const MainPage = () => (
  <div className={styles.mainPage}>
    <Basics />
    <Tasks />
    <AboutAs />
    <News />
    <Map />
    <Events />
  </div>
);

export default MainPage;

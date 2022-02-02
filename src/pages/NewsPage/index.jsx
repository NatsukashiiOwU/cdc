import React from 'react';
import NewsPageBody from '../../components/NewsPageBody';
import Banner from '../../components/UI/Banner';

import banerPng from '../../assets/images/News/Banner/Banner.png';
import banerWebp from '../../assets/images/News/Banner/Banner.webp';

const NewsPage = () => (
  <>
    <Banner imagePng={banerPng} imageWebp={banerWebp} title="Новости" />
    <NewsPageBody />
  </>
);

export default NewsPage;

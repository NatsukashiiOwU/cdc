import cn from 'classnames';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { useSelector } from 'react-redux';
import Adresses from '../UI/Adresses';

import styles from './NewsPageBody.module.scss';

import img from '../../assets/images/NewsPage/img.png';
import img2 from '../../assets/images/NewsPage/img2.png';
import Icon from '../UI/Icon';
import SocialIcon from '../UI/SocialIcon';
import Button from '../UI/Button';
import authHeader from '../../services/auth-header';
// import auth from '../../store/reducers/auth';

const TEXT_CONTENT = ['21 апреля в школе №1 города Барыша состоялся День открытых дверей с участием представителей УлГУ.\n',
  'Ученики  10 класса МОУ СОШ п. Поливаново смогли поучаствовать в мастер-классах «Знакомство с возможностями языка Python».'
  + 'Учащиеся 5 и 6 класса с большим интересом программировали  «Беспилотные летательные аппараты». Учащиеся 9 класса   прослушали '
  + 'лекцию о направлениях обучения в колледже «Сокол» при УлГУ. Спасибо организаторам за интересное мероприятие!'];

const ICON = ['facebook', 'vk', 'instagram', 'share'];

const ADRESSES = ['Главная', 'Новости', 'МОУ СОШ п. Поливаново МО " Барышский район"'];

// eslint-disable-next-line camelcase
// const news_url = 'http://localhost:8080/api/news/cdc';
// eslint-disable-next-line camelcase
const news_url = 'http://localhost:8080/api/news';

function NewsPageBody() {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setLoading] = useState(true);

  const { user } = useSelector((state) => state.auth);
  const [news, setNews] = React.useState();

  React.useEffect(() => {
    // eslint-disable-next-line camelcase
    axios.get(`${news_url}/${user.cdc_id}`, { headers: authHeader() }).then((response) => {
      setNews(response.data);
      setLoading(false);
    });
  }, []);

  // eslint-disable-next-line no-unused-vars
  /* const [items, setItems] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);

  // eslint-disable-next-line react/no-this-in-sfc,no-shadow,max-len
  axios.get(url, { headers: authHeader() }).then((res) => { setItems(res.data); });

  // eslint-disable-next-line no-unused-vars
  const [actualid, setCount] = useState(0);
  /* useEffect(() => {
    // eslint-disable-next-line no-shadow
    getItems().then((data) => setItems(data));
  }, []);
  // eslint-disable-next-line no-shadow
  const [actualid, setCount] = useState(0);
  const nextnews = () => {
    // eslint-disable-next-line no-shadow
    setCount((actualid) => actualid + 1);
  };
  const prevnews = () => {
    // eslint-disable-next-line no-shadow
    setCount((actualid) => actualid - 1);
  }; */
  // eslint-disable-next-line no-return-assign
  // alert(JSON.stringify(items));

  //  alert(JSON.stringify(news));

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className={styles.newsPageBody}>
      <div className={styles.newsPageBody__content}>
        <Adresses className={styles.newsPageBody__adresses} adresses={ADRESSES} />
        <div className={styles.newsPageBody__title}>
          <div>{news[1].article}</div>
        </div>
        <div className={styles.newsPageBody__info}>
          <div className={styles.newsPageBody__date}>
            {news.date}
          </div>
          <div className={styles.newsPageBody__people}>
            участников
            <div className={styles.newsPageBody__numberPeople}>
              300
            </div>
          </div>
        </div>
        <div className={styles.newsPageBody__area}>
          <img src={img2} className={styles.newsPageBody__iconImage} alt="icon" />
          UUIU
        </div>
        <div>
          {/* eslint-disable-next-line no-unused-vars */}
          {TEXT_CONTENT.map((text) => (
            <p className={styles.newsPageBody__textContent}>{news.contents}</p>
          ))}
        </div>
        <img src={img} alt="Картинка" className={styles.newsPageBody__mainSlideImg} />
        <div className={styles.newsPageBody__sliderWrapper}>
          <Icon view="arrowPrev" className={cn(styles.newsPageBody__arrow, styles.newsPageBody__arrow_arrowPrev)} />
          {Array.from({ length: 3 }, () => (
            <img src={img} alt="Картинка" className={styles.newsPageBody__sliderImg} />
          ))}
          <Icon view="arrowNext" className={cn(styles.newsPageBody__arrow, styles.newsPageBody__arrow_arrowNext)} />
        </div>
        <div className={styles.newsPageBody__footer}>
          <div>
            {/* eslint-disable-next-line max-len */}
            {/* eslint-disable-next-line max-len,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,no-undef */}
            <span className={styles.newsPageBody__prevNews}>ПРЕДЫДУЩИЙ ПОСТ</span>
            {/* eslint-disable-next-line max-len */}
            {/* eslint-disable-next-line max-len,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,no-undef */}
            <span className={styles.newsPageBody__nextNews}>СЛЕДУЮЩИЙ ПОСТ</span>
          </div>
          <div className={styles.newsPageBody__iconWrapper}>
            {ICON.map((icon, index) => (
              <SocialIcon
                key={icon}
                inCircle={ICON.length - 1 !== index}
                className={styles.newsPageBody__circleIcon}
                view={icon}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.newsPageBody__actualNews}>
        <div className={styles.newsPageBody__actualNewsTitle}>Актуальные новости</div>
        {/* eslint-disable-next-line no-shadow */}
        {Array.from(news, (item) => (
          <div className={styles.newsPageBody__newsCard}>
            <img src={img} alt="Картинка" className={styles.newsPageBody__newsCardImg} />
            <div>
              <div className={styles.newsPageBody__newsCardTitle}>
                {item.article}
              </div>
              <div className={styles.newsPageBody__newsCardDate}>{item.date}</div>
            </div>
          </div>
        ))}
        <Button className={styles.newsPageBody__button}>Показать больше</Button>
      </div>
    </div>
  );
}

export default React.memo(NewsPageBody);

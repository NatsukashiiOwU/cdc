import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import Button from '../UI/Button';
import SocialIcon from '../UI/SocialIcon';
import logoImg from '../../assets/images/logo.png';

import {
  MENU_LINKS, CHAPTER_LINKS, COPYRIGHT, SOCIAL_LINKS,
} from './Links';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__wrapper}>
      <div className={styles.footer__links}>
        <div className={styles.footer__icons}>
          <img className={styles.footer__logo} src={logoImg} alt="logo" />
          <div className={styles.footer__linksSocial}>
            {SOCIAL_LINKS.map((item) => (
              <SocialIcon
                inCircle
                className={styles.footer__linkLogo}
                view={item.img}
                key={item.img}
              />
            ))}
          </div>
        </div>
        <div className={styles.footer__linksChapterSite}>
          <div className={styles.footer__linksMenu}>
            <span>Меню</span>
            <ul>
              {MENU_LINKS.map((item) => (
                <li key={item.title}>
                  <Link to={item.link} className={styles.footer__link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footer__linksChapter}>
            <ul>
              {CHAPTER_LINKS.map((item) => (
                <li key={item.title}>
                  <Link to={item.link} className={styles.footer__link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.footer__copyright}>
          {COPYRIGHT}
        </div>
      </div>
      <div className={styles.footer__form}>
        <div className={styles.footer__formText}>
          <h3 className={styles.footer__formTitle}>Напишите нам</h3>
          <span className={styles.footer__formDesc}>Мы всегда рады ответить на ваши вопросы</span>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email" className={styles.footer__formEmail}>
            e-mail
            <input type="email" id="email" placeholder="Ваш e-mail" />
          </label>
          <label htmlFor="message" className={styles.footer__formMessage}>
            сообщение
            <textarea id="message" placeholder="Напишите нам" />
          </label>
          <div className={styles.footer__formSubmit}>
            <label htmlFor="name" className={styles.footer__formName}>
              ФИО
              <input type="name" id="name" placeholder="Ваше имя" />
            </label>
            <div className={styles.footer__formBlockButton}>
              <Button type="submit" className={styles.footer__formButton}>Отправить</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </footer>
);

export default React.memo(Footer);

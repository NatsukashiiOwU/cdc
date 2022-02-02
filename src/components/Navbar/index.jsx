/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import cn from 'classnames';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import Modal from '../UI/Modal';
import SmallModal from '../UI/SmallModal';
import Icon from '../UI/Icon';
import FormRegistration from '../FormRegistration';
import FormForgotPassEmail from '../FormForgotPassEmail';
import FormForgotPassword from '../FormForgotPassword';
import FormAuthorization from '../FormAuthorization';
import ProfileMenu from '../ProfileMenu';
import FormChangePassword from '../FormChangePassword';
import Tooltip from '../UI/Tooltip';
import { LINKS, AUTH_LINKS, ADMIN_LINKS } from './Links';

import useClickOutside from '../../hooks/useClickOutside';

import img from '../../assets/images/NewsPage/img2.png';
import Button from '../UI/Button';

const Navbar = () => {
  const store = useStore();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenToolTip, setIsOpenToolTip] = useState(false);
  const label = useClickOutside(() => setIsOpenToolTip(false));
  const [openForm, setOpenForm] = useState('');
  const [isOpenSmallModal, setIsOpenSmallModal] = useState(false);
  const [menu, setMenu] = useState([]);
  const [user, setUser] = useState([]);
  store.subscribe(() => setUser(store.getState()));

  useEffect(() => {
    setMenu(AUTH_LINKS);
    if (user.isAuth) {
      setMenu((prev) => ([...prev, ...ADMIN_LINKS]));
    }
  }, [user]);

  const openModal = useCallback((type) => {
    new Promise((resolve) => {
      if (!isOpenModal) {
        resolve();
        return;
      }

      setIsOpenModal(false);

      if (type === 'close') {
        return;
      }

      setTimeout(() => resolve(), 500);
    }).then(() => {
      setIsOpenModal(true);
      setOpenForm(type || '');
    });
  }, [isOpenModal, openForm]);

  const USER_BUTTONS = [
    {
      text: 'Настройки профиля',
      path: '/code-classes/detail/profile-user',
    },
    {
      text: 'Смена пароля',
      onClick: () => {
        openModal('changePassword');
        setIsOpenToolTip(false);
      },
    }, {
      text: 'Выйти',
    },
  ];

  return (
    <>
      <nav
        className={
          cn(styles.navbar,
            user.isAuth && styles.navbar_isAuth)
        }
      >
        <div className={styles.navbar__links}>
          <ul>
            {LINKS.map((item) => (
              <li>
                <Link
                  to={item.link}
                  className={cn(styles.navbar__link,
                    user.isAuth && styles.navbar__link_isAuth)}
                  key={item.img}
                >
                  <Icon
                    className={styles.navbar__linkIcon}
                    view={item.icon}
                  />

                  {!!item.title && (
                    <div className={styles.navbar__linkTitle}>
                      {item.title}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={
            cn(
              styles.navbar__modalButton,
              user.isAuth && styles.navbar__modalButton_isAuth,
              styles.navbar__button,
            )
          }
          type="button"
          onClick={() => openModal(isOpenModal ? 'close' : '')}
        >
          { !user.isAuth && <Icon className={styles.navbar__icon} view="login" /> }
          { user.isAuth && <Icon className={cn(styles.navbar__icon, styles[`navbar__icon_${isOpenModal ? 'cross' : 'burder'}`])} view={isOpenModal ? 'closeMenu' : 'burger'} /> }
        </button>
        {user.isAuth && (
          <div ref={label} className={styles.navbar__profileWrapper}>
            <button className={styles.navbar__profile} type="button" onClick={() => setIsOpenToolTip(!isOpenToolTip)}>
              <img src={img} alt="Аватар" />
            </button>
            <Tooltip className={styles.navbar__tooltip} isOpen={isOpenToolTip}>
              <div className={styles.navbar__tooltipHeader}>
                <img className={styles.navbar__tooltipIcon} src={img} alt="Аватар" />
                <div className={styles.navbar__tooltipName}>
                  <div>Костишко</div>
                  <div>Алла Евгеньевна</div>
                </div>
              </div>
              <a className={styles.navbar__tooltipLink} href="http://cdc.ulsu.ru/users/lenizahotbox-ru/">http://cdc.ulsu.ru/users/lenizahotbox-ru/</a>
              <div className={styles.navbar__tooltipUserButtons}>
                {
                  USER_BUTTONS.map((item) => (
                    <Button onClick={item.onClick} href={item.path} type="button" className={styles.navbar__tooltipUserButton}>
                      {item.text}
                    </Button>
                  ))
                }
              </div>
            </Tooltip>
          </div>
        )}
      </nav>
      <Modal
        isOpen={isOpenModal}
        isFull={!(user.isAuth && openForm === '')}
      >
        <TransitionGroup className={styles.navbar__form}>
          {openForm === '' && (
            <CSSTransition
              key={openForm}
              timeout={300}
              unmountOnExit
              classNames={{
                enterActive: styles.navbar__form_enterActive,
                enterDone: styles.navbar__form_enterDone,
                exitActive: styles.navbar__form_exitActive,
                exitDone: styles.navbar__form_exitDone,
              }}
            >
              {user.isAuth
                ? <ProfileMenu content={menu} />
                : <FormAuthorization changeForm={setOpenForm} />}
            </CSSTransition>
          )}
          {openForm === 'registration' && (
            <CSSTransition
              key={openForm}
              timeout={300}
              unmountOnExit
              classNames={{
                enter: styles.navbar__form_enter,
                enterActive: styles.navbar__form_enterActive,
                enterDone: styles.navbar__form_enterDone,
                exit: styles.navbar__form_exit,
                exitActive: styles.navbar__form_exitActive,
                exitDone: styles.navbar__form_exitDone,
              }}
            >
              <FormRegistration
                changeForm={setOpenForm}
                className={styles.navbar__formRegistration}
              />
            </CSSTransition>
          )}
          {openForm === 'changePasswordEmail' && (
            <CSSTransition
              key={openForm}
              timeout={300}
              unmountOnExit
              classNames={{
                enter: styles.navbar__form_enter,
                enterActive: styles.navbar__form_enterActive,
                enterDone: styles.navbar__form_enterDone,
                exit: styles.navbar__form_exit,
                exitActive: styles.navbar__form_exitActive,
                exitDone: styles.navbar__form_exitDone,
              }}
            >
              <FormForgotPassEmail
                changeForm={setOpenForm}
                className={styles.navbar__formForgotPassEmail}
              />
            </CSSTransition>
          )}
          {openForm === 'changePassword' && (
            <CSSTransition
              key={openForm}
              timeout={300}
              unmountOnExit
              classNames={{
                enter: styles.navbar__form_enter,
                enterActive: styles.navbar__form_enterActive,
                enterDone: styles.navbar__form_enterDone,
                exit: styles.navbar__form_exit,
                exitActive: styles.navbar__form_exitActive,
                exitDone: styles.navbar__form_exitDone,
              }}
            >
              {user.isAuth ? <FormChangePassword /> : (
                <FormForgotPassword
                  changeForm={setOpenForm}
                  className={styles.navbar__formForgotPassword}
                />
              )}
            </CSSTransition>
          )}
        </TransitionGroup>
      </Modal>
      <SmallModal isOpen={isOpenSmallModal}>
        <div className={styles.navbar__smallModalWrapper}>
          <h3 className={styles.navbar__smallModalTitle}>Спасибо!</h3>
          <span className={styles.navbar__smallModalText}>
            После одобрения вашего запроса вы получите реквизиты доступа к вашему КОД-КЛАССУ
            на
            <p><a href="mailto:angar.ulsu@gmail.com">angar.ulsu@gmail.com</a></p>
          </span>
        </div>
      </SmallModal>
    </>
  );
};

export default React.memo(Navbar);

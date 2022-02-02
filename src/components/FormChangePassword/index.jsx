import React, { useState, memo, useCallback } from 'react';
import cn from 'classnames';
import styles from './FormChangePassword.module.scss';
import Input from '../UI/Input';
import Button from '../UI/Button';

const FormChangePassword = () => {
  const [email, setEmail] = useState('');
  const [newPass, setNewPass] = useState('');
  const [repNewPass, setRepNewPass] = useState('');
  const [next, setNext] = useState(0);

  const enterEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const enterNewPass = useCallback((e) => {
    setNewPass(e.target.value);
  }, []);

  const enterRepNewPass = useCallback((e) => {
    setRepNewPass(e.target.value);
  }, []);

  return (
    <div className={cn(styles.formChangePassword)}>
      <div className={styles.formChangePassword__title}>Смена пароля</div>
      <div className={styles.formChangePassword__contentWrapper}>
        <div className={styles.formChangePassword__content} style={{ transform: `translateX(calc(${next} * -100%))` }}>
          <div className={styles.formChangePassword__item}>
            <div className={styles.formChangePassword__description}>
              Для смены пароля введите ваш Email
            </div>
            <Input
              type="email"
              name="email"
              icon="inputEmail"
              placeholder="Email"
              onChange={enterEmail}
              text={email}
              error="Заполните поле"
            />
            <Button
              className={cn(styles.formChangePassword__submit, !/(.+)@(.+)/.test(email) && styles.formChangePassword__submit_disabled)}
              onClick={() => setNext(1)}
            >
              Далее
            </Button>
          </div>
          <div className={styles.formChangePassword__item}>
            <div className={styles.formChangePassword__description}>
              Введите новый пароль
            </div>
            <Input
              type="password"
              name="password"
              icon="inputPassword"
              placeholder="Новый пароль"
              onChange={(event) => enterNewPass(event.target.value)}
              text={newPass}
              error="Заполните поле"
            />
            <Input
              type="password"
              name="password"
              icon="inputPassword"
              placeholder="Повторите новый пароль"
              onChange={(event) => enterRepNewPass(event.target.value)}
              text={repNewPass}
              error="Заполните поле"
            />
            <Button
              className={cn(styles.formChangePassword__submit, next !== 0 && !/(.+)@(.+)/.test(email) && styles.formChangePassword__submit_disabled)}
            >
              Изменить пароль
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FormChangePassword);

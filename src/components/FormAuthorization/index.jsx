import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import Input from '../UI/Input';
import Button from '../UI/Button';
import styles from './FormAuthorization.module.scss';
// eslint-disable-next-line import/named,no-unused-vars
import { logIn } from '../../store/action';

const LINKS = [
  {
    title: 'Забыли Пароль?',
    changeForm: 'changePasswordEmail',
  },
  {
    title: 'Регистрация',
    changeForm: 'registration',
  },
];

const FormAuthorization = ({ changeForm, className }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars,no-shadow
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const enterEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, [email]);

  const enterPassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [password]);

  return (
    <div className={cn(styles.formAuthorization, className)}>
      <div className={styles.formAuthorization__title}>
        <h2>Еще раз Здравствуйте!</h2>
        <span>с возвращением</span>
      </div>
      <div className={styles.formAuthorization__form}>
        <form onSubmit={(event) => { event.preventDefault(); dispatch(logIn()); }}>
          <Input
            type="e-mail"
            name="email"
            icon="inputEmail"
            placeholder="Email"
            onChange={enterEmail}
            text={email}
            error="Заполните поле"
          />
          <Input
            type="password"
            name="password"
            icon="inputPassword"
            placeholder="Пароль"
            onChange={enterPassword}
            text={password}
            error="Заполните поле"
          />
          <Button type="submit" className={styles.formAuthorization__submit}>
            Вход
          </Button>
        </form>
      </div>
      <div className={styles.formAuthorization__links}>
        {LINKS.map((item) => (
          <div className={styles.formAuthorization__link} key={item.title}>
            <Button onClick={() => changeForm(item.changeForm)}>
              {item.title}
            </Button>
          </div>
        ))}
      </div>
    </div>

  );
};

export default React.memo(FormAuthorization);

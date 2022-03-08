import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import cn from 'classnames';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import { login } from '../../store/action/auth';

import Button from '../UI/Button';
import styles from './FormAuthorization.module.scss';
import store from '../../store';

// eslint-disable-next-line no-unused-vars,consistent-return
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

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

const FormAuthorization = ({ props, changeForm, className }) => {
  const form = useRef();
  const checkBtn = useRef();

  // eslint-disable-next-line no-unused-vars
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState([]);
  store.subscribe(() => setUser(store.getState()));

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    // eslint-disable-next-line no-shadow
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    // eslint-disable-next-line no-shadow
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    // eslint-disable-next-line no-underscore-dangle
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push('/');
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className={cn(styles.formAuthorization, className)}>
      <div className={styles.formAuthorization__title}>
        <h2>Еще раз Здравствуйте!</h2>
        <span>с возвращением</span>
      </div>
      <div className={styles.formAuthorization__form}>
        <Form onSubmit={handleLogin} ref={form}>
          <Input
            className={styles.formAuthorization__input}
            type="e-mail"
            name="email"
            icon="inputEmail"
            placeholder="Email"
            value={username}
            onChange={onChangeUsername}
            validations={[required]}
            text={username}
            error="Заполните поле"
          />
          <Input
            type="password"
            name="password"
            icon="inputPassword"
            placeholder="Пароль"
            value={password}
            onChange={onChangePassword}
            validations={[required]}
            error="Заполните поле"
          />
          {/* eslint-disable-next-line max-len,no-sequences */}
          <Button className={styles.formAuthorization__submit} disabled={loading}>
            {loading && (
            <span className="spinner-border spinner-border-sm" />
            )}
            <span>Вход</span>
          </Button>
          {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
          )}
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </Form>
      </div>
      <div className={styles.formAuthorization__links}>
        {LINKS.map((item) => ( // TODO fix links list
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

export default FormAuthorization;

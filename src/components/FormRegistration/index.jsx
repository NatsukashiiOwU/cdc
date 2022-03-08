import React, { useState, useRef } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../UI/Input';
import Button from '../UI/Button';
import styles from './FormRegistration.module.scss';

import { register } from '../../store/action/auth';

const FormRegistration = ({ className }) => {
  /* const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');

  const enterName = useCallback((e) => setName(e.target.value), []);
  const enterEmail = useCallback((e) => setEmail(e.target.value), []);
  const enterUniversity = useCallback((e) => setUniversity(e.target.value), []);

  const url = 'http://localhost:8080/api/signup';
  const data = { name, email, university };
  */

  const form = useRef();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    // eslint-disable-next-line no-shadow
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    // eslint-disable-next-line no-shadow
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeUniversity = (e) => {
    // eslint-disable-next-line no-shadow
    const university = e.target.value;
    setUniversity(university);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    // eslint-disable-next-line no-underscore-dangle
    dispatch(register(username, email, university))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  /* async function postData() { // TODO fix callbacks
    try {
      const response = await fetch(url, {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      console.log('Успех:', JSON.stringify(json));
    } catch (error) {
      console.error('Ошибка:', error);
    }
  } */

  // const postData = () => axios.post(url, data, { headers: authHeader() });

  // <form onSubmit={(e) => e.preventDefault}>
  return (
    <div className={cn(styles.formRegistration, className)}>
      <div className={styles.formRegistration__title}>
        <h2>Здраствуйте!</h2>
        <span>для создания нового КОД-КЛАССА введите информацию </span>
      </div>
      <div className={styles.formRegistration__form}>
        <form onSubmit={handleRegister} ref={form}>
          <Input
            type="text"
            name="name"
            icon="inputName"
            placeholder="ФИО"
            value={username}
            onChange={onChangeUsername}
            error="Заполните поле"
          />
          <Input
            type="e-mail"
            name="email"
            icon="inputEmail"
            placeholder="Email Address"
            value={email}
            onChange={onChangeEmail}
            error="Заполните поле"
          />
          <Input
            type="text"
            name="university"
            icon="inputVuz"
            placeholder="Образовательное учреждение"
            value={university}
            onChange={onChangeUniversity}
            error="Заполните поле"
          />
          {/* eslint-disable-next-line no-sequences,max-len */}
          <Button className={styles.formRegistration__submit}>
            <span className="spinner-border spinner-border-sm" />
            <span>Создать КОД-КЛАСС</span>
          </Button>
          {message && (
            <div className="form-group">
              <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>

  );
};

export default React.memo(FormRegistration);

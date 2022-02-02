import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import Input from '../UI/Input';
import Button from '../UI/Button';
import styles from './FormRegistration.module.scss';

const FormRegistration = ({ className }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');

  const enterName = useCallback((e) => setName(e.target.value), []);
  const enterEmail = useCallback((e) => setEmail(e.target.value), []);
  const enterUniversity = useCallback((e) => setUniversity(e.target.value), []);

  const url = 'http://localhost:8080/api/register';
  const data = { name, email };

  async function postData() {
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
  }
  return (
    <div className={cn(styles.formRegistration, className)}>
      <div className={styles.formRegistration__title}>
        <h2>Здраствуйте!</h2>
        <span>для создания нового КОД-КЛАССА введите информацию </span>
      </div>
      <div className={styles.formRegistration__form}>
        <form onSubmit={(e) => e.preventDefault}>
          <Input
            type="text"
            name="name"
            icon="inputName"
            placeholder="ФИО"
            onChange={enterName}
            text={name}
            error="Заполните поле"
          />
          <Input
            type="e-mail"
            name="email"
            icon="inputEmail"
            placeholder="Email Address"
            onChange={enterEmail}
            text={email}
            error="Заполните поле"
          />
          <Input
            type="text"
            name="university"
            icon="inputVuz"
            placeholder="Образовательное учреждение"
            onChange={enterUniversity}
            text={university}
            error="Заполните поле"
          />
          <Button className={styles.formRegistration__submit} OnClick={postData()}>
            Создать КОД-КЛАСС
          </Button>
        </form>
      </div>
    </div>

  );
};

export default React.memo(FormRegistration);

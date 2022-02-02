import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import Input from '../UI/Input';
import Button from '../UI/Button';
import styles from './FormForgotPassword.module.scss';

const FormForgotPassword = ({ className }) => {
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const enterNewPassword = useCallback((e) => {
    setNewPassword(e.target.value);
  }, []);

  const repeatNewPassword = useCallback((e) => {
    setRepeatPassword(e.target.value);
  }, []);

  return (
    <div className={cn(styles.formForgotPassword, className)}>
      <div className={styles.formForgotPassword__title}>
        <h2>Смена пароля</h2>
        <span>Введите новый пароль</span>
      </div>
      <div className={styles.formForgotPassword__form}>
        <form onSubmit={(e) => e.preventDefault()}>
          <Input
            type="password"
            name="password"
            icon="inputPassword"
            placeholder="Новый пароль"
            onChange={enterNewPassword}
            text={newPassword}
            error="Заполните поле"
          />
          <Input
            type="password"
            name="repeatPassword"
            icon="inputPassword"
            placeholder="Повторите новый пароль"
            onChange={repeatNewPassword}
            text={repeatPassword}
            error="Заполните поле"
          />
          <Button className={styles.formForgotPassword__submit}>
            Изменить пароль
          </Button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(FormForgotPassword);

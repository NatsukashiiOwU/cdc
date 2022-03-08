import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import Input from '../UI/Input';
import Button from '../UI/Button';
import styles from './FormForgotPassEmail.module.scss';

const FormForgotPassEmail = ({ changeForm, className }) => { // TODO add password change
  const [email, setEmail] = useState('');

  const enterEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const checkEmail = useCallback((e) => {
    e.preventDefault();
    changeForm('changePassword');
  }, []);

  return (
    <div className={cn(styles.formForgotPassEmail, className)}>
      <div className={styles.formForgotPassEmail__title}>
        <h2>Смена пароля</h2>
        <span>Для смены пароля введите ваш Email</span>
      </div>
      <div className={styles.formForgotPassEmail__form}>
        <form onSubmit={checkEmail}>
          <Input
            type="email"
            name="email"
            icon="inputEmail"
            placeholder="Email"
            onChange={enterEmail}
            text={email}
          />
          <Button className={styles.formForgotPassEmail__submit}>
            Далее
          </Button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(FormForgotPassEmail);

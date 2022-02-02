import React, { memo, useState, useCallback } from 'react';
import cn from 'classnames';
import styles from './Persone.module.scss';
import Icon from '../../UI/Icon';
import ToolTip from '../../UI/Tooltip';
import Button from '../../UI/Button';

const Persone = ({
  isFirst, codeClass, director, email, setIsDelete, isDelete,
}) => {
  const [cutDirector] = useState(director.split(' '));
  const [checked, setChecked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNameOpen, setIsNameOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsDelete(!isDelete);
  }, [isDelete]);
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={styles.persone}>
      <div
        className={
          cn(styles.persone__personHeader,
            styles.persone__personHeader_codeClass)
        }
      >
        <input onChange={() => setChecked(!checked)} type="checkbox" className={styles.persone__labelInput} />
        <div
          className={
            cn(styles.persone__checkBox,
              checked && styles.persone__checkBox_checked)
          }
        />
        {codeClass}
      </div>
      <div
        className={
          cn(styles.persone__personHeader,
            styles.persone__personHeader_director)
        }
        onMouseEnter={() => setIsNameOpen(true)}
        onMouseLeave={() => setIsNameOpen(false)}
      >
        {isFirst ? 'Руководитель' : `${cutDirector[0]} ${cutDirector[1]} [...]`}
        {!isFirst
          && (
          <ToolTip isOpen={isNameOpen} className={styles.persone__tooltipName} type="top">
            {director}
          </ToolTip>
          )}
      </div>
      <div className={
        cn(styles.persone__personHeader,
          styles.persone__personHeader_email)
      }
      >
        {email}
      </div>
      <div
        className={cn(styles.persone__personHeader,
          isFirst && styles.persone__personHeader_actions,
          !isFirst && styles.persone__personHeader_burger)}
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        {isFirst
          ? 'Действия'
          : (
            <>
              <Icon className={styles.persone__burger} view="burger" />
              <ToolTip isOpen={isMenuOpen} className={styles.persone__tooltipMenu} type="right">
                <Button className={styles.persone__tooltipButton} type="button">Сообщение</Button>
                <Button className={styles.persone__tooltipButton} type="button">Сбросить пароль</Button>
                <Button className={styles.persone__tooltipButton} onClick={showModal} type="button">Удалить</Button>
              </ToolTip>
            </>
          )}
      </div>
    </label>
  );
};

export default memo(Persone);

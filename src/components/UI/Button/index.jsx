import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  children, className, onClick, type, icon, href,
}) => (
  href ? (
    <Link className={cn(styles.button, styles.button__link, className)} to={href}>{children}</Link>
  ) : (
    <button
      type={type}
      className={cn(styles.button, className)}
      onClick={onClick}
    >
      {icon ? (
        <img src={icon} alt={children} />
      ) : children}
    </button>
  )
);

export default React.memo(Button);

import React from 'react';
import cn from 'classnames';
import Icon from '../Icon';
import styles from './Input.module.scss';

const Input = ({
  type,
  name,
  icon,
  className,
  placeholder,
  onChange,
  text,
  error,
  labelClassName,
  filePlaceholder,
  classNamePlaceholder,
  props,
}) => (
  <>
    {!text && !!error && <span className={styles.input__errorText}>{error}</span>}
    {type === 'textarea' ? (
      <textarea
        {...props}
        className={cn(styles.input, !text && styles.input_error, className)}
        onChange={onChange}
        name={name}
        value={text}
      />
    ) : (
      <div className={styles.input__placeholderBlock}>
        <label htmlFor={name} className={labelClassName}>
          {!text ? filePlaceholder : null}
          <input
            {...props}
            id={name}
            type={type}
            className={cn(styles.input, !text && styles.input_error, className)}
            onChange={onChange}
            name={name}
            value={text}
          />
        </label>
        <div className={cn(styles.input__placeholder,
          !!text && styles.input__placeholder_none)}
        >
          <div className={styles.input__content}>
            <Icon className={styles.input__icon} view={icon} />
            <div className={cn(styles.input__placeholder_text, classNamePlaceholder)}>
              {placeholder}
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);

export default React.memo(Input);

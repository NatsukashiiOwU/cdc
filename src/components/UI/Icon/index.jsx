import React from 'react';
import cn from 'classnames';
import sprite from '../../../assets/sprites/icons.svg';
import styles from './Icon.module.scss';

const Icon = ({
  className,
  view,
}) => (
  <div className={cn(className, styles.icon)}>
    <svg>
      <use href={`${sprite}#${view}`} />
    </svg>
  </div>
);

export default React.memo(Icon);

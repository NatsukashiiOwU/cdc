import cn from 'classnames';
import React from 'react';
import Sprite from '../../../assets/sprites/icons.svg';
import styles from './SocialIcon.module.scss';

const SocialIcon = ({
  className, link, view, inCircle,
}) => (
  <a href={link || '#'} className={cn(className, styles.icon, inCircle && styles.icon_circle)}>
    <svg>
      <use href={`${Sprite}#${view}`} />
    </svg>
  </a>
);

export default React.memo(SocialIcon);

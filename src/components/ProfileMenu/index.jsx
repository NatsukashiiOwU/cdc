import React, { memo } from 'react';
import cn from 'classnames';

import styles from './ProfileMenu.module.scss';

// eslint-disable-next-line react/prop-types
const ProfileMenu = ({ className, content }) => (
  <div className={cn(className, styles.profileMenu)}>
    {
      content.map((item) => (
        <a href={item.link} key={item.link} className={styles.profileMenu__item}>{ item.title }</a>
      ))
    }
  </div>
);

export default memo(ProfileMenu);

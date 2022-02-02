import React from 'react';
import cn from 'classnames';
import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import styles from './Toggle.module.scss';

const Toggle = ({ items, className }) => (
  <div className={styles.toggle}>
    <nav className={cn(styles.toggle__menu, className)}>
      <ul
        className={cn(styles.toggle__menuItems, items.length > 4 && styles.toggle__menuItem_small)}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className={styles.toggle__menuItem}
          >
            <NavLink activeClassName={styles.toggle__active} to={item.path}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <Switch>
      {items.map(({ Page, path, exact = true }) => (
        <Route path={path} component={Page} key={path} exact={exact} />
      ))}
    </Switch>
  </div>
);

export default Toggle;

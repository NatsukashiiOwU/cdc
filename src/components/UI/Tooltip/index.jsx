import React, { memo } from 'react';
import cn from 'classnames';
import styles from './Tooltip.module.scss';

// eslint-disable-next-line react/prop-types
const Tooltip = ({ className, isOpen, children }) => (
  <div className={cn(className, styles.tooltip, isOpen && styles.tooltip_open)}>
    {children}
  </div>
);

export default memo(Tooltip);

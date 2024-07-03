import React from 'react';
import TextWithIcon from '../../atoms/TextWithIcon';
import IconButton from '../../atoms/IconButton';
import styles from './index.module.css';

export interface NavigationBarItem {
  iconSrc: string;
  altText: string;
  translationKey: string;
  active?: boolean;
}

export interface NavigationBarProps {
  items: NavigationBarItem[];
  onLogout: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ items, onLogout }) => {
  return (
    <div className={styles.navigationBar}>
      {items.map((item, index) => (
        <div key={index} className={styles.navigationItem}>
          <TextWithIcon
            iconSrc={item.iconSrc}
            altText={item.altText}
            translationKey={item.translationKey}
          />
        </div>
      ))}
      <IconButton iconSrc="/path/to/logout-icon.png" altText="Logout" onClick={onLogout} />
    </div>
  );
};

export default NavigationBar;
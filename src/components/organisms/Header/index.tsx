import React from 'react';
import NavigationBar, { NavigationBarItem } from '../../molecules/NavigationBar';
import styles from './index.module.css';

export interface HeaderProps {
  titleKey: string;
  navigationItems: NavigationBarItem[];
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ titleKey, navigationItems, onLogout }) => {
  return (
    <div className={styles.header}>
      <TextWithIcon
        iconSrc="/path/to/logo-icon.png"
        altText="Logo"
        translationKey={titleKey}
        iconSize={{ width: 24, height: 24 }}
      />
      <NavigationBar items={navigationItems} onLogout={onLogout} />
    </div>
  );
};

export default Header;
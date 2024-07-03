import React from 'react';
import { useTranslation } from 'next-i18next';
import Header from '@components/organisms/Header';
import Button from '@components/atoms/Button';
import Text from '@components/atoms/Text';
import styles from './index.module.css';

const AttendanceSystem = () => {
  const { t } = useTranslation();

  const navigationItems = [
    {
      iconSrc: '/path/to/time-tracking-icon.png',
      altText: 'Time tracking',
      translationKey: 'attendanceSystem.timeTracking',
      active: true,
    },
    {
      iconSrc: '/path/to/time-sheet-icon.png',
      altText: 'Time sheet',
      translationKey: 'attendanceSystem.timeSheet',
    },
  ];

  const handleLogout = () => {
    console.log('Logout logic here');
  };

  return (
    <div className={styles.pageContainer}>
      <Header
        titleKey="attendanceSystem.title"
        navigationItems={navigationItems}
        onLogout={handleLogout}
      />
      <div className={styles.card}>
        <Text
          translationKey="attendanceSystem.userInfo"
          className={styles.userInfo}
          as="div"
        />
        <div className={styles.dateInfo}>
          <Text
            translationKey="attendanceSystem.currentDate"
            className={styles.currentDate}
          />
          <Text
            translationKey="attendanceSystem.currentTime"
            className={styles.currentTime}
          />
        </div>
        <div className={styles.actionButtons}>
          <Button title={t('attendanceSystem.checkIn')} />
          <Button title={t('attendanceSystem.checkedOut')} />
        </div>
      </div>
    </div>
  );
};

export default AttendanceSystem;
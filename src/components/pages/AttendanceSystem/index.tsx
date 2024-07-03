import React from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '@components/atoms/Button';
import styles from './index.module.css';

const AttendanceSystem = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <div className={styles.userBar}>
          <img className={styles.userIcon} src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.user_icon')} />
          <span className={styles.userName}>{t('AttendanceSystem.jack_daniel_developer')}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.dateInfo}>
            <img className={styles.calendarIcon} src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.calendar_icon')} />
            <span className={styles.dateText}>{t('AttendanceSystem.wednesday_27_september_2023')}</span>
          </div>
          <span className={styles.timeText}>08:30:20</span>
          <div className={styles.buttonGroup}>
            <Button className={styles.checkInButton}>{t('AttendanceSystem.check_in')}</Button>
            <Button className={styles.checkedOutButton}>{t('AttendanceSystem.checked_out')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSystem;
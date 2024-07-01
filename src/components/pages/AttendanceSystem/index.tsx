import React from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '@components/atoms/Button';
import styles from './index.module.css';

function AttendanceSystem(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.header}>
          <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.no_image_alt')} />
          <span>{t('AttendanceSystem.employee_info', { name: 'Jack Daniel', role: 'Developer' })}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.dateInfo}>
            <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.no_image_alt')} />
            <span>{t('AttendanceSystem.current_date', { date: 'Wednesday, 27 September, 2023' })}</span>
          </div>
          <span className={styles.timeDisplay}>{t('AttendanceSystem.current_time', { time: '08:30:20' })}</span>
          <div className={styles.buttonGroup}>
            <Button buttonType="attendanceCheckIn">{t('AttendanceSystem.check_in')}</Button>
            <Button buttonType="attendanceCheckedOut">{t('AttendanceSystem.checked_out')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceSystem;
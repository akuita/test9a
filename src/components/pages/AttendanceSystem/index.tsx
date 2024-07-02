import React from 'react';
import { useTranslation } from 'next-i18next';
import CustomButton from '@components/atoms/Button/CustomButton';
import styles from './index.module.css';

const AttendanceSystem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <div className={styles.header}>
          <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.logo_alt')} className={styles.logo} />
          <span className={styles.userName}>{t('AttendanceSystem.user_info', { name: 'Jack Daniel', role: 'Developer' })}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.dateInfo}>
            <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.calendar_icon_alt')} className={styles.calendarIcon} />
            <span className={styles.dateText}>{t('AttendanceSystem.current_date', { date: 'Wednesday, 27 September, 2023' })}</span>
          </div>
          <span className={styles.timeText}>08:30:20</span>
          <div className={styles.buttons}>
            <CustomButton variant="checkIn">{t('AttendanceSystem.check_in')}</CustomButton>
            <CustomButton variant="checkedOut">{t('AttendanceSystem.checked_out')}</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSystem;
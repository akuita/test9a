import React from 'react'
import { useTranslation } from 'next-i18next'
import { Button } from '@components/atoms/Button'
import styles from './index.module.css'

const AttendanceSystem = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.header}>
          <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.calendar_icon')} />
          <span>{t('AttendanceSystem.employee_info', { name: 'Jack Daniel', role: 'Developer' })}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.dateInfo}>
            <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.logo')} />
            <span>{t('AttendanceSystem.current_date', { date: 'Wednesday, 27 September, 2023' })}</span>
          </div>
          <span className={styles.timeDisplay}>{t('AttendanceSystem.current_time', { time: '08:30:20' })}</span>
          <div className={styles.buttonGroup}>
            <Button className={styles.checkInButton} title={t('AttendanceSystem.check_in')} />
            <Button className={styles.checkedOutButton} title={t('AttendanceSystem.checked_out')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceSystem
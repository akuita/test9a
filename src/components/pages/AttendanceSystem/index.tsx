import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Button } from '@components/atoms/Button'
import { ToastContainer } from '@components/atoms/Toast'
import styles from './index.module.css'

function AttendanceSystem(): JSX.Element {
  const { t } = useTranslation()
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

  // Update the current time every second
  setTimeout(() => setCurrentTime(new Date().toLocaleTimeString()), 1000)

  const handleCheckIn = () => {
    // Placeholder for check-in logic
    console.log('Checked in at:', currentTime)
  }

  const handleCheckOut = () => {
    // Placeholder for check-out logic
    console.log('Checked out at:', currentTime)
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <div className={styles.userBar}>
          <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.user_icon')} />
          <span>{t('AttendanceSystem.user_info', { name: 'Jack Daniel', role: 'Developer' })}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.dateInfo}>
            <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.calendar_icon')} />
            <span>{t('AttendanceSystem.date', { date: 'Wednesday, 27 September, 2023' })}</span>
          </div>
          <span className={styles.time}>{currentTime}</span>
          <div className={styles.buttons}>
            <Button className={styles.checkInButton} onClick={handleCheckIn}>
              {t('AttendanceSystem.check_in')}
            </Button>
            <Button className={styles.checkOutButton} onClick={handleCheckOut}>
              {t('AttendanceSystem.checked_out')}
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AttendanceSystem
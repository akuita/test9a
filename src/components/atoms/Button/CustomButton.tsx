import React from 'react';
import { useTranslation } from 'next-i18next';
import clsx from 'clsx';
import styles from './index.module.css';

export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'checkIn' | 'checkedOut';
}

const CustomButton: React.FC<CustomButtonProps> = ({ variant = 'checkIn', ...props }) => {
  const { t } = useTranslation();

  const buttonClass = clsx(styles.button, {
    [styles.checkIn]: variant === 'checkIn',
    [styles.checkedOut]: variant === 'checkedOut',
  });

  const buttonText = variant === 'checkIn' ? t('button.checkIn') : t('button.checkedOut');

  return (
    <button {...props} className={buttonClass}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
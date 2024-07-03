import React from 'react';
import Image from 'next/image';
import styles from './index.module.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string;
  altText: string;
}

const IconButton: React.FC<IconButtonProps> = ({ iconSrc, altText, ...rest }) => {
  return (
    <button className={styles.iconButton} {...rest}>
      <Image src={iconSrc} alt={altText} width={24} height={24} />
    </button>
  );
};

export default IconButton;
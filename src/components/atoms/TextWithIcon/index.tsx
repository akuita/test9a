import React from 'react';
import Image from 'next/image';
import Text from '../Text';
import styles from './index.module.css';

export interface TextWithIconProps {
  iconSrc: string;
  altText: string;
  translationKey: string;
  iconSize?: { width: number; height: number };
}

const TextWithIcon: React.FC<TextWithIconProps> = ({
  iconSrc,
  altText,
  translationKey,
  iconSize = { width: 16, height: 16 },
}) => {
  return (
    <div className={styles.textWithIcon}>
      <Image src={iconSrc} alt={altText} width={iconSize.width} height={iconSize.height} />
      <Text translationKey={translationKey} />
    </div>
  );
};

export default TextWithIcon;
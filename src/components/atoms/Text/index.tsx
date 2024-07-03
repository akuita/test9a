import React from 'react';
import { useTranslation } from 'next-i18next';

export interface TextProps {
  translationKey: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Text: React.FC<TextProps> = ({ translationKey, className, as: Component = 'span' }) => {
  const { t } = useTranslation();
  return <Component className={className}>{t(translationKey)}</Component>;
};

export default Text;
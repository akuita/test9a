import React, { useMemo } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTranslation } from 'next-i18next'
import styles from './index.module.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  linkTo?: string
  buttonType?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed'
  style?: React.CSSProperties
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  const { style, ...restProps } = props
  const { buttonType = 'primary', title, className, children, linkTo, ...rest } = restProps
  const { t } = useTranslation()

  const component = useMemo(() => {
    let component = children
    if (typeof children === 'string' || title) {
      component = <span>{children || title}</span>
    }

    if (linkTo) {
      return (
        <a href={linkTo} className={styles.link_tag}>
          {component}
        </a>
      )
    }
    return component
  }, [linkTo, children, title])

  return ( // Use t function to translate button text and allow style override
    <button ref={ref} style={style} className={clsx(className, styles.button, styles[buttonType], { [styles.rounded]: buttonType === 'primary' })} {...rest}>
      {t(component)}
    </button>
  )
})

Button.propTypes = {
  style: PropTypes.object,
  // ... define other prop types if needed
}

Button.defaultProps = {
  style: {},
}

export default Button
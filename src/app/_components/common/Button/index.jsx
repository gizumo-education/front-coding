import clsx from 'clsx'
import styles from './index.module.scss'

export const Button = ({ children, type = 'button', className, ...props }) => {
  return (
    <button type={type} className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  )
}

import clsx from 'clsx'
import styles from './index.module.scss'

export const LinkButton = ({ href = '', text }) => {
  return (
    <a href={href} className={clsx(styles['link-button'])}>
      {text}
    </a>
  )
}

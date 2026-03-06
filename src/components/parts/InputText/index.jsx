import clsx from 'clsx'
import styles from './index.module.scss'

export const InputText = ({ name, placeholder }) => {
  return (
    <input
      type='text'
      name={name}
      placeholder={placeholder}
      className={clsx(styles['input-text'])}
    />
  )
}

import clsx from 'clsx'
import styles from './index.module.scss'

export const SearchButton = ({ name, isIconShow, type = '', text }) => {
  return (
    <button
      name={name}
      className={`${clsx(styles['search-button'])}
        ${isIconShow ? clsx(styles['search-icon']) : null}`}
      type={type}
    >
      {text}
    </button>
  )
}

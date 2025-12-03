import styles from './index.module.scss'
import PropTypes from 'prop-types'

export const SearchButton = ({ text = '検索する', type = 'submit' }) => {
  return (
    <button type={type} className={styles['search-button']}>
      <img
        className={styles['button-icon']}
        src='/form/search-icon.svg'
        alt=''
        width={18}
        height={18}
      />
      <span>{text}</span>
    </button>
  )
}

SearchButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

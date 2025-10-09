import styles from './index.module.scss'
import PropTypes from 'prop-types'

export const MoreButton = ({ text, href = '/' }) => {
  return (
    <a href={href} className={styles['more-button']}>
      <span>{text}</span>
    </a>
  )
}

MoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

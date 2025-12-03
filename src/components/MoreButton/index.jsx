import styles from './index.module.scss'
import PropTypes from 'prop-types'

export const MoreButton = ({ children, href = '/', className = '' }) => {
  return (
    <a href={href} className={styles['more-button']}>
      <span className={className}>{children}</span>
    </a>
  )
}

MoreButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
}

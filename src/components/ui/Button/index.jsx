import styles from './index.module.scss'

export const Button = ({
  text,
  icon,
  isFullWidth = false,
  size = 'medium',
}) => {
  return (
    <button
      type='button'
      className={`
        ${styles.button}
        ${styles[size]}
        ${isFullWidth ? styles['full-width'] : ''}`}
    >
      {icon && (
        <span
          className={styles.icon}
          style={{
            maskImage: `url(${icon})`,
            WebkitMaskImage: `url(${icon})`,
          }}
        />
      )}
      <span className={styles.text}>{text}</span>
    </button>
  )
}

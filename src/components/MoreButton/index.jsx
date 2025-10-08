import styles from './index.module.scss'

export const MoreButton = () => {
  return (
    <a href='/' className={styles['more-button']}>
      <span>新着求人一覧をもっと見る</span>
    </a>
  )
}

import styles from './index.module.scss'

export const KeyVisual = () => {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <p className={styles['text']}>
          現在の求人掲載数:<span className={styles['span']}>2,320</span>件
        </p>
      </div>
    </section>
  )
}

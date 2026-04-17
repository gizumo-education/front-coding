import styles from './index.module.scss'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-inner']}>
        <div className={styles['hero-container']}>
          <img
            src='/images/keyVisualLabel_sp.png'
            alt='no.1'
            width='149.54'
            height='73.36'
            className={styles.label}
          />
          <h1 className={styles.title}>医療事務求人を探すならギズジョブ</h1>
          <div className={styles['job-count']}>
            <p className={styles['job-count-text']}>
              現在の求人掲載数：
              <span className={styles['job-count-num']}>2,320</span>件
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

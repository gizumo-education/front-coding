import styles from './index.module.scss'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-inner']}>
        <div className={styles['hero-container']}>
          <picture>
            <source
              srcSet='/images/keyVisualLabel_sp.png'
              width='150'
              height='73'
              media='(max-width: 767px)'
              className={styles.label}
            />
            <img
              src='/images/keyVisualLabel_pc.png'
              width='342'
              height='169'
              alt='no.1'
              className={styles.label}
            />
          </picture>
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

import styles from './index.module.scss'

export const Keyvisual = () => {
  return (
    <section className={styles['keyvisual']}>
      <img
        className={styles['background-img']}
        src='/img/group1.png'
        width={400}
        height={270}
        alt=''
      />
      <img
        className={styles['no1-badge']}
        src='/img/keyvisual.png'
        width={149}
        height={73}
        alt='no1-badge'
      />
      <h1 className={styles['giz-job']}>医療事務求人を探すならギズジョブ</h1>
      <div className={styles['job-count']}>
        <p className={styles['job-count-text']}>
          現在の求人掲載数：
          <span className={styles['job-count-number']}>2,320</span>件
        </p>
      </div>
    </section>
  )
}

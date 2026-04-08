import styles from './index.module.scss'

export const JobOffer = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>新着求人</h2>
        <ul className={styles.list}>
          <li className={styles['list-item']}>
            <div className={styles.carousel}>
              <img
                src='/img/job_01.jpg'
                alt='求人情報01'
                className={styles['job-img']}
                width={370}
                height={208}
              />
              <button className={`${styles.arrow} ${styles.left}`}></button>
              <button className={`${styles.arrow} ${styles.right}`}></button>
            </div>
            <h3 className={styles['job-title']}>
              平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
            </h3>
            <div className={styles['text-container']}>
              <div className={styles['text-box']}>
                <p className={styles.category}>給与</p>
                <p className={styles.content}>月給 148,000円～</p>
              </div>
              <div className={styles['text-box']}>
                <p className={styles.category}>所在地</p>
                <p className={styles.content}>三重県伊勢市</p>
              </div>
              <div className={styles['text-box']}>
                <p className={styles.category}>最寄駅</p>
                <p className={styles.content}>伊勢市駅 徒歩15分</p>
              </div>
            </div>
            <button className={styles['is-search']}>
              新着求人一覧をもっと見る
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}

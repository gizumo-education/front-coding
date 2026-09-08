import styles from './index.module.scss'

export const Recruitment = () => {
  return (
    <section className={styles.recruitment}>
      <h2 className={styles.title}>新着求人</h2>
      <div className={styles.card}>
        <img
          className={styles.image}
          src='/recruitment.jpg'
          alt='医療事務求人'
          width={370}
          height={208}
        />
        <h3 className={styles['job-title']}>
          平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
        </h3>
        <dl className={styles.info}>
          <div className={styles.row}>
            <dt className={styles.label}>給与</dt>
            <dd className={styles.value}>月給 148,000円〜</dd>
          </div>
          <div className={styles.row}>
            <dt className={styles.label}>所在地</dt>
            <dd className={styles.value}>三重県伊勢市</dd>
          </div>
          <div className={styles.row}>
            <dt className={styles.label}>最寄駅</dt>
            <dd className={styles.value}>伊勢市駅 徒歩15分</dd>
          </div>
        </dl>
        <a href='/' className={styles.button}>
          新着求人一覧をもっと見る
        </a>
      </div>
    </section>
  )
}

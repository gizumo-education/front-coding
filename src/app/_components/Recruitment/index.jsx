import styles from './index.module.scss'

export const Recruitment = () => {
  return (
    <section className={styles.recruitment}>
      <div className={styles['recruitment-inner']}>
        <h2 className={styles['recruitment-title']}>新着求人</h2>

        <article className={styles.card}>
          <div className={styles['card-photo-wrap']}>
            <img
              className={styles['card-photo']}
              src='/img/Recruitment.png'
              alt='新着求人のイメージ写真'
              width='370'
              height='200'
            />

            <span className={`${styles.arrow} ${styles['arrow-left']}`} />
            <span className={`${styles.arrow} ${styles['arrow-right']}`} />
          </div>

          <p className={styles['card-title']}>
            平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
          </p>

          <dl className={styles.table}>
            <div className={styles.row}>
              <dt className={styles.term}>給与</dt>
              <dd className={styles.desc}>月給 148,000円〜</dd>
            </div>
            <div className={styles.row}>
              <dt className={styles.term}>所在地</dt>
              <dd className={styles.desc}>三重県伊勢市</dd>
            </div>
            <div className={styles.row}>
              <dt className={styles.term}>最寄駅</dt>
              <dd className={styles.desc}>伊勢市駅 徒歩15分</dd>
            </div>
          </dl>
        </article>

        <button type='button' className={styles['more-button']}>
          新着求人一覧をもっと見る
        </button>
      </div>
    </section>
  )
}

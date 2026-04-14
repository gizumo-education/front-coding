import styles from './index.module.scss'

export const JobOffer = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>新着求人</h2>
        <ul className={`${styles.list} ${styles.carousel}`}>
          <li className={styles['list-item']}>
            <img
              src='/img/job_01.jpg'
              alt='求人情報01'
              className={styles['job-img']}
              width={1000}
              height={660}
            />
            <button className={`${styles.arrow} ${styles.left}`}></button>
            <button className={`${styles.arrow} ${styles.right}`}></button>
            <h3 className={styles['job-title']}>
              平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
            </h3>
            <div className={styles['text-container']}>
              <dl className={styles['text-box']}>
                <dt className={styles.category}>給与</dt>
                <dd className={styles.content}>月給 148,000円～</dd>
              </dl>
              <dl className={styles['text-box']}>
                <dt className={styles.category}>所在地</dt>
                <dd className={styles.content}>三重県伊勢市</dd>
              </dl>
              <dl className={styles['text-box']}>
                <dt className={styles.category}>最寄駅</dt>
                <dd className={styles.content}>伊勢市駅 徒歩15分</dd>
              </dl>
            </div>
          </li>
          <li className={styles['list-item']}>
            <img
              src='/img/job_02.jpg'
              alt='求人情報02'
              className={styles['job-img']}
              width={1000}
              height={665}
            />
            <button className={`${styles.arrow} ${styles.left}`}></button>
            <button className={`${styles.arrow} ${styles.right}`}></button>
            <h3 className={styles['job-title']}>
              平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
            </h3>
            <div className={styles['text-container']}>
              <dl className={styles['text-box']}>
                <dt className={styles.category}>給与</dt>
                <dd className={styles.content}>月給 148,000円～</dd>
              </dl>
              <dl className={styles['text-box']}>
                <dt className={styles.category}>所在地</dt>
                <dd className={styles.content}>三重県伊勢市</dd>
              </dl>
              <dl className={styles['text-box']}>
                <dt className={styles.category}>最寄駅</dt>
                <dd className={styles.content}>伊勢市駅 徒歩15分</dd>
              </dl>
            </div>
          </li>
          <li className={styles['list-item']}>
            <img
              src='/img/job_03.jpg'
              alt='求人情報03'
              className={styles['job-img']}
              width={1000}
              height={654}
            />
            <button className={`${styles.arrow} ${styles.left}`}></button>
            <button className={`${styles.arrow} ${styles.right}`}></button>
            <h3 className={styles['job-title']}>
              平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
            </h3>
            <div className={styles['text-container']}>
              <dl className={styles['text-box']}>
                <dt className={styles.category}>給与</dt>
                <dd className={styles.content}>月給 148,000円～</dd>
              </dl>
              <dl className={styles['text-box']}>
                <dt className={styles.category}>所在地</dt>
                <dd className={styles.content}>三重県伊勢市</dd>
              </dl>
              <dl className={styles['text-box']}>
                <dt className={styles.category}>最寄駅</dt>
                <dd className={styles.content}>伊勢市駅 徒歩15分</dd>
              </dl>
            </div>
          </li>
          <li className={styles['list-item']}>
            <img
              src='/img/job_04.jpg'
              alt='求人情報04'
              className={styles['job-img']}
              width={1000}
              height={661}
            />
            <button className={`${styles.arrow} ${styles.left}`}></button>
            <button className={`${styles.arrow} ${styles.right}`}></button>
            <h3 className={styles['job-title']}>
              平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
            </h3>
            <div className={styles['text-container']}>
              <dl className={styles['text-box']}>
                <dt className={styles.category}>給与</dt>
                <dd className={styles.content}>月給 148,000円～</dd>
              </dl>
              <dl className={styles['text-box']}>
                <dt className={styles.category}>所在地</dt>
                <dd className={styles.content}>三重県伊勢市</dd>
              </dl>
              <dl className={styles['text-box']}>
                <dt className={styles.category}>最寄駅</dt>
                <dd className={styles.content}>伊勢市駅 徒歩15分</dd>
              </dl>
            </div>
          </li>
        </ul>
        <a href='/' className={styles['is-search']}>
          新着求人一覧をもっと見る
        </a>
      </div>
    </section>
  )
}

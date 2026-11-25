import styles from './index.module.scss'

export const NewJob = () => {
  return (
    <section className={styles['job']}>
      <h2 className={styles['job-title']}>新着求人</h2>
      <div className={styles['job-slider']}>
        <button
          type='button'
          aria-label='前の求人'
          className={styles['job-btn-left']}
        >
          <img
            src='/icon/arrow-icon.svg'
            width={7}
            height={14}
            alt='左矢印'
            className={styles['job-btn-left-arrow']}
          />
        </button>
        <div className={styles['job-container']}>
          <img
            src='/img/jobcard.png'
            width={370}
            height={208}
            alt='新着求人ジョブ1写真'
            className={styles['job-img']}
          />
          <h3 className={styles['job-jobtitle']}>
            平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
          </h3>
          <dl className={styles['job-info']}>
            <dt className={styles['job-info-list']}>給与</dt>
            <dd className={styles['job-info-detail']}>月給 148,000円～</dd>
            <dt className={styles['job-info-list']}>所在地</dt>
            <dd className={styles['job-info-detail']}>三重県伊勢市</dd>
            <dt className={styles['job-info-list']}>最寄駅</dt>
            <dd className={styles['job-info-detail']}>伊勢市駅 徒歩15分</dd>
          </dl>
        </div>
        <button
          type='button'
          aria-label='次の求人'
          className={styles['job-btn-right']}
        >
          <img
            src='/icon/arrow-icon.svg'
            width={7}
            height={14}
            alt='右矢印'
            className={styles['job-btn-right-arrow']}
          />
        </button>
      </div>
      <a href='/' className={styles['job-submit']}>
        新着求人一覧をもっと見る
      </a>
    </section>
  )
}

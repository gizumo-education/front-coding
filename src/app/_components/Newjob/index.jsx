import styles from './index.module.scss'

export const NewJob = () => {
  return (
    <section className={styles['job']}>
      <h1 className={styles['job-title']}>新着求人</h1>
      <button className={styles['job-btn-left']}>
        <img
          className={styles['job-btn-left-arrow']}
          width={8}
          height={15}
          src='/img/miniarrow.png'
          alt='左'
        />
      </button>
      <img
        className={styles['job-img']}
        src='/img/newjob.png'
        alt=''
        width={370}
        height={208}
      />
      <button className={styles['job-btn-right']}>
        <img
          className={styles['job-btn-right-arrow']}
          width={8}
          height={15}
          src='/img/miniarrow.png'
          alt='右'
        />
      </button>
      <h2 className={styles['job-jobtitle']}>
        平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
      </h2>
      <div className={styles['job-info']}>
        <dl className={styles['job-info-item']}>
          <dt className={styles['job-info-item-list']}>給与</dt>
          <dd className={styles['job-info-item-name']}>月給 148,000円～</dd>
          <dt className={styles['job-info-item-list']}>所在地</dt>
          <dd className={styles['job-info-item-name']}>三重県伊勢市</dd>
          <dt className={styles['job-info-item-list']}>最寄駅</dt>
          <dd className={styles['job-info-item-name']}>伊勢市駅 徒歩15分</dd>
        </dl>
      </div>
      <a href='/' className={styles['job-submit']}>
        新着求人一覧をもっと見る
      </a>
    </section>
  )
}

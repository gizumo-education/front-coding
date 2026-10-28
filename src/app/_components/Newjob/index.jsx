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
          src='/images/miniarrow.png'
          alt='左'
        />
      </button>
      <img
        className={styles['job-img']}
        src='/images/newjob.png'
        alt=''
        width={370}
        height={208}
      />
      <button className={styles['job-btn-right']}>
        <img
          className={styles['job-btn-right-arrow']}
          width={8}
          height={15}
          src='/images/miniarrow.png'
          alt='左'
        />
      </button>
      <h2 className={styles['job-jobtitle']}>
        平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
      </h2>
      <div className={styles['job-info']}>
        <ul className={styles['job-info-category']}>
          <li className={styles['job-info-category-list']}>給与</li>
          <li className={styles['job-info-category-list']}>所在地</li>
          <li className={styles['job-info-category-list']}>最寄駅</li>
        </ul>
        <ul className={styles['job-info-item']}>
          <li className={styles['job-info-item-list']}>月給 148,000円～</li>
          <li className={styles['job-info-item-list']}>三重県伊勢市</li>
          <li className={styles['job-info-item-list']}>伊勢市駅 徒歩15分</li>
        </ul>
      </div>
      <button className={styles['job-submit']} type='submit'>
        新着求人一覧をもっと見る
      </button>
    </section>
  )
}

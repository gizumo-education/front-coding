import styles from './index.module.scss'

const jobs = [
  {
    id: 1,
    image: '/img/jobcard-1.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円～',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 2,
    image: '/img/jobcard-2.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円～',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 3,
    image: '/img/jobcard-3.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円～',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 4,
    image: '/img/jobcard-4.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円～',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
]

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

        <div className={styles['job-list']}>
          {jobs.map((job) => (
            <div key={job.id} className={styles['job-container']}>
              <img
                src={job.image}
                width={370}
                height={208}
                alt=''
                className={styles['job-img']}
              />
              <h3 className={styles['job-jobtitle']}>{job.title}</h3>
              <dl className={styles['job-info']}>
                <dt className={styles['job-info-list']}>給与</dt>
                <dd className={styles['job-info-detail']}>{job.salary}</dd>
                <dt className={styles['job-info-list']}>所在地</dt>
                <dd className={styles['job-info-detail']}>{job.location}</dd>
                <dt className={styles['job-info-list']}>最寄駅</dt>
                <dd className={styles['job-info-detail']}>{job.station}</dd>
              </dl>
            </div>
          ))}
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

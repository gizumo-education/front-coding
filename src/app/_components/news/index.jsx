'use client'

import styles from './index.module.scss'

import { MoreButton } from '@/components/MoreButton'

const jobs = [
  {
    id: 1,
    imgSp: '/news/work1.png',
    imgPc: '/news/work1.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salaryLabel: '月給',
    salaryDetail: '月給 148,000円～',
    placeLabel: '所在地',
    placeDetail: '三重県伊勢市',
    stationLabel: '最寄駅',
    stationDetail: '伊勢市駅 徒歩15分',
  },
  {
    id: 2,
    imgSp: '/news/work2.png',
    imgPc: '/news/work2.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salaryLabel: '月給',
    salaryDetail: '月給 148,000円～',
    placeLabel: '所在地',
    placeDetail: '三重県伊勢市',
    stationLabel: '最寄駅',
    stationDetail: '伊勢市駅 徒歩15分',
  },
  {
    id: 3,
    imgSp: '/news/work3.png',
    imgPc: '/news/work3.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salaryLabel: '月給',
    salaryDetail: '月給 148,000円～',
    placeLabel: '所在地',
    placeDetail: '三重県伊勢市',
    stationLabel: '最寄駅',
    stationDetail: '伊勢市駅 徒歩15分',
  },
  {
    id: 4,
    imgSp: '/news/work4.png',
    imgPc: '/news/work4.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salaryLabel: '月給',
    salaryDetail: '月給 148,000円～',
    placeLabel: '所在地',
    placeDetail: '三重県伊勢市',
    stationLabel: '最寄駅',
    stationDetail: '伊勢市駅 徒歩15分',
  },
]

export const News = ({ id }) => {
  return (
    <section id={id} className={styles['news']}>
      <div className='inner'>
        <h2 className={styles['news-title']}>新着求人</h2>

        <div className={styles['news-container']}>
          <div className={styles['news-grid']}>
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`${styles['job-card']} ${job.id !== 1 ? styles['job-card-hidden-mobile'] : ''}`}
              >
                <picture>
                  <source srcSet={job.imgSp} media='(max-width: 767px)' />
                  <img
                    src={job.imgPc}
                    alt={''}
                    width={job.width}
                    height={job.height}
                  />
                </picture>

                <h2 className={styles['job-title']}>{job.title}</h2>
                <div className={styles['job-details']}>
                  <div className={styles['detail-item']}>
                    <p className={styles['label']}>{job.salaryLabel}</p>
                    <p className={styles['text']}>{job.salaryDetail}</p>
                  </div>
                  <div className={styles['detail-item']}>
                    <p className={styles['label']}>{job.placeLabel}</p>
                    <p className={styles['text']}>{job.placeDetail}</p>
                  </div>
                  <div className={styles['detail-item']}>
                    <p className={styles['label']}>{job.stationLabel}</p>
                    <p className={styles['text']}>{job.stationDetail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles['nav-button-prev']}>
            <svg className={styles['nav-icon']} viewBox='0 0 27 44'>
              <path d='M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z' />
            </svg>
          </div>
          <div className={styles['nav-button-next']}>
            <svg className={styles['nav-icon']} viewBox='0 0 27 44'>
              <path d='M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z' />
            </svg>
          </div>
        </div>

        <div className={styles['news-button']}>
          <MoreButton href='/'>新着求人一覧をもっと見る</MoreButton>
        </div>
      </div>
    </section>
  )
}

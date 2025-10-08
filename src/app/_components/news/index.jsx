'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './index.module.scss'

import { MoreButton } from '@/components/MoreButton'

const jobs = [
  {
    id: 1,
    img: '/news/job1-sp.png',
    width: 370,
    height: 208,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salaryLabel: '月給',
    salaryDetail: '月給 148,000円～',
    placeLabel: '所在地',
    placeDetail: '三重県伊勢市',
    stationLabel: '最寄り駅',
    stationDetail: '伊勢市駅 徒歩15分',
  },
  {
    id: 2,
    img: '/news/job1-sp.png',
    width: 370,
    height: 208,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salaryLabel: '月給',
    salaryDetail: '月給 148,000円～',
    placeLabel: '所在地',
    placeDetail: '三重県伊勢市',
    stationLabel: '最寄り駅',
    stationDetail: '伊勢市駅 徒歩15分',
  },
  {
    id: 3,
    img: '/news/job1-sp.png',
    width: 370,
    height: 208,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salaryLabel: '月給',
    salaryDetail: '月給 148,000円～',
    placeLabel: '所在地',
    placeDetail: '三重県伊勢市',
    stationLabel: '最寄り駅',
    stationDetail: '伊勢市駅 徒歩15分',
  },
  {
    id: 4,
    img: '/news/job1-sp.png',
    width: 370,
    height: 208,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salaryLabel: '月給',
    salaryDetail: '月給 148,000円～',
    placeLabel: '所在地',
    placeDetail: '三重県伊勢市',
    stationLabel: '最寄り駅',
    stationDetail: '伊勢市駅 徒歩15分',
  },
]

export const News = () => {
  return (
    <section className={styles['news']}>
      <h2 className={styles['news-title']}>新着求人</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        className={styles['news-swiper']}
      >
        {jobs.map((job) => (
          <SwiperSlide key={job.id}>
            <div className={styles['job-card']}>
              <img
                src={job.img}
                alt={job.title}
                className={styles['job-image']}
                width={job.width}
                height={job.height}
              />
              <h3 className={styles['job-title']}>{job.title}</h3>
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
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles['news-button']}>
        <MoreButton />
      </div>
    </section>
  )
}

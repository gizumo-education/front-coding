'use client'

import { Button } from '@/components/ui/Button'
import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const JOBS_DATA = [
  {
    id: 1,
    photo: '/images/LatestJobs1.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 2,
    photo: '/images/LatestJobs2.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 3,
    photo: '/images/LatestJobs3.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 4,
    photo: '/images/LatestJobs4.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 5,
    photo: '/images/LatestJobs1.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
]

export const LatestJobs = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>新着求人</h2>
      <div className={styles['slider-wrapper']}>
        <button
          type='button'
          className={`${styles['arrow-button']} ${styles.prev}`}
        ></button>
        <button
          type='button'
          className={`${styles['arrow-button']} ${styles.next}`}
        ></button>
        <Swiper
          modules={[Navigation]}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          navigation={{
            prevEl: `.${styles.prev}`,
            nextEl: `.${styles.next}`,
          }}
          breakpoints={{
            // PCサイズの時の調整
            768: {
              slidesPerView: 4, // PCでは4枚並べる
              centeredSlides: false,
            },
          }}
        >
          {JOBS_DATA.map((job) => (
            <SwiperSlide key={job.id}>
              <div className={styles['jobs-card']}>
                <img
                  src={job.photo}
                  alt={job.title}
                  width='280'
                  height='200'
                  className={styles.image}
                />
                <h3 className={styles['jobs-card-title']}>{job.title}</h3>
                <dl className={styles['jobs-info-list']}>
                  <div className={styles['jobs-info-item']}>
                    <dt className={styles['jobs-info-label']}>給与</dt>
                    <dd className={styles['jobs-info-data']}>{job.salary}</dd>
                  </div>

                  <div className={styles['jobs-info-item']}>
                    <dt className={styles['jobs-info-label']}>所在地</dt>
                    <dd className={styles['jobs-info-data']}>{job.location}</dd>
                  </div>

                  <div className={styles['jobs-info-item']}>
                    <dt className={styles['jobs-info-label']}>最寄駅</dt>
                    <dd className={styles['jobs-info-data']}>{job.station}</dd>
                  </div>
                </dl>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Button text='新着求人一覧をもっと見る' isFullWidth={true} />
    </section>
  )
}

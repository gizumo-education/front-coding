'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import styles from './style.module.scss'

const NEW_JOBS_DATA = [
  {
    id: 1,
    title: '平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
    imgSrc: '/images/poster1.jpg',
  },
  {
    id: 2,
    title: '平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
    imgSrc: '/images/poster2.jpg',
  },
  {
    id: 3,
    title: '平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
    imgSrc: '/images/poster3.jpg',
  },
  {
    id: 4,
    title: '平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
    imgSrc: '/images/poster4.jpg',
  },
  {
    id: 6,
    title: '平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
    imgSrc: '/images/poster1.jpg',
  },
]

export const NewJob = () => {
  const [swiper, setSwiper] = useState(null)
  return (
    <div id='NewJob' className={styles['new-job']}>
      <h2 className={styles['new-job-sub-title']}>新着求人</h2>

      <div className={styles['slider-wrapper']}>
        <button
          className={styles['prev-button']}
          type='button'
          aria-label='前へ'
          onClick={() => swiper?.slidePrev()}
        >
          ＜
        </button>

        <Swiper
          onSwiper={setSwiper}
          modules={[Navigation]}
          className={styles['new-job-content']}
          loop
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {NEW_JOBS_DATA.map((job) => (
            <SwiperSlide key={job.id}>
              <div className={styles['content']}>
                <div className={styles['job-img-wrap']}>
                  <img
                    src={job.imgSrc}
                    alt='求人イメージ'
                    className={styles['job-img']}
                    width={1000}
                    height={685}
                  />
                </div>
                <div className={styles['job-info']}>
                  <h3 className={styles['job-card-title']}>{job.title}</h3>
                  <dl className={styles['job-meta']}>
                    <div className={styles['meta-row']}>
                      <dt className={styles['label-salary']}>給与</dt>
                      <dd className={styles['meta-text']}>{job.salary}</dd>
                    </div>
                    <div className={styles['meta-row']}>
                      <dt className={styles['label-location']}>所在地</dt>
                      <dd className={styles['meta-text']}>{job.location}</dd>
                    </div>
                    <div className={styles['meta-row']}>
                      <dt className={styles['label-station']}>最寄駅</dt>
                      <dd className={styles['meta-text']}>{job.station}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={styles['next-button']}
          type='button'
          aria-label='次へ'
          onClick={() => swiper?.slideNext()}
        >
          ＞
        </button>
      </div>
      <button className={styles['new-job-button']} type='button'>
        新着求人一覧をもっと見る
      </button>
    </div>
  )
}

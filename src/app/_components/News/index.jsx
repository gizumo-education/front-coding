'use client'

import clsx from 'clsx'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './index.module.scss'

import 'swiper/css'

const jobs = [
  {
    id: 1,
    imageSp: '/img/news.jpg',
    imagePc: '/img/pc/news-01.svg',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円～',
    place: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 2,
    imageSp: '/img/news-02.svg',
    imagePc: '/img/pc/news-02.svg',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円～',
    place: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 3,
    imageSp: '/img/news-03.svg',
    imagePc: '/img/pc/news-03.svg',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円～',
    place: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 4,
    imageSp: '/img/news-04.svg',
    imagePc: '/img/pc/news-04.svg',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円～',
    place: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
]

export const News = () => {
  return (
    <section className={styles['news-wrapper']}>
      <div className={styles['news-inner']}>
        <h2 className={styles['news-title']}>新着求人</h2>
        <div className={styles['news-slider']}>
          <Swiper
            className={styles.swiper}
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              prevEl: `.${styles.prev}`,
              nextEl: `.${styles.next}`,
            }}
            breakpoints={{
              768: { slidesPerView: 4, spaceBetween: 16, slidesPerGroup: 1 },
            }}
          >
            {jobs.map((job) => (
              <SwiperSlide key={job.id}>
                <picture className={styles['news-picture']}>
                  <source
                    media='(min-width: 768px)'
                    srcSet={job.imagePc}
                    width={280}
                    height={200}
                  />
                  <img
                    src={job.imageSp}
                    alt='新着求人'
                    width={370}
                    height={208}
                    className={styles['news-image']}
                  />
                </picture>
                <p className={styles['news-sub-title']}>{job.title}</p>
                <dl className={styles['news-dl']}>
                  <dt className={styles['news-salary']}>給与</dt>
                  <dd className={styles['news-salary-desc']}>{job.salary}</dd>
                  <dt className={styles['news-place']}>所在地</dt>
                  <dd className={styles['news-place-desc']}>{job.place}</dd>
                  <dt className={styles['news-station']}>最寄駅</dt>
                  <dd className={styles['news-station-desc']}>{job.station}</dd>
                </dl>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type='button'
            className={clsx(styles.arrow, styles.prev)}
            aria-label='前の求人へ'
          />
          <button
            type='button'
            className={clsx(styles.arrow, styles.next)}
            aria-label='次の求人へ'
          />
        </div>
        <a href='/' className={styles['submit-btn']}>
          新着求人一覧をもっと見る
        </a>
      </div>
    </section>
  )
}

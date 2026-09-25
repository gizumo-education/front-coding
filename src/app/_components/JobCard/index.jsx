'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import clsx from 'clsx'

import 'swiper/css'

import styles from './index.module.scss'
import { jobCards } from './data'

const swiperOptions = {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  breakpoints: {
    768: { spaceBetween: 20 },
  },
}

export const JobCard = () => {
  const swiperRef = useRef(null)

  return (
    <section id='job-cards' className={styles['job-cards']}>
      <h2 className={styles['job-cards-heading']}>新着求人</h2>
      <div className={styles['job-cards-slider']}>
        <button
          type='button'
          className={clsx(styles['job-cards-arrow'], styles.prev)}
          aria-label='前の求人'
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <Swiper
          className={styles['job-cards-list']}
          tag='ul'
          {...swiperOptions}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {jobCards.map((job, index) => (
            <SwiperSlide
              key={index}
              className={styles['job-cards-item']}
              tag='li'
            >
              <div className={styles['job-cards-image']}>
                <img
                  className={styles['job-cards-photo']}
                  src={job.photo}
                  alt=''
                  width='1000'
                  height='685'
                />
              </div>
              <p className={styles['job-cards-title']}>{job.title}</p>
              <dl className={styles['job-cards-info']}>
                <div className={styles['job-cards-row']}>
                  <dt className={styles['job-cards-label']}>給与</dt>
                  <dd className={styles['job-cards-value']}>{job.salary}</dd>
                </div>
                <div className={styles['job-cards-row']}>
                  <dt className={styles['job-cards-label']}>所在地</dt>
                  <dd className={styles['job-cards-value']}>{job.location}</dd>
                </div>
                <div className={styles['job-cards-row']}>
                  <dt className={styles['job-cards-label']}>最寄駅</dt>
                  <dd className={styles['job-cards-value']}>{job.station}</dd>
                </div>
              </dl>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type='button'
          className={clsx(styles['job-cards-arrow'], styles.next)}
          aria-label='次の求人'
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
      <a href='/' className={styles['job-cards-more']}>
        <span className={styles['job-cards-more-text']}>
          新着求人一覧をもっと見る
        </span>
      </a>
    </section>
  )
}

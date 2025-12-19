'use client'

import { useEffect } from 'react'
import styles from './index.module.scss'
import '@/styles/swiper.scss'

const jobs = [
  {
    id: 1,
    src: '/images/zimu.jpg',
    salary: '月給 148,000円～',
    area: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 2,
    src: '/images/nurse.jpg',
    salary: '月給 148,000円～',
    area: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 3,
    src: '/images/doctor.jpg',
    salary: '月給 148,000円～',
    area: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 4,
    src: '/images/helper.jpg',
    salary: '月給 148,000円～',
    area: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
]

export const NewJobs = () => {
  useEffect(() => {
    if (!window.Swiper) return

    new window.Swiper('.mySwiper', {
      loop: true,
      slidesPerView: 1.05,
      spaceBetween: 12,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }, [])

  return (
    <section className={styles.newjobs}>
      <h2 className={styles.title}>新着情報</h2>

      <div className='swiper mySwiper'>
        <div className='swiper-wrapper'>
          {jobs.map((job) => (
            <div key={job.id} className='swiper-slide'>
              <article className={styles.card}>
                <img src={job.src} alt='' className={styles.img} />

                <h3 className={styles.h2}>
                  平日・夕方までの勤務！伊勢市の医療事務求人
                </h3>

                <div className={styles.row}>
                  <span className={styles.item}>給与</span>
                  <span>{job.salary}</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.item}>勤務地</span>
                  <span>{job.area}</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.item}>最寄駅</span>
                  <span>{job.station}</span>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className='swiper-button-prev' />
        <div className='swiper-button-next' />
        <div className='swiper-pagination' />
      </div>
    </section>
  )
}

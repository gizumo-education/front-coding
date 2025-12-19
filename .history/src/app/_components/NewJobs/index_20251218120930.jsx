'use client'
import { useEffect } from 'react'
import styles from './index.module.scss'

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
    if (typeof window !== 'undefined' && window.Swiper) {
      new window.Swiper('.mySwiper', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 12,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 3000,
        },
      })
    }
  }, [])

  return (
    <section className={styles.newjobs}>
      <h1 className={styles.newjobs_title}>新着情報</h1>

      {/* Swiperコンテナ（グローバルクラス） */}
      <div className='swiper mySwiper'>
        <div className='swiper-wrapper'>
          {jobs.map((job) => (
            <div key={job.id} className='swiper-slide'>
              <article className={styles.slide}>
                <img src={job.src} alt='' className={styles.img} />
                <h2 className={styles.h2}>
                  平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
                </h2>

                <div>
                  <div className={styles.row}>
                    <span className={styles.item}>給与</span>
                    <span className={styles.item_detail}>{job.salary}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.item}>勤務地</span>
                    <span className={styles.item_detail}>{job.area}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.item}>最寄駅</span>
                    <span className={styles.item_detail}>{job.station}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className='swiper-pagination'></div>
        <div className='swiper-button-next'></div>
        <div className='swiper-button-prev'></div>
      </div>

      <a href='/' className={styles.btn}>
        新着求人一覧をもっと見る
      </a>
    </section>
  )
}

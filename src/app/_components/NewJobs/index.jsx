'use client'

import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
  {
    id: 5,
    src: '/images/zimu.jpg',
    salary: '月給 148,000円～',
    area: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 6,
    src: '/images/nurse.jpg',
    salary: '月給 148,000円～',
    area: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 7,
    src: '/images/doctor.jpg',
    salary: '月給 148,000円～',
    area: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 8,
    src: '/images/helper.jpg',
    salary: '月給 148,000円～',
    area: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
]

export const NewJobs = () => {
  return (
    <section className={styles.color}>
      <div className={'inner'}>
        <div className={styles.newjobs}>
          <h2 className={styles.newjobs_title}>新着情報</h2>

          <div className={styles.swiperwrap}>
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                },
              }}
              spaceBetween={12}
              loop={true}
              navigation={{
                prevEl: `.${styles.prev}`,
                nextEl: `.${styles.next}`,
              }}
              pagination={false}
            >
              {jobs.map((job) => (
                <SwiperSlide key={job.id}>
                  <article className={styles.slide}>
                    <img
                      src={job.src}
                      alt=''
                      className={styles.img}
                      width='560'
                      height='400'
                    />

                    <h3 className={styles.h3}>
                      平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
                    </h3>

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
                        <span className={styles.item_detail}>
                          {job.station}
                        </span>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className={styles.prev}>
            <i className={styles.prev_mark}></i>
          </button>
          <button className={styles.next}>
            <i className={styles.next_mark}></i>
          </button>

          <a href='/' className={styles.btn}>
            新着求人一覧をもっと見る
          </a>
        </div>
      </div>
    </section>
  )
}

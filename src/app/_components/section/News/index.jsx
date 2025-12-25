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
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    image: '/images/job1.jpg',
    pay: '月給 148,000円～',
    place: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 2,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    image: '/images/job2.jpg',
    pay: '月給 148,000円～',
    place: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 3,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    image: '/images/job3.jpg',
    pay: '月給 148,000円～',
    place: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 4,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    image: '/images/job4.jpg',
    pay: '月給 148,000円～',
    place: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 5,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    image: '/images/job1.jpg',
    pay: '月給 148,000円～',
    place: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 6,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    image: '/images/job2.jpg',
    pay: '月給 148,000円～',
    place: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 7,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    image: '/images/job3.jpg',
    pay: '月給 148,000円～',
    place: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 8,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    image: '/images/job4.jpg',
    pay: '月給 148,000円～',
    place: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
]

export const News = () => {
  return (
    <section className={styles.square} id='news'>
      <div className={'inner'}>
        <div className={styles.news}>
          <h2 className={styles.news_title}>新着求人</h2>

          <div className={styles.news_box}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={12}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: `.${styles.prev}`,
                nextEl: `.${styles.next}`,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              pagination={false}
            >
              {jobs.map((job) => (
                <SwiperSlide key={job.id}>
                  <article className={styles.container}>
                    <img
                      src={job.image}
                      alt=''
                      className={styles.image}
                      width={740}
                      height={416}
                    />

                    <h3 className={styles.h2}>{job.title}</h3>
                    <div className={styles.content}>
                      <p className={styles.item}>
                        <span className={styles.span}>給与</span>
                        {job.pay}
                      </p>
                      <p className={styles.item}>
                        <span className={styles.span}>所在地</span>
                        {job.place}
                      </p>
                      <p className={styles.item}>
                        <span className={styles.span}>最寄駅</span>
                        {job.station}
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className={styles.prev}>
            <i className={styles.prev_pass}></i>
          </button>
          <button className={styles.next}>
            <i className={styles.next_pass}></i>
          </button>

          <a href='/' className={styles.button}>
            新着求人一覧をもっと見る
          </a>
        </div>
      </div>
    </section>
  )
}

'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './index.module.scss'

export const JobOffer = () => {
  const jobs = [
    {
      id: 1,
      title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
      img: '/img/job_01.jpg',
      alt: '求人情報01',
      money: '月給 148,000円～',
      place: '三重県伊勢市',
      station: '伊勢市駅 徒歩15分',
    },
    {
      id: 2,
      title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
      img: '/img/job_02.jpg',
      alt: '求人情報02',
      money: '月給 148,000円～',
      place: '三重県伊勢市',
      station: '伊勢市駅 徒歩15分',
    },
    {
      id: 3,
      title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
      img: '/img/job_03.jpg',
      alt: '求人情報03',
      money: '月給 148,000円～',
      place: '三重県伊勢市',
      station: '伊勢市駅 徒歩15分',
    },
    {
      id: 4,
      title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
      img: '/img/job_04.jpg',
      alt: '求人情報04',
      money: '月給 148,000円～',
      place: '三重県伊勢市',
      station: '伊勢市駅 徒歩15分',
    },
    {
      id: 5,
      title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
      img: '/img/job_01.jpg',
      alt: '求人情報05',
      money: '月給 148,000円～',
      place: '三重県伊勢市',
      station: '伊勢市駅 徒歩15分',
    },
  ]

  return (
    <section className={styles.section} id='JobOffer'>
      <div className={'inner'}>
        <div className={styles.job}>
          <h2 className={styles['job-title']}>新着求人</h2>
          <div className={styles['job-box']}>
            <Swiper
              modules={[Navigation]}
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
                },
              }}
              pagination={false}
            >
              {jobs.map((job) => (
                <SwiperSlide key={job.id}>
                  <article className={styles.card}>
                    <img
                      src={job.img}
                      alt={job.alt}
                      className={styles.image}
                      width={740}
                      height={416}
                    />
                    <h3 className={styles.title}>{job.title}</h3>
                    <div className={styles.content}>
                      <p className={styles.item}>
                        <span className={styles.text}>給与</span>
                        {job.money}
                      </p>
                      <p className={styles.item}>
                        <span className={styles.text}>所在地</span>
                        {job.place}
                      </p>
                      <p className={styles.item}>
                        <span className={styles.text}>最寄駅</span>
                        {job.station}
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className={styles.prev}>
            <i className={styles['prev-img']}></i>
          </button>
          <button className={styles.next}>
            <i className={styles['next-img']}></i>
          </button>
          <a href='/' className={styles.button}>
            新着求人一覧をもっと見る
          </a>
        </div>
      </div>
    </section>
  )
}

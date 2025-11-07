'use client'
import styles from './index.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

export const NewJobs = ({ id }) => {
  const jobs = [
    {
      imgPc: '/images/woman1.png',
      imgSp: '/sp_images/woman1-sp.png',

      title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
      salaryLabel: '給与',
      salaryDetail: '月給 148,000円～',
      placeLabel: '所在地',
      placeDetail: '三重県伊勢市',
      stationLabel: '最寄駅',
      stationDetail: '伊勢市駅 徒歩15分',
    },
    {
      imgPc: '/images/woman2.png',
      title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
      salaryLabel: '給与',
      salaryDetail: '月給 148,000円～',
      placeLabel: '所在地',
      placeDetail: '三重県伊勢市',
      stationLabel: '最寄駅',
      stationDetail: '伊勢市駅 徒歩15分',
    },
    {
      imgPc: '/images/woman3.png',
      title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
      salaryLabel: '給与',
      salaryDetail: '月給 148,000円～',
      placeLabel: '所在地',
      placeDetail: '三重県伊勢市',
      stationLabel: '最寄駅',
      stationDetail: '伊勢市駅 徒歩15分',
    },
    {
      imgPc: '/images/woman4.png',
      title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
      salaryLabel: '給与',
      salaryDetail: '月給 148,000円～',
      placeLabel: '所在地',
      placeDetail: '三重県伊勢市',
      stationLabel: '最寄駅',
      stationDetail: '伊勢市駅 徒歩15分',
    },
  ]

  const jobListsLoop = [...jobs, ...jobs]

  return (
    <section id={id} className={styles['news']}>
      <div className={styles['news-inner']}>
        <h1 className={styles['text-title']}>新着求人</h1>
        <div className={styles['job-list']}>
          <div
            id='button_prev'
            className={`${styles['slide']} ${styles['left']}`}
          ></div>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: '#button_prev',
              nextEl: '#button_next',
            }}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
            }}
          >
            {jobListsLoop.map((job, i) => (
              <SwiperSlide key={i}>
                <div className={styles['card-item']}>
                  <picture>
                    <source media='(max-width: 768px)' srcSet={job.imgSp} />
                    <img
                      src={job.imgPc}
                      alt='woman'
                      width='280'
                      height='200'
                      className={styles['woman-image']}
                    />
                  </picture>
                  <span className={styles['subtext-title']}>{job.title}</span>
                  <dl className={styles['card']}>
                    <div className={styles['card-list']}>
                      <dt className={styles['card-label']}>
                        {job.salaryLabel}
                      </dt>
                      <dd className={styles['card-text']}>
                        {job.salaryDetail}
                      </dd>
                    </div>
                    <div className={styles['card-list']}>
                      <dt className={styles['card-label']}>{job.placeLabel}</dt>
                      <dd className={styles['card-text']}>{job.placeDetail}</dd>
                    </div>
                    <div className={styles['card-list']}>
                      <dt className={styles['card-label']}>
                        {job.stationLabel}
                      </dt>
                      <dd className={styles['card-text']}>
                        {job.stationDetail}
                      </dd>
                    </div>
                  </dl>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            id='button_next'
            className={`${styles['slide']} ${styles['right']}`}
          ></div>
        </div>

        <div className={styles['button-wrapper']}>
          <button className={styles['button']}>新着求人一覧をもっと見る</button>
        </div>
      </div>
    </section>
  )
}

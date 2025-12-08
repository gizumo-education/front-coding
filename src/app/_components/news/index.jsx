'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './index.module.scss'

import { MoreButton } from '@/components/MoreButton'

const news = [
  {
    id: 1,
    img: '/news/work1.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salaryLabel: '月給',
    salaryDetail: '月給 148,000円～',
    placeLabel: '所在地',
    placeDetail: '三重県伊勢市',
    stationLabel: '最寄駅',
    stationDetail: '伊勢市駅 徒歩15分',
  },
  {
    id: 2,
    img: '/news/work2.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salaryLabel: '月給',
    salaryDetail: '月給 148,000円～',
    placeLabel: '所在地',
    placeDetail: '三重県伊勢市',
    stationLabel: '最寄駅',
    stationDetail: '伊勢市駅 徒歩15分',
  },
  {
    id: 3,
    img: '/news/work3.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salaryLabel: '月給',
    salaryDetail: '月給 148,000円～',
    placeLabel: '所在地',
    placeDetail: '三重県伊勢市',
    stationLabel: '最寄駅',
    stationDetail: '伊勢市駅 徒歩15分',
  },
  {
    id: 4,
    img: '/news/work4.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salaryLabel: '月給',
    salaryDetail: '月給 148,000円～',
    placeLabel: '所在地',
    placeDetail: '三重県伊勢市',
    stationLabel: '最寄駅',
    stationDetail: '伊勢市駅 徒歩15分',
  },
]

export const News = ({ id }) => {
  const newsLoop = [...news, ...news]

  return (
    <section id={id} className={styles['news']}>
      <div className='inner'>
        <h2 className={styles['news-title']}>新着求人</h2>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
          className={styles['news-swiper']}
        >
          {newsLoop.map((job, index) => (
            <SwiperSlide key={index}>
              <div className={styles['job-card']}>
                <picture>
                  <img src={job.img} alt='' width={280} height={200} />
                </picture>

                <h2 className={styles['job-title']}>{job.title}</h2>
                <div className={styles['job-details']}>
                  <div className={styles['detail-item']}>
                    <p className={styles['label']}>{job.salaryLabel}</p>
                    <p className={styles['text']}>{job.salaryDetail}</p>
                  </div>
                  <div className={styles['detail-item']}>
                    <p className={styles['label']}>{job.placeLabel}</p>
                    <p className={styles['text']}>{job.placeDetail}</p>
                  </div>
                  <div className={styles['detail-item']}>
                    <p className={styles['label']}>{job.stationLabel}</p>
                    <p className={styles['text']}>{job.stationDetail}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles['news-button']}>
          <MoreButton href='/'>新着求人一覧をもっと見る</MoreButton>
        </div>
      </div>
    </section>
  )
}

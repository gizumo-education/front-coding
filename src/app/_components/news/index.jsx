'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './index.module.scss'

import { MoreButton } from '@/components/MoreButton'

const jobs = [
  {
    id: 1,
    imgSp: '/news/job1-sp.png',
    imgPc: '/news/job1-pc.png',
    width: 740,
    height: 416,
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
    imgSp: '/news/job1-sp.png',
    imgPc: '/news/job2-pc.png',
    width: 740,
    height: 416,
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
    imgSp: '/news/job1-sp.png',
    imgPc: '/news/job3-pc.png',
    width: 740,
    height: 416,
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
    imgSp: '/news/job1-sp.png',
    imgPc: '/news/job4-pc.png',
    width: 740,
    height: 416,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salaryLabel: '月給',
    salaryDetail: '月給 148,000円～',
    placeLabel: '所在地',
    placeDetail: '三重県伊勢市',
    stationLabel: '最寄駅',
    stationDetail: '伊勢市駅 徒歩15分',
  },
]

export const News = () => {
  // 無限ループ用にスライドを複製↓
  const jobsForLoop = [...jobs, ...jobs]

  return (
    <section className={styles['news']}>
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
          {jobsForLoop.map((job, index) => (
            <SwiperSlide key={index}>
              <div className={styles['job-card']}>
                <picture>
                  <source srcSet={job.imgSp} media='(max-width: 767px)' />
                  <img
                    src={job.imgPc}
                    alt={job.title}
                    width={job.width}
                    height={job.height}
                  />
                </picture>

                <h3 className={styles['job-title']}>{job.title}</h3>
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
          <MoreButton text='新着求人一覧をもっと見る' href='/' />
        </div>
      </div>
    </section>
  )
}

'use client'
import styles from './index.module.scss'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

export const JobOpening = () => {
  const jobOpnenings = [
    {
      id: 1,
      img: '/JobOpening/JobOpening-img01.jpg',
      alt: '',
      title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
      salary: '月給 148,000円～',
      adress: '三重県伊勢市',
      station: '伊勢市駅 徒歩15分',
    },
    {
      id: 2,
      img: '/JobOpening/JobOpening-img02.jpg',
      alt: '',
      title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
      salary: '月給 148,000円～',
      adress: '三重県伊勢市',
      station: '伊勢市駅 徒歩15分',
    },
    {
      id: 3,
      img: '/JobOpening/JobOpening-img03.jpg',
      alt: '',
      title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
      salary: '月給 148,000円～',
      adress: '三重県伊勢市',
      station: '伊勢市駅 徒歩15分',
    },
    {
      id: 4,
      img: '/JobOpening/JobOpening-img04.jpg',
      alt: '',
      title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
      salary: '月給 148,000円～',
      adress: '三重県伊勢市',
      station: '伊勢市駅 徒歩15分',
    },
  ]
  return (
    <div className={styles['jobopening-container']} id='job-opening'>
      <h2 className={styles['jobopening-title']}>新着求人</h2>
      <div className={styles['jobopening-content']}>
        <button className={`custom-prev ${styles['custom-prev']}`}>
          <img
            src='/icon/path.svg'
            alt='前'
            width='10'
            height='10'
            className={styles['custom-prev-svg']}
          />
        </button>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          spaceBetween={20}
          watchOverflow={false}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {jobOpnenings.map((jobOpnening) => (
            <SwiperSlide key={jobOpnening.id}>
              <img
                src={jobOpnening.img}
                alt={jobOpnening.alt}
                width='740'
                height='416'
                className={styles['jobopening-img']}
              />
              <h3 className={styles['jobopening-heading']}>
                {jobOpnening.title}
              </h3>
              <div className={styles['row']}>
                <p className={styles['row-title']}>給与</p>
                <p className={styles['row-content']}>{jobOpnening.salary}</p>
              </div>
              <div className={styles['row']}>
                <p className={styles['row-title']}>所在地</p>
                <p className={styles['row-content']}>{jobOpnening.adress}</p>
              </div>
              <div className={styles['row']}>
                <p className={styles['row-title']}>最寄駅</p>
                <p className={styles['row-content']}>{jobOpnening.station}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={`custom-next ${styles['custom-next']}`}>
          <img
            src='/icon/path.svg'
            alt='次'
            width='10'
            height='10'
            className={styles['custom-next-svg']}
          />
        </button>
        <a href='/' className={styles['detail-button']}>
          新着求人一覧をもっと見る
        </a>
      </div>
    </div>
  )
}

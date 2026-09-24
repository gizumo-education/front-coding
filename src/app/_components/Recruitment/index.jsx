'use client'
import { Navigation } from 'swiper/modules'
import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

const recruitments = [
  { id: 1, image: '/recruitment-pc1.jpg' },
  { id: 2, image: '/recruitment-pc2.jpg' },
  { id: 3, image: '/recruitment-pc3.jpg' },
  { id: 4, image: '/recruitment-pc4.jpg' },
  { id: 5, image: '/recruitment-pc1.jpg' },
]

export const Recruitment = () => {
  return (
    <section id='recruitment' className={styles.recruitment}>
      <h2 className={styles.title}>新着求人</h2>
      <div className={styles['card-wrapper']}>
        <button className={`${styles['slider-button-left']} prev-button`}>
          <img
            className={styles['slider-circle']}
            src='/icon/slider-circle.svg'
            alt=''
            width={42}
            height={42}
          />
          <img
            className={styles['slider-arrow']}
            src='/icon/arrow-left.svg'
            alt='前へ'
            width={8}
            height={15}
          />
        </button>
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={15}
          modules={[Navigation]}
          navigation={{
            prevEl: '.prev-button',
            nextEl: '.next-button',
          }}
          className={styles['card-list']}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {recruitments.map((recruitment) => (
            <SwiperSlide key={recruitment.id}>
              <div className={styles.card}>
                <div className={styles['image-wrapper']}>
                  <img
                    className={styles.image}
                    src={recruitment.image}
                    alt=''
                    width={1000}
                    height={685}
                  />
                </div>
                <h3 className={styles['job-title']}>
                  平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
                </h3>
                <dl className={styles.info}>
                  <div className={styles.row}>
                    <dt className={styles.label}>給与</dt>
                    <dd className={styles.value}>月給 148,000円〜</dd>
                  </div>
                  <div className={styles.row}>
                    <dt className={styles.label}>所在地</dt>
                    <dd className={styles.value}>三重県伊勢市</dd>
                  </div>
                  <div className={styles.row}>
                    <dt className={styles.label}>最寄駅</dt>
                    <dd className={styles.value}>伊勢市駅 徒歩15分</dd>
                  </div>
                </dl>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={`${styles['slider-button-right']} next-button`}>
          <img
            className={styles['slider-circle']}
            src='/icon/slider-circle.svg'
            alt=''
            width={42}
            height={42}
          />
          <img
            className={styles['slider-arrow']}
            src='/icon/arrow-right.svg'
            alt='次へ'
            width={8}
            height={15}
          />
        </button>
      </div>
      <a href='/' className={styles.button}>
        新着求人一覧をもっと見る
      </a>
    </section>
  )
}

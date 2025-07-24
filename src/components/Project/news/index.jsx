'use client'
import { useRef, useEffect } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './index.module.scss'

export const News = () => {
  const jobs = [1, 2, 3, 4, 5, 6, 7, 8]
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)

  const breakSetting = {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
    },
  }

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current
      swiperRef.current.params.navigation.nextEl = nextRef.current
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [])

  return (
    <div className={styles['news-section']}>
      <div className={styles['news-inner']}>
        <h1 className={styles['text-title']}>新着求人</h1>
        <div className={styles['woman-list']}>
          <div
            className={`${styles['slide-button']} ${styles['left']}`}
            ref={prevRef}
          />
          <Swiper
            modules={[Navigation]}
            loop={true}
            speed={1500}
            breakpoints={breakSetting}
            centeredSlides={false}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
          >
            {jobs.map((job, i) => {
              const imageNum = (i % 4) + 1
              return (
                <SwiperSlide key={i}>
                  <div className={styles['card-item']}>
                    <div className={styles[`woman${imageNum}`]}></div>
                    <span className={styles['subtext-title']}>
                      平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
                    </span>
                    <div className={styles['card']}>
                      <div className={styles['text-list']}>
                        <span className={styles['label']}>給与</span>
                        <span className={styles['text']}>月給148,000円〜</span>
                      </div>
                      <div className={styles['text-list']}>
                        <span className={styles['label']}>所在地</span>
                        <span className={styles['text']}>三重県伊勢市</span>
                      </div>
                      <div className={styles['text-list']}>
                        <span className={styles['label']}>最寄駅</span>
                        <span className={styles['text']}>
                          伊勢市駅 徒歩15分
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          <div
            className={`${styles['slide-button']} ${styles['right']}`}
            ref={nextRef}
          />
        </div>

        <div className={styles['more-button-wrapper']}>
          <button className={styles['more-button']}>
            新着求人一覧をもっと見る
          </button>
        </div>
      </div>
    </div>
  )
}

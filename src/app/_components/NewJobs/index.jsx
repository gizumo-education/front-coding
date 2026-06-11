'use client'
import styles from './NewJobs.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export const NewJobs = () => {
  return (
    <section id='job' className={styles['new-jobs-container']}>
      <h2 className={styles['section-title']}>新着求人</h2>
      <div className={styles['slider-wrapper']}>
        <button
          type='button'
          className={`${styles['arrow-button']} ${styles.prev}`}
        ></button>
        <button
          type='button'
          className={`${styles['arrow-button']} ${styles.next}`}
        ></button>
        <Swiper
          modules={[Navigation]}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          navigation={{
            prevEl: `.${styles.prev}`,
            nextEl: `.${styles.next}`,
          }}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
              centeredSlides: false,
            },
          }}
        >
          <SwiperSlide>
            <article className={styles['card']}>
              <picture>
                <source
                  srcSet='img/img.newjobs-sp.jpg'
                  media='(max-width: 400px)'
                />
                <img
                  className={styles['card-image']}
                  src='/img/img.newjobs-sp.jpg'
                  alt='医療事務求人のイメージ写真（女性）'
                  width='280'
                  height='200'
                />
              </picture>

              <h3 className={styles['card-title']}>
                平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
              </h3>
              <ul className={styles['meta-list']}>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>給与</span>
                  <span className={styles['meta-value']}>月給 148,000円〜</span>
                </li>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>所在地</span>
                  <span className={styles['meta-value']}>三重県伊勢市</span>
                </li>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>最寄駅</span>
                  <span className={styles['meta-value']}>
                    伊勢市駅 徒歩15分
                  </span>
                </li>
              </ul>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className={styles['card']}>
              <img
                src='/img/img.newjobs2.jpg'
                alt='医療事務求人のイメージ写真（女性）'
                className={styles['card-image']}
                width='280'
                height='200'
              />
              <h3 className={styles['card-title']}>
                平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
              </h3>
              <ul className={styles['meta-list']}>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>給与</span>
                  <span className={styles['meta-value']}>月給 148,000円〜</span>
                </li>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>所在地</span>
                  <span className={styles['meta-value']}>三重県伊勢市</span>
                </li>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>最寄駅</span>
                  <span className={styles['meta-value']}>
                    伊勢市駅 徒歩15分
                  </span>
                </li>
              </ul>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className={styles['card']}>
              <img
                src='/img/img.newjobs3.jpg'
                alt='医療事務求人のイメージ写真（女性）'
                className={styles['card-image']}
                width='280'
                height='200'
              />
              <h3 className={styles['card-title']}>
                平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
              </h3>
              <ul className={styles['meta-list']}>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>給与</span>
                  <span className={styles['meta-value']}>月給 148,000円〜</span>
                </li>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>所在地</span>
                  <span className={styles['meta-value']}>三重県伊勢市</span>
                </li>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>最寄駅</span>
                  <span className={styles['meta-value']}>
                    伊勢市駅 徒歩15分
                  </span>
                </li>
              </ul>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className={styles['card']}>
              <img
                src='/img/img.newjobs4.jpg'
                alt='医療事務求人のイメージ写真（女性）'
                className={styles['card-image']}
                width='280'
                height='200'
              />
              <h3 className={styles['card-title']}>
                平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
              </h3>
              <ul className={styles['meta-list']}>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>給与</span>
                  <span className={styles['meta-value']}>月給 148,000円〜</span>
                </li>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>所在地</span>
                  <span className={styles['meta-value']}>三重県伊勢市</span>
                </li>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>最寄駅</span>
                  <span className={styles['meta-value']}>
                    伊勢市駅 徒歩15分
                  </span>
                </li>
              </ul>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className={styles['card']}>
              <picture>
                <source
                  srcSet='img/img.newjobs-sp.jpg'
                  media='(max-width: 400px)'
                />
                <img
                  className={styles['card-image']}
                  src='/img/img.newjobs-sp.jpg'
                  alt='医療事務求人のイメージ写真（女性）'
                  width='280'
                  height='200'
                />
              </picture>

              <h3 className={styles['card-title']}>
                平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
              </h3>
              <ul className={styles['meta-list']}>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>給与</span>
                  <span className={styles['meta-value']}>月給 148,000円〜</span>
                </li>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>所在地</span>
                  <span className={styles['meta-value']}>三重県伊勢市</span>
                </li>
                <li className={styles['meta-item']}>
                  <span className={styles['label-pink']}>最寄駅</span>
                  <span className={styles['meta-value']}>
                    伊勢市駅 徒歩15分
                  </span>
                </li>
              </ul>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
      <a href='/' className={styles['more-button']}>
        新着求人一覧をもっと見る
      </a>
    </section>
  )
}

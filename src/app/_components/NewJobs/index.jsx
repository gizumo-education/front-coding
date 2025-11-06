'use client'
import styles from './index.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

export const NewJobs = ({id }) => {
  const jobLists = [
    <div className={styles['card-item']} key={1}>
      <picture>
        <source media='(max-width: 768px)' srcSet='/sp_images/woman1-sp.png' />
        <img
          src='/images/woman1.png'
          alt='woman1'
          width='280'
          height='200'
          className={styles['woman-image']}
        />
      </picture>
      <span className={styles['subtext-title']}>
        平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
      </span>
      <dl className={styles['card']}>
        <div className={styles['card-list']}>
          <dt className={styles['card-label']}>給与</dt>
          <dd className={styles['card-text']}>月給 148,000円〜</dd>
        </div>
        <div className={styles['card-list']}>
          <dt className={styles['card-label']}>所在地</dt>
          <dd className={styles['card-text']}>三重県伊勢市</dd>
        </div>
        <div className={styles['card-list']}>
          <dt className={styles['card-label']}>最寄駅</dt>
          <dd className={styles['card-text']}>伊勢市駅 徒歩15分</dd>
        </div>
      </dl>
    </div>,

    <div className={styles['card-item']} key={2}>
      <img
        className={styles['woman-image']}
        src='/images/woman2.png'
        alt='woman2'
        width='280'
        height='200'
      />
      <span className={styles['subtext-title']}>
        平日・夕方までの勤務!伊勢市の伊勢赤 十字病院で医療事務求人
      </span>
      <dl className={styles['card']}>
        <div className={styles['card-list']}>
          <dt className={styles['card-label']}>給与</dt>
          <dd className={styles['card-text']}>月給 148,000円〜</dd>
        </div>
        <div className={styles['card-list']}>
          <dt className={styles['card-label']}>所在地</dt>
          <dd className={styles['card-text']}>三重県伊勢市</dd>
        </div>
        <div className={styles['card-list']}>
          <dt className={styles['card-label']}>最寄駅</dt>
          <dd className={styles['card-text']}>伊勢市駅 徒歩15分</dd>
        </div>
      </dl>
    </div>,

    <div className={styles['card-item']} key={3}>
      <img
        className={styles['woman-image']}
        src='/images/woman3.png'
        alt='woman3'
        width='280'
        height='200'
      />
      <span className={styles['subtext-title']}>
        平日・夕方までの勤務!伊勢市の伊勢赤 十字病院で医療事務求人
      </span>
      <dl className={styles['card']}>
        <div className={styles['card-list']}>
          <dt className={styles['card-label']}>給与</dt>
          <dd className={styles['card-text']}>月給 148,000円〜</dd>
        </div>
        <div className={styles['card-list']}>
          <dt className={styles['card-label']}>所在地</dt>
          <dd className={styles['card-text']}>三重県伊勢市</dd>
        </div>
        <div className={styles['card-list']}>
          <dt className={styles['card-label']}>最寄駅</dt>
          <dd className={styles['card-text']}>伊勢市駅 徒歩15分</dd>
        </div>
      </dl>
    </div>,

    <div className={styles['card-item']} key={4}>
      <img
        className={styles['woman-image']}
        src='/images/woman4.png'
        alt='woman4'
        width='280'
        height='200'
      />
      <span className={styles['subtext-title']}>
        平日・夕方までの勤務!伊勢市の伊勢赤 十字病院で医療事務求人
      </span>
      <dl className={styles['card']}>
        <div className={styles['card-list']}>
          <dt className={styles['card-label']}>給与</dt>
          <dd className={styles['card-text']}>月給 148,000円〜</dd>
        </div>
        <div className={styles['card-list']}>
          <dt className={styles['card-label']}>所在地</dt>
          <dd className={styles['card-text']}>三重県伊勢市</dd>
        </div>
        <div className={styles['card-list']}>
          <dt className={styles['card-label']}>最寄駅</dt>
          <dd className={styles['card-text']}>伊勢市駅 徒歩15分</dd>
        </div>
      </dl>
    </div>,
  ]

  const jobListsLoop = [...jobLists, ...jobLists]

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
              <SwiperSlide key={i}>{job}</SwiperSlide>
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

'use client'
import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useEffect, useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

const jobs = [
  {
    id: 1,
    pcImage: '/img/newjob-pc1.png',
    spImage: '/img/newjob-sp1.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円～',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 2,
    pcImage: '/img/newjob-pc2.png',
    spImage: '/img/newjob-sp2.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円～',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 3,
    pcImage: '/img/newjob-pc3.png',
    spImage: '/img/newjob-sp3.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円～',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 4,
    pcImage: '/img/newjob-pc4.png',
    spImage: '/img/newjob-sp4.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円～',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
]

const loopJobs = Array.from({ length: 3 }, (_, cycle) =>
  jobs.map((job) => ({
    ...job,
    id: `${cycle}-${job.id}`,
  }))
).flat()

export const NewJob = () => {
  const leftBtnRef = useRef(null)
  const rightBtnRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <>
      <section className={styles['job']} id='news'>
        <h1 className={styles['job-title']}>新着求人</h1>
        <button ref={leftBtnRef} className={styles['job-btn-left']}>
          <img
            className={styles['job-btn-left-arrow']}
            width={8}
            height={15}
            src='/img/miniarrow.png'
            alt='左'
          />
        </button>
        <div className={styles['job-container']}>
          {isMounted && (
            <Swiper
              modules={[Navigation]}
              slidesPerGroup={1}
              loop={true}
              spaceBetween={15}
              slidesPerView={1}
              watchOverflow={false}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = leftBtnRef.current
                swiper.params.navigation.nextEl = rightBtnRef.current
              }}
              navigation={{
                nextEl: rightBtnRef.current,
                prevEl: leftBtnRef.current,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {loopJobs.map((job) => (
                <SwiperSlide key={job.id}>
                  <div className={styles['job-container-contents-pc']}>
                    <picture>
                      <source
                        media='(min-width: 768px)'
                        srcSet={job.pcImage}
                        width={280}
                        height={200}
                        className={styles['job-img']}
                      />
                      <img
                        src={job.spImage}
                        width={370}
                        height={208}
                        alt=''
                        className={styles['job-img']}
                      />
                    </picture>

                    <h2 className={styles['job-jobtitle']}>{job.title}</h2>

                    <div className={styles['job-info']}>
                      <dl className={styles['job-info-item']}>
                        <dt className={styles['job-info-item-list']}>給与</dt>
                        <dd className={styles['job-info-item-name']}>
                          {job.salary}
                        </dd>

                        <dt className={styles['job-info-item-list']}>所在地</dt>
                        <dd className={styles['job-info-item-name']}>
                          {job.location}
                        </dd>

                        <dt className={styles['job-info-item-list']}>最寄駅</dt>
                        <dd className={styles['job-info-item-name']}>
                          {job.station}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <button ref={rightBtnRef} className={styles['job-btn-right']}>
          <img
            className={styles['job-btn-right-arrow']}
            width={8}
            height={15}
            src='/img/miniarrow.png'
            alt='右'
          />
        </button>

        <a href='/' className={styles['job-submit']}>
          新着求人一覧をもっと見る
        </a>
      </section>
    </>
  )
}

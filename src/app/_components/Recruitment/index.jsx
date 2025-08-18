'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import styles from './index.module.scss'

export const Recruitment = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['recruit']}>
        <section className={styles['inner']}>
          <article className={styles['article']}>
            <div className={styles['recruit-title']}>
              <h1>新着求人</h1>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              loop
            >
              {[
                {
                  img: '/images/新着求人画像.png',
                  caption: '伊勢赤十字病院で医療事務求人',
                },
                {
                  img: '/images/新着求人画像2.jpg',
                  caption: '伊勢赤十字病院で医療事務求人 2',
                },
                {
                  img: '/images/新着求人画像3.jpg',
                  caption: '伊勢赤十字病院で医療事務求人 3',
                },
                {
                  img: '/images/新着求人画像4.jpg',
                  caption: '伊勢赤十字病院で医療事務求人 4',
                },
              ].map((job, index) => (
                <SwiperSlide key={index}>
                  <ul className={styles['recruit-container']}>
                    <li className={styles['recruit-content']}>
                      <img
                        src={job.img}
                        alt={job.caption}
                        width='370'
                        height='208'
                        className={styles['recruit-img']}
                      />
                      <h1 className={styles['recruit-caption']}>
                        平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人
                      </h1>
                      <section>
                        <div className={styles['recruit-info']}>
                          <ul>
                            <li className={styles['info-title']}>給与</li>
                            <li className={styles['info-title']}>所在地</li>
                            <li className={styles['info-title']}>最寄駅</li>
                          </ul>
                        </div>
                        <div className={styles['recruit-info']}>
                          <ul>
                            <li className={styles['info-detail']}>
                              月給148,000円~
                            </li>
                            <li className={styles['info-detail']}>
                              三重県伊勢市
                            </li>
                            <li className={styles['info-detail']}>
                              伊勢市駅 徒歩15分
                            </li>
                          </ul>
                        </div>
                      </section>
                    </li>
                    <li className={styles['recruit-content']}>
                      <img
                        src={job.img}
                        alt={job.caption}
                        width='370'
                        height='208'
                        className={styles['recruit-img']}
                      />
                      <h1 className={styles['recruit-caption']}>
                        平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人
                      </h1>
                      <section>
                        <div className={styles['recruit-info']}>
                          <ul>
                            <li className={styles['info-title']}>給与</li>
                            <li className={styles['info-title']}>所在地</li>
                            <li className={styles['info-title']}>最寄駅</li>
                          </ul>
                        </div>
                        <div className={styles['recruit-info']}>
                          <ul>
                            <li className={styles['info-detail']}>
                              月給148,000円~
                            </li>
                            <li className={styles['info-detail']}>
                              三重県伊勢市
                            </li>
                            <li className={styles['info-detail']}>
                              伊勢市駅 徒歩15分
                            </li>
                          </ul>
                        </div>
                      </section>
                    </li>
                    <li className={styles['recruit-content']}>
                      <img
                        src={job.img}
                        alt={job.caption}
                        width='370'
                        height='208'
                        className={styles['recruit-img']}
                      />
                      <h1 className={styles['recruit-caption']}>
                        平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人
                      </h1>
                      <section>
                        <div className={styles['recruit-info']}>
                          <ul>
                            <li className={styles['info-title']}>給与</li>
                            <li className={styles['info-title']}>所在地</li>
                            <li className={styles['info-title']}>最寄駅</li>
                          </ul>
                        </div>
                        <div className={styles['recruit-info']}>
                          <ul>
                            <li className={styles['info-detail']}>
                              月給148,000円~
                            </li>
                            <li className={styles['info-detail']}>
                              三重県伊勢市
                            </li>
                            <li className={styles['info-detail']}>
                              伊勢市駅 徒歩15分
                            </li>
                          </ul>
                        </div>
                      </section>
                    </li>
                    <li className={styles['recruit-content']}>
                      <img
                        src={job.img}
                        alt={job.caption}
                        width='370'
                        height='208'
                        className={styles['recruit-img']}
                      />
                      <h1 className={styles['recruit-caption']}>
                        平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人
                      </h1>
                      <section>
                        <div className={styles['recruit-info']}>
                          <ul>
                            <li className={styles['info-title']}>給与</li>
                            <li className={styles['info-title']}>所在地</li>
                            <li className={styles['info-title']}>最寄駅</li>
                          </ul>
                        </div>
                        <div className={styles['recruit-info']}>
                          <ul>
                            <li className={styles['info-detail']}>
                              月給148,000円~
                            </li>
                            <li className={styles['info-detail']}>
                              三重県伊勢市
                            </li>
                            <li className={styles['info-detail']}>
                              伊勢市駅 徒歩15分
                            </li>
                          </ul>
                        </div>
                      </section>
                    </li>
                  </ul>
                </SwiperSlide>
              ))}
              <div className={`swiper-button-prev ${styles.prev}`}></div>
              <div className={`swiper-button-next ${styles.next}`}></div>
            </Swiper>

            <div className={styles['recruit-button-container']}>
              <button className={styles['recruit-button']}>
                新着求人一覧をもっと見る
              </button>
            </div>
          </article>
        </section>
      </section>
    </main>
  )
}

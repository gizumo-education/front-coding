import clsx from 'clsx'
import styles from './index.module.scss'

export const News = () => {
  return (
    <section className={styles['news-wrapper']}>
      <div className={styles['news-inner']}>
        <h2 className={styles['news-title']}>新着求人</h2>
        <div className={styles['news-container']}>
          <span
            className={clsx(styles.arrow, styles.prev)}
            aria-hidden='true'
          />
          <div className={styles['news-list']}>
            <article className={styles['news-slider-wrapper']}>
              <picture>
                <source
                  media='(min-width: 768px)'
                  srcSet='/img/pc/news-01.svg'
                  width={280}
                  height={200}
                />
                <img
                  src={'/img/news.jpg'}
                  alt='新着求人'
                  width={370}
                  height={208}
                  className={styles['news-image']}
                />
              </picture>
              <p className={styles['news-sub-title']}>
                平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
              </p>
              <dl className={styles['news-dl']}>
                <dt className={styles['news-salary']}>給与</dt>
                <dd className={styles['news-salary-desc']}>月給 148,000円～</dd>
                <dt className={styles['news-place']}>所在地</dt>
                <dd className={styles['news-place-desc']}>三重県伊勢市</dd>
                <dt className={styles['news-station']}>最寄駅</dt>
                <dd className={styles['news-station-desc']}>
                  伊勢市駅 徒歩15分
                </dd>
              </dl>
            </article>
            <article className={styles['news-slider-wrapper']}>
              <picture>
                <source
                  media='(min-width: 768px)'
                  srcSet='/img/pc/news-02.svg'
                  alt='新着求人'
                  width={280}
                  height={200}
                />
                <img
                  src={'/img/news-02.svg'}
                  alt='新着求人'
                  width={370}
                  height={208}
                  className={styles['news-image']}
                />
              </picture>
              <p className={styles['news-sub-title']}>
                平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
              </p>
              <dl className={styles['news-dl']}>
                <dt className={styles['news-salary']}>給与</dt>
                <dd className={styles['news-salary-desc']}>月給 148,000円～</dd>
                <dt className={styles['news-place']}>所在地</dt>
                <dd className={styles['news-place-desc']}>三重県伊勢市</dd>
                <dt className={styles['news-station']}>最寄駅</dt>
                <dd className={styles['news-station-desc']}>
                  伊勢市駅 徒歩15分
                </dd>
              </dl>
            </article>
            <article className={styles['news-slider-wrapper']}>
              <picture>
                <source
                  media='(min-width: 768px)'
                  srcSet='/img/pc/news-03.svg'
                  alt='新着求人'
                  width={280}
                  height={200}
                />
                <img
                  src={'/img/news-03.svg'}
                  alt='新着求人'
                  width={370}
                  height={208}
                  className={styles['news-image']}
                />
              </picture>
              <p className={styles['news-sub-title']}>
                平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
              </p>
              <dl className={styles['news-dl']}>
                <dt className={styles['news-salary']}>給与</dt>
                <dd className={styles['news-salary-desc']}>月給 148,000円～</dd>
                <dt className={styles['news-place']}>所在地</dt>
                <dd className={styles['news-place-desc']}>三重県伊勢市</dd>
                <dt className={styles['news-station']}>最寄駅</dt>
                <dd className={styles['news-station-desc']}>
                  伊勢市駅 徒歩15分
                </dd>
              </dl>
            </article>
            <article className={styles['news-slider-wrapper']}>
              <picture>
                <source
                  media='(min-width: 768px)'
                  srcSet='/img/pc/news-04.svg'
                  alt='新着求人'
                  width={280}
                  height={200}
                />
                <img
                  src={'/img/news-04.svg'}
                  alt='新着求人'
                  width={370}
                  height={208}
                  className={styles['news-image']}
                />
              </picture>
              <p className={styles['news-sub-title']}>
                平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
              </p>
              <dl className={styles['news-dl']}>
                <dt className={styles['news-salary']}>給与</dt>
                <dd className={styles['news-salary-desc']}>月給 148,000円～</dd>
                <dt className={styles['news-place']}>所在地</dt>
                <dd className={styles['news-place-desc']}>三重県伊勢市</dd>
                <dt className={styles['news-station']}>最寄駅</dt>
                <dd className={styles['news-station-desc']}>
                  伊勢市駅 徒歩15分
                </dd>
              </dl>
            </article>
          </div>
          <span
            className={clsx(styles.arrow, styles.next)}
            aria-hidden='true'
          />
        </div>
        <a href='/' className={styles['submit-btn']}>
          新着求人一覧をもっと見る
        </a>
      </div>
    </section>
  )
}

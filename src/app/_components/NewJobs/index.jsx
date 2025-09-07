import styles from './index.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'

export const NewJobs = () => {
  return (
    <section className={styles['news']}>
      <div className={styles['news-inner']}>
        <h1 className={styles['text-title']}>新着求人</h1>
        <div className={styles['job-list']}>
          <div className={`${styles['slide']} ${styles['left']}`}></div>

          <div className={styles['card-item']}>
            <img
              src='/images/woman1.png'
              alt='woman1'
              width='280'
              height='200'
              className={styles['woman-image']}
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
          </div>

          <div className={styles['card-item']}>
            <img
              className={styles['woman2']}
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
          </div>

          <div className={styles['card-item']}>
            <img
              className={styles['woman3']}
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
          </div>

          <div className={styles['card-item']}>
            <img
              className={styles['woman4']}
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
          </div>
          <div className={`${styles['slide']} ${styles['right']}`}></div>
        </div>

        <div className={styles['button-wrapper']}>
          <button className={styles['button']}>新着求人一覧をもっと見る</button>
        </div>
      </div>
    </section>
  )
}

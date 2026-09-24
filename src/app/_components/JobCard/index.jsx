import styles from './index.module.scss'
import clsx from 'clsx'

export const JobCard = () => {
  return (
    <section className={styles['job-cards']}>
      <h2 className={styles['job-cards-heading']}>新着求人</h2>
      <div className={styles['job-cards-slider']}>
        <button
          type='button'
          className={clsx(styles['job-cards-arrow'], styles.prev)}
          aria-label='前の求人'
        />
        <ul className={styles['job-cards-list']}>
          <li className={styles['job-cards-item']}>
            <div className={styles['job-cards-image']}>
              <img
                className={styles['job-cards-photo']}
                src='/JobCard/jobcard1.jpg'
                alt=''
                width='1000'
                height='685'
              />
            </div>
            <p className={styles['job-cards-title']}>
              平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
            </p>
            <dl className={styles['job-cards-info']}>
              <div className={styles['job-cards-row']}>
                <dt className={styles['job-cards-label']}>給与</dt>
                <dd className={styles['job-cards-value']}>月給 148,000円〜</dd>
              </div>
              <div className={styles['job-cards-row']}>
                <dt className={styles['job-cards-label']}>所在地</dt>
                <dd className={styles['job-cards-value']}>三重県伊勢市</dd>
              </div>
              <div className={styles['job-cards-row']}>
                <dt className={styles['job-cards-label']}>最寄駅</dt>
                <dd className={styles['job-cards-value']}>伊勢市駅 徒歩15分</dd>
              </div>
            </dl>
          </li>

          <li className={styles['job-cards-item']}>
            <div className={styles['job-cards-image']}>
              <img
                className={styles['job-cards-photo']}
                src='/JobCard/jobcard2.jpg'
                alt=''
                width='1000'
                height='685'
              />
            </div>
            <p className={styles['job-cards-title']}>
              平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
            </p>
            <dl className={styles['job-cards-info']}>
              <div className={styles['job-cards-row']}>
                <dt className={styles['job-cards-label']}>給与</dt>
                <dd className={styles['job-cards-value']}>月給 148,000円〜</dd>
              </div>
              <div className={styles['job-cards-row']}>
                <dt className={styles['job-cards-label']}>所在地</dt>
                <dd className={styles['job-cards-value']}>三重県伊勢市</dd>
              </div>
              <div className={styles['job-cards-row']}>
                <dt className={styles['job-cards-label']}>最寄駅</dt>
                <dd className={styles['job-cards-value']}>伊勢市駅 徒歩15分</dd>
              </div>
            </dl>
          </li>

          <li className={styles['job-cards-item']}>
            <div className={styles['job-cards-image']}>
              <img
                className={styles['job-cards-photo']}
                src='/JobCard/jobcard3.jpg'
                alt=''
                width='1000'
                height='685'
              />
            </div>
            <p className={styles['job-cards-title']}>
              平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
            </p>
            <dl className={styles['job-cards-info']}>
              <div className={styles['job-cards-row']}>
                <dt className={styles['job-cards-label']}>給与</dt>
                <dd className={styles['job-cards-value']}>月給 148,000円〜</dd>
              </div>
              <div className={styles['job-cards-row']}>
                <dt className={styles['job-cards-label']}>所在地</dt>
                <dd className={styles['job-cards-value']}>三重県伊勢市</dd>
              </div>
              <div className={styles['job-cards-row']}>
                <dt className={styles['job-cards-label']}>最寄駅</dt>
                <dd className={styles['job-cards-value']}>伊勢市駅 徒歩15分</dd>
              </div>
            </dl>
          </li>

          <li className={styles['job-cards-item']}>
            <div className={styles['job-cards-image']}>
              <img
                className={styles['job-cards-photo']}
                src='/JobCard/jobcard4.jpg'
                alt=''
                width='1000'
                height='685'
              />
            </div>
            <p className={styles['job-cards-title']}>
              平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
            </p>
            <dl className={styles['job-cards-info']}>
              <div className={styles['job-cards-row']}>
                <dt className={styles['job-cards-label']}>給与</dt>
                <dd className={styles['job-cards-value']}>月給 148,000円〜</dd>
              </div>
              <div className={styles['job-cards-row']}>
                <dt className={styles['job-cards-label']}>所在地</dt>
                <dd className={styles['job-cards-value']}>三重県伊勢市</dd>
              </div>
              <div className={styles['job-cards-row']}>
                <dt className={styles['job-cards-label']}>最寄駅</dt>
                <dd className={styles['job-cards-value']}>伊勢市駅 徒歩15分</dd>
              </div>
            </dl>
          </li>
        </ul>
        <button
          type='button'
          className={clsx(styles['job-cards-arrow'], styles.next)}
          aria-label='次の求人'
        />
      </div>
      <a href='/' className={styles['job-cards-more']}>
        <span className={styles['job-cards-more-text']}>
          新着求人一覧をもっと見る
        </span>
      </a>
    </section>
  )
}

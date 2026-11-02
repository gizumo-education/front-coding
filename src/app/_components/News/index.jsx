import clsx from 'clsx'
import styles from './index.module.scss'

export const News = () => {
  return (
    <section className={styles['news-wrapper']}>
      <h2 className={styles['news-title']}>新着求人</h2>
      <article className={styles['news-slider-wrapper']}>
        <img
          src={'/img/news.jpg'}
          alt='新着求人'
          width={370}
          height={208}
          className={styles['news-image']}
        />
        <p className={styles['news-sub-title']}>
          <span className={styles['news-sub-title-line1']}>
            平日・夕方までの勤務!伊勢市の伊勢赤十字病院で
          </span>
          <span className={styles['news-sub-title-line2']}>医療事務求人</span>
        </p>
        <dl className={styles['news-dl']}>
          <dt className={styles['news-salary']}>給与</dt>
          <dd className={styles['news-salary-desc']}>月給 148,000円～</dd>
          <dt className={styles['news-place']}>所在地</dt>
          <dd className={styles['news-place-desc']}>三重県伊勢市</dd>
          <dt className={styles['news-station']}>最寄駅</dt>
          <dd className={styles['news-station-desc']}>伊勢市駅 徒歩15分</dd>
        </dl>
        <span className={clsx(styles.arrow, styles.prev)} aria-hidden='true' />
        <span className={clsx(styles.arrow, styles.next)} aria-hidden='true' />
      </article>
      <a href='/' className={styles['submit-btn']}>
        新着求人一覧をもっと見る
      </a>
    </section>
  )
}

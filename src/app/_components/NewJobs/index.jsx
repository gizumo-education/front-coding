import styles from './NewJobs.module.scss'

export const NewJobs = () => {
  return (
    <section className={styles['new-jobs-container']}>
      <h2 className={styles['section-title']}>新着求人</h2>

      <div className={styles['slider-wrapper']}>
        <button
          type='button'
          className={styles['arrow-button-prev']}
          aria-label='前のスライドへ'
        ></button>

        <article>
          <div className={styles['card-image-wrap']}>
            <img
              src='/img/img.newjobs-sp.jpg'
              alt='医療事務求人のイメージ写真（女性）'
              className={styles['card-image']}
              width={370}
              height={208}
            />
          </div>

          <div className={styles['card-content']}>
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
                <span className={styles['meta-value']}>伊勢市駅 徒歩15分</span>
              </li>
            </ul>
          </div>
        </article>

        <button
          type='button'
          className={styles['arrow-button-next']}
          aria-label='次のスライドへ'
        ></button>
      </div>

      <a href='/' className={styles['more-button']}>
        新着求人一覧をもっと見る
      </a>
    </section>
  )
}

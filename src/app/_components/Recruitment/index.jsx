import styles from './index.module.scss'

export const Recruitment = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['recruit']}>
        <section className={styles['inner']}>
          <img
            src='/images/新着求人.png'
            alt='新着求人'
            width='100'
            height='25'
            className={styles['recruit-title']}
          />
          <article>
            <img
              src='/images/新着求人画像.png'
              alt='新着求人画像'
              width='370'
              height='208'
              className={styles['recruit-img']}
            />
            <div className={styles['recruit-nav-container']}>
              <nav className={styles['recruit-nav']}>
                <div className={styles['recruit-nav-arrow']}></div>
              </nav>
              <nav className={styles['recruit-nav']}>
                <div className={styles['recruit-nav-arrow-2']}></div>
              </nav>
            </div>

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
                  <li className={styles['info-detail']}>月給148,000円~</li>
                  <li className={styles['info-detail']}>三重県伊勢市</li>
                  <li className={styles['info-detail']}>伊勢市駅 徒歩15分</li>
                </ul>
              </div>
              <button className={styles['recruit-button']}>
                新着求人一覧をもっと見る
              </button>
            </section>
          </article>
        </section>
      </section>
    </main>
  )
}

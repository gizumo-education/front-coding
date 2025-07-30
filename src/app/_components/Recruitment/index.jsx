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
            <h1 className={styles['recruit-caption']}>
              平日・夕方までの勤務！伊勢市の伊勢赤十字病院で医療事務求人
            </h1>
            <section>
              <ul>
                <li>給与</li>
                <li>所在地</li>
                <li>最寄り駅</li>
              </ul>
              <ul>
                <li>月給148,000円~</li>
                <li>三重県伊勢市</li>
                <li>伊勢市駅 徒歩15分</li>
              </ul>
              <button>新着求人一覧をもっと見る</button>
            </section>
          </article>
        </section>
      </section>
    </main>
  )
}

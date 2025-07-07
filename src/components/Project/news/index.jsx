import styles from './index.module.scss'

export const News = () => {
  return (
    <div className={styles['news-section']}>
      <div className={styles['news-inner']}>
        <div>
          <h1 className={styles['text-title']}>新着求人</h1>
        </div>

        <div className={styles['woman-list']}>
          <div className={`${styles['.slide-button']} ${styles['left']}`}></div>

          <div className={styles['card-item']}>
            <div className={styles['woman1']}></div>
            <span className={styles['subtext-title']}>
              平日・夕方までの勤務!伊勢市の伊勢赤 十字病院で医療事務求人
            </span>
            <div className={styles['card']}>
              <div className={styles['text-list']}>
                <span className={styles['label']}>給与</span>
                <span className={styles['text']}>月給148,000円〜</span>
              </div>
              <div className={styles['text-list']}>
                <span className={styles['label']}>所在地</span>
                <span className={styles['text']}>三重県伊勢市</span>
              </div>
              <div className={styles['text-list']}>
                <span className={styles['label']}>最寄駅</span>
                <span className={styles['text']}>伊勢市駅 徒歩15分</span>
              </div>
            </div>
          </div>
          <div className={styles['card-item']}>
            <div className={styles['woman2']}></div>
            <span className={styles['subtext-title']}>
              平日・夕方までの勤務!伊勢市の伊勢赤 十字病院で医療事務求人
            </span>
            <div className={styles['card']}>
              <div className={styles['text-list']}>
                <span className={styles['label']}>給与</span>
                <span className={styles['text']}>月給148,000円〜</span>
              </div>
              <div className={styles['text-list']}>
                <span className={styles['label']}>所在地</span>
                <span className={styles['text']}>三重県伊勢市</span>
              </div>
              <div className={styles['text-list']}>
                <span className={styles['label']}>最寄駅</span>
                <span className={styles['text']}>伊勢市駅 徒歩15分</span>
              </div>
            </div>
          </div>
          <div className={styles['card-item']}>
            <div className={styles['woman3']}></div>
            <span className={styles['subtext-title']}>
              平日・夕方までの勤務!伊勢市の伊勢赤 十字病院で医療事務求人
            </span>
            <div className={styles['card']}>
              <div className={styles['text-list']}>
                <span className={styles['label']}>給与</span>
                <span className={styles['text']}>月給148,000円〜</span>
              </div>
              <div className={styles['text-list']}>
                <span className={styles['label']}>所在地</span>
                <span className={styles['text']}>三重県伊勢市</span>
              </div>
              <div className={styles['text-list']}>
                <span className={styles['label']}>最寄駅</span>
                <span className={styles['text']}>伊勢市駅 徒歩15分</span>
              </div>
            </div>
          </div>
          <div className={styles['card-item']}>
            <div className={styles['woman4']}></div>
            <span className={styles['subtext-title']}>
              平日・夕方までの勤務!伊勢市の伊勢赤 十字病院で医療事務求人
            </span>
            <div className={styles['card']}>
              <div className={styles['text-list']}>
                <span className={styles['label']}>給与</span>
                <span className={styles['text']}>月給148,000円〜</span>
              </div>
              <div className={styles['text-list']}>
                <span className={styles['label']}>所在地</span>
                <span className={styles['text']}>三重県伊勢市</span>
              </div>
              <div className={styles['text-list']}>
                <span className={styles['label']}>最寄駅</span>
                <span className={styles['text']}>伊勢市駅 徒歩15分</span>
              </div>
            </div>
          </div>
          <div className={`${styles['slideButton']} ${styles['right']}`}></div>
        </div>

        <div className={styles['more-button-wrapper']}>
          <button className={styles['more-button']}>
            新着求人一覧をもっと見る
          </button>
        </div>
      </div>
    </div>
  )
}

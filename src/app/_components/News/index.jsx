import styles from './index.module.scss'

export const News = () => {
  return (
    <section className={styles['news']}>
      <h2 className={styles['title']}>新着求人</h2>
      <div className={styles['slider']}>
        <button
          type='button'
          className={styles['nav-button-right']}
          aria-label='次のスライド'
        >
          <img
            src='/img/arrow-right.png'
            alt=''
            className={styles['nav-icon-right']}
          />
        </button>

        <button
          type='button'
          className={styles['nav-button-left']}
          aria-label='前のスライド'
        >
          <img
            src='/img/arrow-left.png'
            alt=''
            className={styles['nav-icon-left']}
          />
        </button>

        <div className={styles['card-content']}>
          <div className={styles['card']}>
            <div className={styles['image-wrapper']}>
              <img
                className={styles['image']}
                src='img/person-with-documents-a.jpg'
                alt='平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人'
              />
            </div>

            <div className={styles['content']}>
              <p className={styles['description']}>
                平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
              </p>
              <dl className={styles['info-list']}>
                <div className={styles['info-item']}>
                  <dt className={styles['label']}>給与</dt>
                  <dd className={styles['value']}>月給148,000円〜</dd>
                </div>
                <div className={styles['info-item']}>
                  <dt className={styles['label']}>所在地</dt>
                  <dd className={styles['value']}>三重県伊勢市</dd>
                </div>
                <div className={styles['info-item']}>
                  <dt className={styles['label']}>最寄駅</dt>
                  <dd className={styles['value']}>伊勢市駅 徒歩15分</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className={`${styles['card']} ${styles['card-hidden-sp']}`}>
            <div className={styles['image-wrapper']}>
              <img
                className={styles['image']}
                src='img/person-with-documents-b.jpg'
                alt='平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人'
              />
            </div>
            <div className={styles['content']}>
              <p className={styles['description']}>
                平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
              </p>
              <dl className={styles['info-list']}>
                <div className={styles['info-item']}>
                  <dt className={styles['label']}>給与</dt>
                  <dd className={styles['value']}>月給148,000円〜</dd>
                </div>
                <div className={styles['info-item']}>
                  <dt className={styles['label']}>所在地</dt>
                  <dd className={styles['value']}>三重県伊勢市</dd>
                </div>
                <div className={styles['info-item']}>
                  <dt className={styles['label']}>最寄駅</dt>
                  <dd className={styles['value']}>伊勢市駅 徒歩15分</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className={`${styles['card']} ${styles['card-hidden-sp']}`}>
            <div className={styles['image-wrapper']}>
              <img
                className={styles['image']}
                src='img/person-with-documents-c.jpg'
                alt='平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人'
              />
            </div>
            <div className={styles['content']}>
              <p className={styles['description']}>
                平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
              </p>
              <dl className={styles['info-list']}>
                <div className={styles['info-item']}>
                  <dt className={styles['label']}>給与</dt>
                  <dd className={styles['value']}>月給148,000円〜</dd>
                </div>
                <div className={styles['info-item']}>
                  <dt className={styles['label']}>所在地</dt>
                  <dd className={styles['value']}>三重県伊勢市</dd>
                </div>
                <div className={styles['info-item']}>
                  <dt className={styles['label']}>最寄駅</dt>
                  <dd className={styles['value']}>伊勢市駅 徒歩15分</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className={`${styles['card']} ${styles['card-hidden-sp']}`}>
            <div className={styles['image-wrapper']}>
              <img
                className={styles['image']}
                src='img/person-with-documents-d.jpg'
                alt='平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人'
              />
            </div>
            <div className={styles['content']}>
              <p className={styles['description']}>
                平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
              </p>
              <dl className={styles['info-list']}>
                <div className={styles['info-item']}>
                  <dt className={styles['label']}>給与</dt>
                  <dd className={styles['value']}>月給148,000円〜</dd>
                </div>
                <div className={styles['info-item']}>
                  <dt className={styles['label']}>所在地</dt>
                  <dd className={styles['value']}>三重県伊勢市</dd>
                </div>
                <div className={styles['info-item']}>
                  <dt className={styles['label']}>最寄駅</dt>
                  <dd className={styles['value']}>伊勢市駅 徒歩15分</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <a href='/' className={styles.button}>
        新着求人一覧をもっと見る
      </a>
    </section>
  )
}

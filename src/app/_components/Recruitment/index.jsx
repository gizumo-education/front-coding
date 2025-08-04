import styles from './index.module.scss'

export const Recruitment = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['recruit']}>
        <section className={styles['inner']}>
          <article>
            <div className={styles['recruit-title']}>
              <h1>新着求人</h1>
            </div>
            <div className={styles['recruit-nav-container']}>
              <nav className={styles['recruit-nav']}>
                <div className={styles['recruit-nav-arrow']}></div>
              </nav>
              <nav className={styles['recruit-nav']}>
                <div className={styles['recruit-nav-arrow-2']}></div>
              </nav>
            </div>
            <ul className={styles['recruit-container']}>
              <li className={styles['recruit-content']}>
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
                      <li className={styles['info-detail']}>
                        伊勢市駅 徒歩15分
                      </li>
                    </ul>
                  </div>
                </section>
              </li>
              <li className={styles['recruit-content']}>
                <img
                  src='/images/新着求人女性2.jpg'
                  alt='新着求人画像2'
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
                      <li className={styles['info-detail']}>月給148,000円~</li>
                      <li className={styles['info-detail']}>三重県伊勢市</li>
                      <li className={styles['info-detail']}>
                        伊勢市駅 徒歩15分
                      </li>
                    </ul>
                  </div>
                </section>
              </li>
              <li className={styles['recruit-content']}>
                <img
                  src='/images/新着求人画像3.jpg'
                  alt='新着求人画像3'
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
                      <li className={styles['info-detail']}>月給148,000円~</li>
                      <li className={styles['info-detail']}>三重県伊勢市</li>
                      <li className={styles['info-detail']}>
                        伊勢市駅 徒歩15分
                      </li>
                    </ul>
                  </div>
                </section>
              </li>
              <li className={styles['recruit-content']}>
                <img
                  src='/images/新着求人画像4.jpg'
                  alt='新着求人画像4'
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
                      <li className={styles['info-detail']}>月給148,000円~</li>
                      <li className={styles['info-detail']}>三重県伊勢市</li>
                      <li className={styles['info-detail']}>
                        伊勢市駅 徒歩15分
                      </li>
                    </ul>
                  </div>
                </section>
              </li>
            </ul>
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

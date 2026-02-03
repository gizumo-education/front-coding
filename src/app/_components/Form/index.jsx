import styles from './index.module.scss'

export const Form = () => {
  return (
    <section className={styles['job-search']}>
      <div className={styles['job-search-inner']}>
        <h2 className={styles['job-search-title']}>お仕事検索</h2>
        <p className={styles['job-search-lead']}>
          働きたい職種・地域・希望給与を入れて検索！
        </p>

        <div className={styles['job-search-form']}>
          <div className={styles['job-search-select-row']}>
            <div className={styles['job-search-select-wrap']}>
              <span className={styles['job-search-select']}>
                医療事務
                <span className={styles['job-search-select-arrow']} />
              </span>
            </div>

            <div className={styles['job-search-select-wrap']}>
              <span className={styles['job-search-select']}>
                東京都
                <span className={styles['job-search-select-arrow']} />
              </span>
            </div>

            <div className={styles['job-search-select-wrap']}>
              <span className={styles['job-search-select']}>
                月給17万〜
                <span className={styles['job-search-select-arrow']} />
              </span>
            </div>
          </div>

          <div className={styles['job-search-input-wrap']}>
            <p className={styles['job-search-input']}>
              キーワード・企業名・スキルなど
            </p>
          </div>

          <div className={styles['job-search-button']}>
            <div className={styles['job-search-button-icon']} />
            検索する
          </div>
        </div>
      </div>
    </section>
  )
}

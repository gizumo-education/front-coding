import styles from './index.module.scss'

export const Jobsearch = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['inner']}>
        <section className={styles['work-flame']}>
          <h1 className={styles['work-title']}>お仕事検索</h1>
          <p className={styles['work-caption']}>
            働きたい職種・地域・希望給与を入れて検索！
          </p>
          <section className={styles['select-fields']}>
            <div className={styles['select-field-container']}>
              <select className={styles['select-field']} name='job'>
                <option value='医療事務'>医療事務</option>
              </select>
            </div>
            <div className={styles['select-field-container']}>
              <select className={styles['select-field']}>
                <option value='東京都'>東京都</option>
              </select>
            </div>
            <div className={styles['select-field-container']}>
              <select className={styles['select-field']}>
                <option value='月給17万～'>月給17万～</option>
              </select>
            </div>
          </section>
          <input
            className={styles['input-field']}
            placeholder='キーワード・企業名・スキルなど'
          />
          <button className={styles['search-button']}>
            <img
              src='/images/虫眼鏡.png'
              alt='虫眼鏡'
              className={styles['find-glass']}
              width='16'
              height='16'
            />
            検索する
          </button>
        </section>
      </section>
    </main>
  )
}

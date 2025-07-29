import styles from './index.module.scss'

export const Jobsearch = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['inner']}>
        <section className={styles['work-flame']}>
          <img
            src='/images/お仕事検索.png'
            alt='お仕事検索'
            width='110'
            height='20'
            className={styles['work-title']}
          />
          <section className={styles['work-caption']}>
            働きたい職種・地域・希望給与を入れて検索！
          </section>
          <section className={styles['select-fields']}>
            <nav className={styles['select-field']}>
              医療事務
              <mark className={styles['triangle']}></mark>
            </nav>
            <nav className={styles['select-field']}>
              東京都
              <mark className={styles['triangle']}></mark>
            </nav>
            <nav className={styles['select-field']}>
              月給17万～
              <mark className={styles['triangle']}></mark>
            </nav>
          </section>
          <nav className={styles['input-field']}>
            キーワード・企業名・スキルなど
          </nav>
          <section className={styles['search-button']}>
            <img
              src='/images/虫眼鏡.png'
              alt='虫眼鏡'
              className={styles['find-glass']}
              width='16'
              height='16'
            />
            検索する
          </section>
        </section>
      </section>
    </main>
  )
}

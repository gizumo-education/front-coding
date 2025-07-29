import styles from './index.module.scss'

export const Recruitment = () => {
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
          <p className={styles['work-caption']}>
            働きたい職種・地域・希望給与を入れて検索！
          </p>
          <section className={styles['select-fields']}>
            <section className={styles['select-field']}>
              医療事務
              <section className={styles['triangle']}></section>
            </section>
            <section className={styles['select-field']}>
              東京都
              <section className={styles['triangle']}></section>
            </section>
            <section className={styles['select-field']}>
              月給17万～
              <section className={styles['triangle']}></section>
            </section>
          </section>
          <section className={styles['input-field']}>
            キーワード・企業名・スキルなど
          </section>
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

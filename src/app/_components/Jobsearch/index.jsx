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
                <option value='調剤事務'>調剤事務</option>
                <option value='診療情報管理士'>診療情報管理士</option>
                <option value='歯科助手'>歯科助手</option>
                <option value='歯科事務'>歯科事務</option>
                <option value='看護補助・看護助手'>看護補助・看護助手</option>
                <option value='病院内SE'>病院内SE</option>
              </select>
            </div>
            <div className={styles['select-field-container']}>
              <select className={styles['select-field']}>
                <option value='東京都'>茨城県</option>
                <option value='東京都'>神奈川県</option>
                <option value='東京都'>群馬県</option>
                <option value='東京都'>埼玉県</option>
                <option value='東京都'>千葉県</option>
                <option value='東京都'>東京都</option>
                <option value='東京都'>栃木県</option>
              </select>
            </div>
            <div className={styles['select-field-container']}>
              <select className={styles['select-field']}>
                <option value='月給17万～'>月給17万～</option>
                <option value='月給18万～'>月給18万～</option>
                <option value='月給19万～'>月給19万～</option>
                <option value='月給20万～'>月給20万～</option>
                <option value='月給21万～'>月給21万～</option>
                <option value='月給22万～'>月給22万～</option>
                <option value='月給23万～'>月給23万～</option>
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

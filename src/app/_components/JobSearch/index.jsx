import styles from './JobSearch.module.scss'

export const JobSearch = () => {
  return (
    <section>
      <div className={styles['search-container']}>
        <h2 className={styles['search-title']}>お仕事検索</h2>
        <p className={styles['search-description']}>
          働きたい職種・地域・希望給与を入れて検索！
        </p>

        <form className={styles['search-form']}>
          <div className={styles['search-select-wrap']}>
            <select
              className={styles['search-select']}
              defaultValue='medical-office'
            >
              <option value='medical-office'>医療事務</option>
              <option value='dispensing-office'>調剤事務</option>
              <option value='health-information-manager'>診療情報管理士</option>
              <option value='dental-office'>歯科事務</option>
              <option value='nursing-assistant'>看護補助・看護助手</option>
              <option value='hospital-se'>病院内SE</option>
            </select>
          </div>

          <div className={styles['search-select-wrap']}>
            <select className={styles['search-select']} defaultValue='tokyo'>
              <option value='ibaraki'>茨城県</option>
              <option value='kanagawa'>神奈川県</option>
              <option value='gunma'>群馬県</option>
              <option value='saitama'>埼玉県</option>
              <option value='chiba'>千葉県</option>
              <option value='tokyo'>東京都</option>
              <option value='tochigi'>栃木県</option>
            </select>
          </div>

          <div className={styles['search-select-wrap']}>
            <select className={styles['search-select']} defaultValue='17'>
              <option value='17'>月給17万〜</option>
              <option value='18'>月給18万〜</option>
              <option value='19'>月給19万〜</option>
              <option value='20'>月給20万〜</option>
              <option value='21'>月給21万〜</option>
              <option value='22'>月給22万〜</option>
              <option value='23'>月給23万〜</option>
            </select>
          </div>
          <input
            type='text'
            className={styles['search-input']}
            placeholder='キーワード・企業名・スキルなど'
          />

          <button type='submit' className={styles['search-button']}>
            <img
              src='/img/pass.18.png'
              alt='検索'
              className={styles['button-icon']}
              width={18}
              height={18}
            />
            <span className={styles['button-text']}>検索する</span>
          </button>
        </form>
      </div>
    </section>
  )
}

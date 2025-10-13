import styles from './index.module.scss'

export const Jobsearch = () => {
  return (
    <section>
      <div className={styles['form']}>
        <div className={styles['form-container']}>
          <h1 className={styles['form-title']}>お仕事検索</h1>
          <span className={styles['form-description']}>
            働きたい職種・地域・希望給与を入れて検索！
          </span>
          <div className={styles['select']}>
            <div className={styles['select-wrapper']}>
              <select className={styles['select-form']} defaultValue='1'>
                <option value='1'>医療事務</option>
                <option value='2'>調剤事務</option>
                <option value='3'>診療情報管理士</option>
                <option value='4'>歯科助手</option>
                <option value='5'>歯科事務</option>
                <option value='6'>看護補助・看護助手</option>
                <option value='7'>病院内SE</option>
              </select>
            </div>
            <div className={styles['select-wrapper']}>
              <select className={styles['select-form']} defaultValue='6'>
                <option value='1'>茨城県</option>
                <option value='2'>神奈川県</option>
                <option value='3'>群馬県</option>
                <option value='4'>埼玉県</option>
                <option value='5'>千葉県</option>
                <option value='6'>東京都</option>
                <option value='7'>栃木県</option>
              </select>
            </div>
            <div className={styles['select-wrapper']}>
              <select className={styles['select-form']} defaultValue='1'>
                <option value='1'>月給17万〜</option>
                <option value='2'>月給18万〜</option>
                <option value='3'>月給19万〜</option>
                <option value='4'>月給20万〜</option>
                <option value='5'>月給21万〜</option>
                <option value='6'>月給22万〜</option>
                <option value='7'>月給23万〜</option>
              </select>
            </div>
            <div className={styles['input']}>
              <input
                type='text'
                placeholder='キーワード・企業名・スキルなど'
                className={styles['input-text']}
              />
            </div>
            <div className={styles['search']}>
              <button className={styles['search-button']}>
                <img
                  src='/images/search.png'
                  alt='検索'
                  className={styles['search-icon']}
                  width='29'
                  height='29'
                />
                <span className={styles['search-text']}>検索する</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

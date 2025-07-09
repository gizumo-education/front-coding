import styles from './index.module.scss'

export const Form = () => {
  return (
    <div className={styles['form']}>
      <div className={styles['form-inner']}>
        <div className={styles['form-text']}>
          <span className={styles['form-title']}>お仕事検索</span>
          <span className={styles['form-description']}>
            働きたい職種・地域・希望給与を入れて検索!
          </span>
          <div className={styles['select-box']}>
            <div className={styles['select-wrapper']}>
              <select className={styles['form-select']} required>
                <option value='' hidden>
                  医療事務
                </option>
                <option value='1'>調剤事務</option>
                <option value='2'>診療情報管理士</option>
                <option value='3'>歯科助手</option>
                <option value='4'>歯科事務</option>
                <option value='5'>看護補助・看護助手</option>
                <option value='6'>病院内SE</option>
              </select>
              <div className={styles['triangle']}></div>
            </div>
            <div className={styles['select-wrapper']}>
              <select className={styles['form-select']} required>
                <option value='' hidden>
                  東京都
                </option>
                <option value='1'>茨城県</option>
                <option value='2'>神奈川県</option>
                <option value='3'>群馬県</option>
                <option value='4'>埼玉県</option>
                <option value='5'>千葉県</option>
                <option value='6'>栃木県</option>
              </select>
              <div className={styles['triangle']}></div>
            </div>
            <div className={styles['select-wrapper']}>
              <select className={styles['form-select']} required>
                <option value='' hidden>
                  月給20万〜
                </option>
                <option value='1'>月給17万〜</option>
                <option value='2'>月給18万〜</option>
                <option value='3'>月給19万〜</option>
                <option value='4'>月給21万〜</option>
                <option value='5'>月給22万〜</option>
                <option value='6'>月給23万〜</option>
              </select>
              <div className={styles['triangle']}></div>
            </div>
            <div className={styles['input-button']}>
              <input
                type='text'
                placeholder='キーワード・企業名・スキルなど'
                className={styles['keyword-input']}
              />
            </div>
            <div className={styles['search']}>
              <button className={styles['search-button']}>
                <img
                  src='./img/icon/icon-Form search.png'
                  alt='検索'
                  className={styles['search-icon']}
                  width='29'
                  height='29'
                />
                検索する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

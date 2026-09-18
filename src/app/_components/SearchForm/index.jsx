import styles from './index.module.scss'

export const SearchForm = () => {
  return (
    <section className={styles['search-form']}>
      <form className={styles['search-form-inner']} action='/'>
        <h2 className={styles['search-form-heading']}>お仕事検索</h2>
        <p className={styles['search-form-text']}>
          働きたい職種・地域・希望給与を入れて検索！
        </p>
        <div className={styles['search-form-selects']}>
          <select
            className={styles['search-form-select']}
            defaultValue='医療事務'
          >
            <option value='医療事務'>医療事務</option>
            <option value='調剤事務'>調剤事務</option>
            <option value='診療情報管理士'>診療情報管理士</option>
            <option value='歯科助手'>歯科助手</option>
            <option value='歯科事務'>歯科事務</option>
            <option value='看護補助・看護助手'>看護補助・看護助手</option>
            <option value='病院内SE'>病院内SE</option>
          </select>

          <select
            className={styles['search-form-select']}
            defaultValue='東京都'
          >
            <option value='茨城県'>茨城県</option>
            <option value='神奈川県'>神奈川県</option>
            <option value='群馬県'>群馬県</option>
            <option value='埼玉県'>埼玉県</option>
            <option value='千葉県'>千葉県</option>
            <option value='東京都'>東京都</option>
            <option value='栃木県'>栃木県</option>
          </select>

          <select
            className={styles['search-form-select']}
            defaultValue='月給20万〜'
          >
            <option value='月給17万〜'>月給17万〜</option>
            <option value='月給18万〜'>月給18万〜</option>
            <option value='月給19万〜'>月給19万〜</option>
            <option value='月給20万〜'>月給20万〜</option>
            <option value='月給21万〜'>月給21万〜</option>
            <option value='月給22万〜'>月給22万〜</option>
            <option value='月給23万〜'>月給23万〜</option>
          </select>
        </div>
        <input
          type='text'
          className={styles['search-form-keyword']}
          placeholder='キーワード・企業名・スキルなど'
        />
        <button type='submit' className={styles['search-form-button']}>
          検索する
        </button>
      </form>
    </section>
  )
}

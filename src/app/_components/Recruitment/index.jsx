import styles from './index.module.scss'

export const Recruitment = () => {
  return (
    <section className={styles.section}>
      <div className={styles['text-area']}>
        <h2 className={styles.title}>お仕事検索</h2>
        <p className={styles.text}>
          働きたい職種・地域・希望給与を入れて検索！
        </p>
      </div>

      <form action='#' method='get' className={styles.form}>
        <div className={styles['select-wrapper']}>
          <select
            id='job'
            name='job'
            defaultValue='医療事務'
            className={styles['select-box']}
          >
            <option value='医療事務'>医療事務</option>
            <option value='調剤事務'>調剤事務</option>
            <option value='診療情報管理士'>診療情報管理士</option>
            <option value='歯科助手'>歯科助手</option>
            <option value='歯科事務'>歯科事務</option>
            <option value='看護補助・看護助手'>看護補助・看護助手</option>
            <option value='病院内SE'>病院内SE</option>
          </select>
        </div>
        <div className={styles['select-wrapper']}>
          <select
            id='place'
            name='place'
            defaultValue='東京都'
            className={styles['select-box']}
          >
            <option value='茨城県'>茨城県</option>
            <option value='神奈川県'>神奈川県</option>
            <option value='群馬県'>群馬県</option>
            <option value='埼玉県'>埼玉県</option>
            <option value='千葉県'>千葉県</option>
            <option value='東京都'>東京都</option>
            <option value='栃木県'>栃木県</option>
          </select>
        </div>
        <div className={styles['select-wrapper']}>
          <select
            id='money'
            name='money'
            defaultValue='月給20万〜'
            className={styles['select-box']}
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
          id='keyword'
          name='keyword'
          placeholder='キーワード・企業名・スキルなど'
          className={styles.input}
        ></input>
        <button type='submit' className={styles.button}>
          <img
            src='/icon/search.svg'
            alt='虫眼鏡'
            className={styles.icon}
            width={18}
            height={18}
          />
          検索する
        </button>
      </form>
    </section>
  )
}

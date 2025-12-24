import clsx from 'clsx'
import styles from './index.module.scss'

export const Search = () => {
  return (
    <section className={'inner'}>
      <div className={styles.search}>
        <h2 className={styles.search_title}>お仕事検索</h2>
        <p className={styles.search_text}>
          働きたい職種・地域・希望給与を入れて検索！
        </p>

        <form
          role='search'
          className={clsx(styles.search_form, styles.search_pcform)}
        >
          <div className={styles.search_form_selects}>
            <select name='job' className={styles.search_form_select}>
              <option value='medical'>医療事務</option>
              <option value='dispensing'>調剤事務</option>
              <option value='information'>診療情報管理士</option>
              <option value='dental_assistant'>歯科助手</option>
              <option value='dental_affairs'>歯科事務</option>
              <option value='nursing_assistant'>看護補助・看護助手</option>
            </select>

            <select name='area' className={styles.search_form_select}>
              <option value='tokyo'>東京都</option>
              <option value='ibaragi'>茨城県</option>
              <option value='kanagawa'>神奈川県</option>
              <option value='gunma'>群馬県</option>
              <option value='saitama'>埼玉県</option>
              <option value='chiba'>千葉県</option>
              <option value='tochigi'>栃木県</option>
            </select>

            <select name='supply' className={styles.search_form_select}>
              <option value='fulltime'>月給17万〜</option>
              <option value='fulltime'>月給18万〜</option>
              <option value='fulltime'>月給19万〜</option>
              <option value='fulltime'>月給20万〜</option>
              <option value='fulltime'>月給21万〜</option>
              <option value='fulltime'>月給22万〜</option>
              <option value='fulltime'>月給23万〜</option>
            </select>
          </div>

          <div className={styles.search_form_inputs}>
            <input
              type='search'
              name='keyword'
              placeholder='キーワード・企業名・スキルなど'
              className={styles.search_form_input}
            />
            <a href='/'>
              <button type='submit' className={styles.search_form_button}>
                検索する
              </button>
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}

import clsx from 'clsx'
import styles from './index.module.scss'

export const JobSearch = () => {
  return (
    <section className={styles.box}>
      <h1 className={styles.title}>お仕事検索</h1>
      <p className={clsx(styles.text)}>
        働きたい職種・地域・希望給与を入れて検索!
      </p>

      <div className={styles.select}>
        <select className={styles['select_box']} defaultValue='medical'>
          <option value='medical'>医療事務</option>
          <option value='pharmacy'>調剤事務</option>
          <option value='information'>診療情報管理士</option>
          <option value='dental-assistant'>歯科助手</option>
          <option value='dental-office'>歯科事務</option>
          <option value='nurse'>看護補助・看護助手</option>
          <option value='hospital-engineer'>病院内SE</option>
        </select>

        <select className={styles['select_box']} defaultValue='tokyo'>
          <option value='ibaraki'>茨城県</option>
          <option value='kanagawa'>神奈川県</option>
          <option value='gunnma'>群馬県</option>
          <option value='saitama'>埼玉県</option>
          <option value='chiba'>千葉県</option>
          <option value='tokyo'>東京都</option>
          <option value='tochigi'>栃木県</option>
        </select>

        <select className={styles['select_box']} defaultValue='twenty'>
          <option value='seventeen'>月給17万〜</option>
          <option value='eighteen'>月給18万〜</option>
          <option value='nineteen'>月給19万〜</option>
          <option value='twenty'>月給20万〜</option>
          <option value='twentyone'>月給21万〜</option>
          <option value='twentytwo'>月給22万〜</option>
          <option value='twentythree'>月給23万〜</option>
        </select>
      </div>

      <input
        type='text'
        placeholder='キーワード・企業名・スキルなど'
        className={styles.form}
      />

      <button className={clsx(styles.button, styles.search)}>検索する</button>
    </section>
  )
}

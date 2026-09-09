import styles from './index.module.scss'

const jobs = [
  { id: 1, name: '医療事務' },
  { id: 2, name: '調剤事務' },
  { id: 3, name: '診療情報管理士' },
  { id: 4, name: '歯科助手' },
  { id: 5, name: '歯科事務' },
  { id: 6, name: '看護補助・看護助手' },
  { id: 7, name: '病院内SE' },
]

const areas = [
  { id: 1, name: '茨城県' },
  { id: 2, name: '神奈川県' },
  { id: 3, name: '群馬県' },
  { id: 4, name: '埼玉県' },
  { id: 5, name: '千葉県' },
  { id: 6, name: '東京都' },
  { id: 7, name: '栃木県' },
]

const salaries = [
  { id: 1, name: '月給17万〜' },
  { id: 2, name: '月給18万〜' },
  { id: 3, name: '月給19万〜' },
  { id: 4, name: '月給20万〜' },
  { id: 5, name: '月給21万〜' },
  { id: 6, name: '月給22万〜' },
  { id: 7, name: '月給23万〜' },
]

export const SearchForm = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>お仕事検索</h2>
      <p className={styles.description}>
        働きたい職種・地域・希望給与を入れて検索！
      </p>
      <div className={styles['select-wrapper']}>
        <select className={styles.select}>
          {jobs.map((job) => (
            <option key={job.id}>{job.name}</option>
          ))}
        </select>
        <select className={styles.select} defaultValue='東京都'>
          {areas.map((area) => (
            <option key={area.id} value={area.name}>
              {area.name}
            </option>
          ))}
        </select>
        <select className={styles.select}>
          {salaries.map((salary) => (
            <option key={salary.id}>{salary.name}</option>
          ))}
        </select>
      </div>
      <input
        className={styles.input}
        type='text'
        placeholder='キーワード・企業名・スキルなど'
      />
      <button className={styles.button} type='submit'>
        <img
          className={styles['button-icon']}
          src='/icon/search.svg'
          alt=''
          width={18}
          height={19}
        />
        <span className={styles['button-text']}>検索する</span>
      </button>
    </form>
  )
}

import styles from './style.module.scss'

// 1. 職種データ
const JOB_TYPES = [
  '医療事務',
  '調剤事務',
  '診療情報管理士',
  '歯科助手',
  '歯科事務',
  '看護補助・看護助手',
  '病院内SE',
]

// 2. 都道府県データ
const LOCATIONS = [
  '茨城県',
  '神奈川県',
  '群馬県',
  '埼玉県',
  '千葉県',
  '東京都',
  '栃木県',
]

// 3. 給与データ
const SALARIES = [
  '月給17万〜',
  '月給18万〜',
  '月給19万〜',
  '月給20万〜',
  '月給21万〜',
  '月給22万〜',
  '月給23万〜',
]

export const SearchForm = () => {
  return (
    <form className={styles['search-form']}>
      <h2 className={styles['search-title']}>お仕事検索</h2>
      <p className={styles['description']}>
        働きたい環境・地域・希望給与を入れて検索！
      </p>

      <div className={styles['search-conditions']}>
        <select
          className={styles['select']}
          aria-label='職種を選択'
          defaultValue='医療事務'
        >
          {JOB_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          className={styles['select']}
          aria-label='都道府県を選択'
          defaultValue='東京都'
        >
          {LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          className={styles['select']}
          aria-label='給与を選択'
          defaultValue='月給20万〜'
        >
          {SALARIES.map((salary) => (
            <option key={salary} value={salary}>
              {salary}
            </option>
          ))}
        </select>
      </div>

      <div className={styles['group-action']}>
        <input
          type='text'
          placeholder='キーワード・企業名・スキルなど'
          aria-label='キーワード検索'
          className={styles['search-input']}
        />
        <button className={styles['search-button']} type='submit'>
          <img
            className={styles['search-img']}
            src='/images/search.svg'
            alt='検索ボタン'
            width={18}
            height={19}
          />
          検索する
        </button>
      </div>
    </form>
  )
}

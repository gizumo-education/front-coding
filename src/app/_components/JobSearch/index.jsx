import styles from './index.module.scss'

export const JobSearch = () => {
  const jobs = [
    { value: 'medical', label: '医療事務' },
    { value: 'pharmacy', label: '調剤事務' },
    { value: 'him', label: '診療情報管理士' },
    { value: 'dentalAssistant', label: '歯科助手' },
    { value: 'dentalReceptionist', label: '歯科事務' },
    { value: 'nurse', label: '看護補助・看護助手' },
    { value: 'SE', label: '病院内SE' },
  ]

  const areas = [
    { value: 'ibaraki', label: '茨城県' },
    { value: 'kanagawa', label: '神奈川県' },
    { value: 'gunma', label: '群馬県' },
    { value: 'saitama', label: '埼玉県' },
    { value: 'chiba', label: '千葉県' },
    { value: 'tokyo', label: '東京都' },
    { value: 'tochigi', label: '栃木県' },
  ]

  const salaries = [
    { value: 'monthly_17', label: '月給17万〜' },
    { value: 'monthly_18', label: '月給18万〜' },
    { value: 'monthly_19', label: '月給19万〜' },
    { value: 'monthly_20', label: '月給20万〜' },
    { value: 'monthly_21', label: '月給21万〜' },
    { value: 'monthly_22', label: '月給22万〜' },
    { value: 'monthly_23', label: '月給23万〜' },
  ]

  return (
    <div className={styles['search-container']}>
      <h2 className={styles['search-title']}>お仕事検索</h2>
      <p className={styles['search-detail']}>
        働きたい職種・地域・希望給与を入れて検索！
      </p>
      <form>
        <div className={styles['search-options']}>
          <div className={styles['select-wrapper']}>
            <select className={styles['option']} aria-label='職種'>
              {jobs.map((job) => (
                <option key={job.value} value={job.value}>
                  {job.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles['select-wrapper']}>
            <select className={styles['option']} aria-label='地域'>
              {areas.map((area) => (
                <option key={area.value} value={area.value}>
                  {area.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles['select-wrapper']}>
            <select className={styles['option']} aria-label='給与'>
              {salaries.map((salary) => (
                <option key={salary.value} value={salary.value}>
                  {salary.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <input
          type='text'
          className={styles['search-input']}
          placeholder='キーワード・企業名・スキルなど'
        />
        <button type='submit' className={styles['search-button']}>
          <img
            src='/icon/search-white.svg'
            alt=''
            width='10'
            height='10'
            className={styles['search-icon']}
          />
          検索する
        </button>
      </form>
    </div>
  )
}

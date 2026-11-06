import styles from './index.module.scss'
import { Button } from '@/app/_components/common/Button'

const jobCategory = [
  { value: 'medical-clerk', label: '医療事務' },
  { value: 'dispensing-clerk', label: '調剤事務' },
  { value: 'health-information-manager', label: '診療情報管理士' },
  { value: 'dental-assistant', label: '歯科助手' },
  { value: 'dental-clerk', label: '歯科事務' },
  { value: 'nursing-assistant', label: '看護補助・看護助手' },
  { value: 'hospital-in-house-se', label: '病院内SE' },
]

const jobArea = [
  { value: 'ibaragi', label: '茨城県' },
  { value: 'kanagawa', label: '神奈川県' },
  { value: 'gunma', label: '群馬県' },
  { value: 'saitama', label: '埼玉県' },
  { value: 'tiba', label: '千葉県' },
  { value: 'tokyo', label: '東京都' },
  { value: 'totigi', label: '栃木県' },
]

const desiredSalary = [
  { value: 'from-170000', label: '月給17万〜' },
  { value: 'from-180000', label: '月給18万〜' },
  { value: 'from-190000', label: '月給19万〜' },
  { value: 'from-200000', label: '月給20万〜' },
  { value: 'from-210000', label: '月給21万〜' },
  { value: 'from-220000', label: '月給22万〜' },
  { value: 'from-230000', label: '月給23万〜' },
]

export const Search = () => {
  return (
    <section className={styles['form-wrapper']}>
      <h2 className={styles['form-title']}>お仕事検索</h2>
      <p className={styles['form-sub-title']}>
        働きたい職種・地域・希望給与を入れて検索！
      </p>
      <form action='#' className={styles.form}>
        <select
          name='occupation'
          className={styles.select}
          defaultValue='medical-clerk'
          aria-label='職種'
        >
          {jobCategory.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <select
          name='area'
          className={styles.select}
          defaultValue='tokyo'
          aria-label='地域'
        >
          {jobArea.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <select
          name='salary'
          className={styles.select}
          defaultValue='from-200000'
          aria-label='希望給与'
        >
          {desiredSalary.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <input
          type='text'
          name='keyword'
          aria-label='キーワード'
          placeholder='キーワード・企業名・スキルなど'
          className={styles['input-field']}
        />
        <Button type='button' className={styles.submit}>
          検索する
        </Button>
      </form>
    </section>
  )
}

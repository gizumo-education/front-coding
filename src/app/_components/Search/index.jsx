import styles from './index.module.scss'
import { Button } from '@/app/_components/common/Button'

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
          <option value='medical-clerk'>医療事務</option>
          <option value='dispensing-clerk'>調剤事務</option>
          <option value='health-information-manager'>診療情報管理士</option>
          <option value='dental-assistant'>歯科助手</option>
          <option value='dental-clerk'>歯科事務</option>
          <option value='nursing-assistant'>看護補助・看護助手</option>
          <option value='hospital-in-house-se'>病院内SE</option>
        </select>
        <select
          name='area'
          className={styles.select}
          defaultValue='tokyo'
          aria-label='地域'
        >
          <option value='ibaragi'>茨城県</option>
          <option value='kanagawa'>神奈川県</option>
          <option value='gunma'>群馬県</option>
          <option value='saitama'>埼玉県</option>
          <option value='tiba'>千葉県</option>
          <option value='tokyo'>東京都</option>
          <option value='totigi'>栃木県</option>
        </select>
        <select
          name='salary'
          className={styles.select}
          defaultValue='from-200000'
          aria-label='希望給与'
        >
          <option value='from-170000'>月給17万〜</option>
          <option value='from-180000'>月給18万〜</option>
          <option value='from-190000'>月給19万〜</option>
          <option value='from-200000'>月給20万〜</option>
          <option value='from-210000'>月給21万〜</option>
          <option value='from-220000'>月給22万〜</option>
          <option value='from-230000'>月給23万〜</option>
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

import styles from './index.module.scss'
import { Button } from '@/components/ui/Button'

export const JobSearch = () => {
  return (
    <section>
      <form action='#' className={styles['job-search-wrapper']}>
        <h2 className={styles.title}>お仕事検索</h2>
        <p className={styles.description}>
          働きたい職種・地域・希望給与を入れて検索！
        </p>
        <div className={styles['form-body']}>
          <div className={styles['select-wrapper']}>
            <div className={styles['select-inner']}>
              <select name='Occupation' className={styles.select}>
                <option value='医療事務'>医療事務</option>
                <option value='調剤事務'>調剤事務</option>
                <option value='診療情報管理士'>診療情報管理士</option>
                <option value='歯科助手'>歯科助手</option>
                <option value='歯科事務'>歯科事務</option>
                <option value='看護補助・看護助手'>看護補助・看護助手</option>
                <option value='病院内SE'>病院内SE</option>
              </select>
            </div>
            <div className={styles['select-inner']}>
              <select name='prefectures' className={styles.select}>
                <option value='茨城県'>茨城県</option>
                <option value='神奈川県'>神奈川県</option>
                <option value='群馬県'>群馬県</option>
                <option value='埼玉県'>埼玉県</option>
                <option value='千葉県'>千葉県</option>
                <option value='東京都'>東京都</option>
                <option value='栃木県'>栃木県</option>
              </select>
            </div>
            <div className={styles['select-inner']}>
              <select name='Occupation' className={styles.select}>
                <option value='月額17万〜'>月額17万〜</option>
                <option value='月額18万〜'>月額18万〜</option>
                <option value='月額19万〜'>月額19万〜</option>
                <option value='月額20万〜'>月額20万〜</option>
                <option value='月額21万〜'>月額21万〜</option>
                <option value='月額22万〜'>月額22万〜</option>
                <option value='月額23万〜'>月額23万〜</option>
              </select>
            </div>
          </div>
          <input
            type='search'
            name='keyword'
            autoComplete='off'
            placeholder='キーワード・企業名・スキルなど'
            className={styles.search}
          />
          <Button
            text='検索する'
            icon='/icon/search.svg'
            size='small'
            type='submit'
          />
        </div>
      </form>
    </section>
  )
}

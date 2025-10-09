import { SearchButton } from '@/components/SearchButton'
import styles from './index.module.scss'

export const Form = ({ className = '' }) => {
  return (
    <section>
      <div className={`${styles['form']} ${className}`}>
        <div className={styles['form-container']}>
          <div className={styles['form-textbox']}>
            <p className={styles['form-text']}>お仕事検索</p>
            <p className={styles['form-description']}>
              働きたい職種・地域・希望給与を入れて検索！
            </p>
          </div>

          <form action='/' method='get' className={styles['select-container']}>
            <div className={styles['select-wrapper']}>
              <div className={styles['form-select']}>
                <label htmlFor='job-name' className={styles['sr-only']}>
                  職種を選択
                </label>
                <select
                  className={styles['form-select-inner']}
                  name='job'
                  id='job-name'
                  aria-label='職種を選択'
                >
                  <option value='' disabled hidden>
                    医療事務
                  </option>
                  <option value='医療事務'>医療事務</option>
                  <option value='調剤事務'>調剤事務</option>
                  <option value='診療情報管理士'>診療情報管理士</option>
                  <option value='歯科助手'>歯科助手</option>
                  <option value='歯科事務'>歯科事務</option>
                  <option value='看護補助・看護助手'>看護補助・看護助手</option>
                  <option value='病院内SE'>病院内SE</option>
                </select>
                <svg width={13} height={8} viewBox='0 0 13 8' fill='none'>
                  <path
                    d='M6.49512 7.5L-0.00488281 0.5H12.9951L6.49512 7.5Z'
                    fill='#DE1E79'
                  />
                </svg>
              </div>
              <div className={styles['form-select']}>
                <label htmlFor='job-place' className={styles['sr-only']}>
                  地域を選択
                </label>
                <select
                  className={styles['form-select-inner']}
                  name='place'
                  id='job-place'
                  aria-label='地域を選択'
                >
                  <option value='' hidden>
                    東京都
                  </option>
                  <option value='茨城県'>茨城県</option>
                  <option value='神奈川県'>神奈川県</option>
                  <option value='群馬県'>群馬県</option>
                  <option value='埼玉県'>埼玉県</option>
                  <option value='千葉県'>千葉県</option>
                  <option value='東京都'>東京都</option>
                  <option value='栃木県'>栃木県</option>
                </select>
                <svg width={13} height={8} viewBox='0 0 13 8' fill='none'>
                  <path
                    d='M6.49512 7.5L-0.00488281 0.5H12.9951L6.49512 7.5Z'
                    fill='#DE1E79'
                  />
                </svg>
              </div>
              <div className={styles['form-select']}>
                <label htmlFor='job-salary' className={styles['sr-only']}>
                  希望給与を選択
                </label>
                <select
                  className={styles['form-select-inner']}
                  name='salary'
                  id='job-salary'
                  aria-label='希望給与を選択'
                >
                  <option value='' hidden>
                    月給20万〜
                  </option>
                  <option value='月給17万〜'>月給17万〜</option>
                  <option value='月給18万〜'>月給18万〜</option>
                  <option value='月給19万〜'>月給19万〜</option>
                  <option value='月給20万〜'>月給20万〜</option>
                  <option value='月給21万〜'>月給21万〜</option>
                  <option value='月給22万〜'>月給22万〜</option>
                  <option value='月給23万〜'>月給23万〜</option>
                </select>
                <svg width={13} height={8} viewBox='0 0 13 8' fill='none'>
                  <path
                    d='M6.49512 7.5L-0.00488281 0.5H12.9951L6.49512 7.5Z'
                    fill='#DE1E79'
                  />
                </svg>
              </div>
            </div>
            <div className={styles['form-input']}>
              <label htmlFor='job-keyword' className={styles['sr-only']}>
                キーワード・企業名・スキルなど
              </label>
              <input
                type='text'
                id='job-keyword'
                name='keyword'
                placeholder='キーワード・企業名・スキルなど'
                className={styles['form-input-field']}
              />
            </div>
            <div className={styles['search-button-wrapper']}>
              <SearchButton type='submit' text='検索する' />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

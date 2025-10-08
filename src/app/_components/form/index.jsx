import { SearchButton } from '@/components/SearchButton'
import styles from './index.module.scss'

export const Form = () => {
  return (
    <section>
      <div className={styles['form']}>
        <div className={styles['form-container']}>
          <div className={styles['form-textbox']}>
            <p className={styles['form-text']}>お仕事検索</p>
            <p className={styles['form-description']}>
              働きたい職種・地域・希望給与を入れて検索！
            </p>
          </div>
          <div className={styles['select-container']}>
            <div className={styles['select-wrapper']}>
              <div className={styles['form-select']}>
                <select
                  className={styles['form-select-inner']}
                  name='job'
                  id='job-name'
                  aria-label='職種を選択'
                >
                  <option value='' disabled hidden>
                    医療事務
                  </option>
                  <option value='1'>医療事務</option>
                  <option value='2'>調剤事務</option>
                  <option value='3'>診療情報管理士</option>
                  <option value='4'>歯科助手</option>
                  <option value='5'>歯科事務</option>
                  <option value='6'>看護補助・看護助手</option>
                  <option value='7'>病院内SE</option>
                </select>
                <svg
                  className={styles['']}
                  width={13}
                  height={8}
                  viewBox='0 0 13 8'
                  fill='none'
                >
                  <path
                    d='M6.49512 7.5L-0.00488281 0.5H12.9951L6.49512 7.5Z'
                    fill='#DE1E79'
                  />
                </svg>
              </div>
              <div className={styles['form-select']}>
                <select
                  className={styles['form-select-inner']}
                  name='job'
                  id='job-place'
                  aria-label='地域を選択'
                >
                  <option value='' hidden>
                    東京都
                  </option>
                  <option value='1'>茨城県</option>
                  <option value='2'>神奈川県</option>
                  <option value='3'>群馬県</option>
                  <option value='4'>埼玉県</option>
                  <option value='5'>千葉県</option>
                  <option value='6'>東京都</option>
                  <option value='7'>栃木県</option>
                </select>
                <svg
                  className={styles['']}
                  width={13}
                  height={8}
                  viewBox='0 0 13 8'
                  fill='none'
                >
                  <path
                    d='M6.49512 7.5L-0.00488281 0.5H12.9951L6.49512 7.5Z'
                    fill='#DE1E79'
                  />
                </svg>
              </div>
              <div className={styles['form-select']}>
                <select
                  className={styles['form-select-inner']}
                  name='job'
                  id='job-salary'
                  aria-label='希望給与を選択'
                >
                  <option value='' hidden>
                    月給20万〜
                  </option>
                  <option value='1'>月給17万〜</option>
                  <option value='2'>月給18万〜</option>
                  <option value='3'>月給19万〜</option>
                  <option value='4'>月給20万〜</option>
                  <option value='5'>月給21万〜</option>
                  <option value='6'>月給22万〜</option>
                  <option value='7'>月給23万〜</option>
                </select>
                <svg
                  className={styles['']}
                  width={13}
                  height={8}
                  viewBox='0 0 13 8'
                  fill='none'
                >
                  <path
                    d='M6.49512 7.5L-0.00488281 0.5H12.9951L6.49512 7.5Z'
                    fill='#DE1E79'
                  />
                </svg>
              </div>
            </div>
            <div className={styles['form-input']}>
              <input
                type='text'
                id='job-keyword'
                placeholder='キーワード・企業名・スキルなど'
                className={styles['form-input-field']}
              />
            </div>
            <div className={styles['search-button-wrapper']}>
              <SearchButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

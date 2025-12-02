import { SearchButton } from '@/components/SearchButton'
import styles from './index.module.scss'

export const Form = ({ className = '' }) => {
  return (
    <section className={'inner'}>
      <div className={className}>
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
                  <option value='' hidden>
                    医療事務
                  </option>
                </select>
                <svg
                  className={styles['form-triangle']}
                  width={13}
                  height={8}
                  viewBox='0 0 13 8'
                  fill='none'
                >
                  <path
                    d='M6.49512 7.5L-0.00488281 0.5H12.9951L6.49512 7.5Z'
                    fill='#de1e79'
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
                </select>
                <svg
                  className={styles['form-triangle']}
                  width={13}
                  height={8}
                  viewBox='0 0 13 8'
                  fill='none'
                >
                  <path
                    d='M6.49512 7.5L-0.00488281 0.5H12.9951L6.49512 7.5Z'
                    fill='#de1e79'
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
                </select>
                <svg
                  className={styles['form-triangle']}
                  width={13}
                  height={8}
                  viewBox='0 0 13 8'
                  fill='none'
                >
                  <path
                    d='M6.49512 7.5L-0.00488281 0.5H12.9951L6.49512 7.5Z'
                    fill='#de1e79'
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

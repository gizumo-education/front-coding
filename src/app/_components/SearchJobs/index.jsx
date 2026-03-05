import clsx from 'clsx'
import styles from './index.module.scss'
import { InputText, Pulldown, SearchButton } from '@/components/parts'

export const SearchJobs = () => {
  return (
    <section className={clsx(styles['sec-search-jobs'])}>
      <div className={clsx(styles['search-jobs'])}>
        <div className={clsx(styles['search-jobs-text'])}>
          <h1 className={clsx(styles['search-jobs-title'])}>お仕事検索</h1>
          <p>働きたい職種・地域・希望給与を入れて検索！</p>
        </div>
        <div className={clsx(styles['search-jobs-pulldowns'])}>
          <Pulldown
            name='job-roles'
            id='select-job-roles'
            data={[{ id: 1, name: '医療事務', value: 'medical-office-work' }]}
          />
          <Pulldown
            name='prefecture'
            id='select-prefecture'
            data={[{ id: 1, name: '東京都', value: 'tokyo' }]}
          />
          <Pulldown
            name='salary'
            id='select-salary'
            data={[
              { id: 1, name: '月給17万〜', value: 'from-seventeen-thousand' },
            ]}
          />
        </div>
        <div className={clsx(styles['search-jobs-keyword-input'])}>
          <InputText
            name='search-by-job-keyword'
            placeholder='キーワード・企業名・スキルなど'
          />
        </div>
        <div className={clsx(styles['search-jobs-submit'])}>
          <SearchButton
            name='search-button'
            isIconShow={true}
            text='検索する'
            type='submit'
          />
        </div>
      </div>
    </section>
  )
}

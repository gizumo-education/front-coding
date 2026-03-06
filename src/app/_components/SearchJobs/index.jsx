'use client'

import clsx from 'clsx'
import styles from './index.module.scss'
import { InputText, Pulldown, SearchButton } from '@/components/parts'
import { useState } from 'react'

const jobRoles = [
  { id: 1, name: '医療事務', value: 'medical-office-work' },
  { id: 2, name: '調剤事務', value: 'dispensing-office-work' },
  { id: 3, name: '診療情報管理士', value: 'medical-info-qualified-person' },
  { id: 4, name: '歯科助手', value: 'dental-assistant' },
  { id: 5, name: '看護補助・看護助手', value: 'nursing-aid-nurse-assistant' },
  { id: 6, name: '病院内SE', value: 'se-in-hospital' },
]

const prefectures = [
  { id: 1, name: '茨城県', value: 'ibaraki' },
  { id: 2, name: '神奈川', value: 'kanagawa' },
  { id: 3, name: '群馬県', value: 'gumma' },
  { id: 4, name: '埼玉県', value: 'saitama' },
  { id: 5, name: '千葉県', value: 'chiba' },
  { id: 6, name: '東京都', value: 'tokyo' },
  { id: 7, name: '栃木県', value: 'tochigi' },
]

const salaries = [
  { id: 1, name: '月給17万〜', value: 'from-seventeen-thousand' },
  { id: 2, name: '月給18万〜', value: 'from-eighteen-thousand' },
  { id: 3, name: '月給19万〜', value: 'from-nineteen-thousand' },
  { id: 4, name: '月給20万〜', value: 'from-twenty-thousand' },
  { id: 5, name: '月給21万〜', value: 'from-twentyone-thousand' },
  { id: 6, name: '月給22万〜', value: 'from-twentytwo-thousand' },
  { id: 7, name: '月給23万〜', value: 'from-twentythree-thousand' },
]

export const SearchJobs = () => {
  // 再代入する場合は更新関数(set~)を定義
  const [selectedJob] = useState('medical-office-work')
  const [selectedPrefecture] = useState('tokyo')
  const [selectedSalary] = useState('from-twenty-thousand')

  return (
    <section className={clsx(styles['sec-search-jobs'])}>
      <form className={clsx(styles['search-jobs'])}>
        <div className={clsx(styles['search-jobs-text'])}>
          <h2 className={clsx(styles['search-jobs-title'])}>お仕事検索</h2>
          <p>働きたい職種・地域・希望給与を入れて検索！</p>
        </div>
        <div className={clsx(styles['search-jobs-pulldowns'])}>
          <Pulldown
            name='job-roles'
            id='select-job-roles'
            data={jobRoles}
            defaultValue={selectedJob}
          />
          <Pulldown
            name='prefecture'
            id='select-prefecture'
            data={prefectures}
            defaultValue={selectedPrefecture}
          />
          <Pulldown
            name='salary'
            id='select-salary'
            data={salaries}
            defaultValue={selectedSalary}
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
      </form>
    </section>
  )
}

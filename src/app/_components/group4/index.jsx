'use client'

import styles from './index.module.scss'
import { MoreButton } from '@/components/MoreButton'
import clsx from 'clsx'

const contents = [
  {
    id: 1,
    img: '/group4/group4-1.png',
    title: '転職マニュアル',
    description: '転職活動の基礎知識、面接対策など\n転職のコツをお教えします',
  },
  {
    id: 2,
    img: '/group4/group4-2.png',
    title: '医療事務業界の豆知識',
    description:
      ' スキルアップ・労働環境、給与事情など\n知って得する業界の豆知識を公開',
  },
  {
    id: 3,
    img: '/group4/group4-1.png',
    title: '転職マニュアル',
    description: '転職活動の基礎知識、面接対策など\n転職のコツをお教えします',
  },
]

export const Group4 = ({ id, className = '' }) => {
  return (
    <section id={id} className={clsx('inner', styles['group4'], className)}>
      <h2 className={styles['group4-title']}>転職お役立ちコンテンツ</h2>
      <div className={styles['group4-contents']}>
        {contents.map((content) => (
          <div
            key={content.id}
            className={styles['group4-img']}
            style={{ backgroundImage: `url('${content.img}')` }}
          >
            <div className={styles['group4-img-content']}>
              <h2 className={styles['group4-img-content-title']}>
                {content.title}
              </h2>
              <p className={styles['group4-img-content-description']}>
                {content.description.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < content.description.split('\n').length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles['group4-button']}>
        <MoreButton href='/'>新着求人一覧をもっと見る</MoreButton>
      </div>
    </section>
  )
}

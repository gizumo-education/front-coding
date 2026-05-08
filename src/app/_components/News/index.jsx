'use client'

import styles from './index.module.scss'
import { useState } from 'react'

const commonInfo = {
  title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
  salary: '月給148,000円〜',
  location: '三重県伊勢市',
  station: '伊勢市駅 徒歩15分',
}
const cards = [
  {
    image: 'img/person-with-documents-a.jpg',
    ...commonInfo,
  },
  {
    image: 'img/person-with-documents-b.jpg',
    ...commonInfo,
  },
  {
    image: 'img/person-with-documents-c.jpg',
    ...commonInfo,
  },
  {
    image: 'img/person-with-documents-d.jpg',
    ...commonInfo,
  },
]

export const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleCards =
    typeof window !== 'undefined' && window.innerWidth >= 768 ? 4 : 1

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  const displayCards = Array.from(
    { length: visibleCards },
    (_, i) => cards[(currentIndex + i) % cards.length]
  )

  return (
    <section id='news' className={styles['news']}>
      <h2 className={styles['title']}>新着求人</h2>
      <div className={styles['slider']}>
        <button
          type='button'
          className={styles['nav-button-right']}
          aria-label='次のスライド'
          onClick={handleNext}
        >
          <img
            src='/img/arrow-right.png'
            alt=''
            className={styles['nav-icon-right']}
          />
        </button>

        <button
          type='button'
          className={styles['nav-button-left']}
          aria-label='前のスライド'
          onClick={handlePrev}
        >
          <img
            src='/img/arrow-left.png'
            alt=''
            className={styles['nav-icon-left']}
          />
        </button>

        <div className={styles['card-content']}>
          {displayCards.map((card, index) => (
            <div className={styles['card']} key={index}>
              <div className={styles['image-wrapper']}>
                <img
                  src={card.image}
                  alt={card.title}
                  className={styles['image']}
                />
              </div>

              <div className={styles['content']}>
                <p className={styles['description']}>{card.title}</p>

                <dl className={styles['info-list']}>
                  <div className={styles['info-item']}>
                    <dt className={styles['label']}>給与</dt>
                    <dd className={styles['value']}>{card.salary}</dd>
                  </div>

                  <div className={styles['info-item']}>
                    <dt className={styles['label']}>所在地</dt>
                    <dd className={styles['value']}>{card.location}</dd>
                  </div>

                  <div className={styles['info-item']}>
                    <dt className={styles['label']}>最寄駅</dt>
                    <dd className={styles['value']}>{card.station}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href='/' className={styles.button}>
        新着求人一覧をもっと見る
      </a>
    </section>
  )
}

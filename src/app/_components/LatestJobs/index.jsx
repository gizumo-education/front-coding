import { Button } from '@/components/ui/Button'
import styles from './index.module.scss'

// 1. 求人データを配列として定義
const JOBS_DATA = [
  {
    id: 1,
    imageSp: '/images/LatestJobs1_sp.png',
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    salary: '月給 148,000円〜',
    location: '三重県伊勢市',
    station: '伊勢市駅 徒歩15分',
  },
  {
    id: 2,
    imageSp: '/images/LatestJobs1_sp.png', // 2枚目の内容に変更
    title: '【タイトル2】ここに求人のタイトルが入ります', // 2枚目の内容に変更
    salary: '時給 1,200円〜', // 2枚目の内容に変更
    location: '三重県津市', // 2枚目の内容に変更
    station: '津駅 バス10分', // 2枚目の内容に変更
  },
  // 4つまで増やす
]

export const LatestJobs = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>新着求人</h1>
      <div className={styles['slider-wrapper']}>
        <button
          type='button'
          className={`${styles['arrow-button']} ${styles.prev}`}
        ></button>
        {/* 2. ループ処理用のコンテナを追加（後でSwiperなどのスライダーを適用しやすくするため） */}
        <div className={styles['jobs-container']}>
          {JOBS_DATA.map((job) => (
            <div key={job.id} className={styles['jobs-card']}>
              <img
                src={job.imageSp}
                alt={job.title}
                width='370'
                height='208'
                className={styles.image}
              />
              <h2 className={styles['jobs-card-title']}>{job.title}</h2>
              <div className={styles['jobs-info-list']}>
                <div className={styles['jobs-info-item']}>
                  <span className={styles['jobs-info-label']}>給与</span>
                  <span className={styles['jobs-info-data']}>{job.salary}</span>
                </div>

                <div className={styles['jobs-info-item']}>
                  <span className={styles['jobs-info-label']}>所在地</span>
                  <span className={styles['jobs-info-data']}>
                    {job.location}
                  </span>
                </div>

                <div className={styles['jobs-info-item']}>
                  <span className={styles['jobs-info-label']}>最寄駅</span>
                  <span className={styles['jobs-info-data']}>
                    {job.station}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type='button'
          className={`${styles['arrow-button']} ${styles.next}`}
        ></button>
      </div>
      <Button text='新着求人一覧をもっと見る' isFullWidth={true} />
    </section>
  )
}

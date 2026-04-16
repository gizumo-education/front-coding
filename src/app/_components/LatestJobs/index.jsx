import { Button } from '@/components/ui/Button'
import styles from './index.module.scss'

export const LatestJobs = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>新着求人</h1>
      <div className={styles['jobs-card']}>
        <img
          src='/images/LatestJobs1_sp.png'
          alt='新着求人１のイメージ写真'
          width='370'
          height='208'
          className={styles.image}
        />
        <h2 className={styles['jobs-card-title']}>
          平日・夕方までの勤務!伊勢市の伊勢赤十字病院で
          <br />
          医療事務求人
        </h2>
        <div className={styles['jobs-info-list']}>
          <div className={styles['jobs-info-item']}>
            <span className={styles['jobs-info-label']}>給与</span>
            <span className={styles['jobs-info-data']}>月給 148,000円〜</span>
          </div>

          <div className={styles['jobs-info-item']}>
            <span className={styles['jobs-info-label']}>所在地</span>
            <span className={styles['jobs-info-data']}>三重県伊勢市</span>
          </div>

          <div className={styles['jobs-info-item']}>
            <span className={styles['jobs-info-label']}>最寄駅</span>
            <span className={styles['jobs-info-data']}>伊勢市駅 徒歩15分</span>
          </div>
        </div>
      </div>
      <Button text='新着求人一覧をもっと見る' isFullWidth={true} />
    </section>
  )
}

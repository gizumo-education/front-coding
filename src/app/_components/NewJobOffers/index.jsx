import clsx from 'clsx'
import styles from './index.module.scss'
import { LinkButton } from '@/components/parts/LinkButton'

export const NewJobOffers = () => {
  return (
    <section className={clsx(styles['sec-new-job-offers'])}>
      <div className={clsx(styles['new-job-offers-inner'])}>
        <h1 className={clsx(styles['new-job-offers-title'])}>新着求人</h1>
        <div className={clsx(styles['new-job-cards'])}>
          <button className={clsx(styles['new-job-card-navigation-previous'])}>
            <span className={clsx(styles['new-job-card-previous-icon'])}></span>
          </button>
          <div className={clsx(styles['new-job-card'])}>
            <div className={clsx(styles['new-job-card-img-wrap'])}>
              <img
                className={clsx(styles['new-job-card-img'])}
                src='/image/newJobOffers/ise-red-cross-medical-office-work-job-offer.jpg'
                width='370'
                height='208'
                alt='伊勢赤十字病院 医療事務求人'
              />
            </div>
            <h2 className={clsx(styles['new-job-card-title'])}>
              平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
            </h2>
            <div className={clsx(styles['new-job-card-details'])}>
              <div className={clsx(styles['new-job-card-detail'])}>
                <span className={clsx(styles['new-job-card-details-label'])}>
                  給与
                </span>
                <p>月給 148,000円～</p>
              </div>
              <div className={clsx(styles['new-job-card-detail'])}>
                <span className={clsx(styles['new-job-card-details-label'])}>
                  所在地
                </span>
                <p>三重県伊勢市</p>
              </div>
              <div className={clsx(styles['new-job-card-detail'])}>
                <span className={clsx(styles['new-job-card-details-label'])}>
                  最寄駅
                </span>
                <p>伊勢市駅 徒歩15分</p>
              </div>
            </div>
          </div>
          <button className={clsx(styles['new-job-card-navigation-next'])}>
            <span className={clsx(styles['new-job-card-next-icon'])}></span>
          </button>
        </div>
        <LinkButton href='/' text='新着求人一覧をもっと見る' />
      </div>
    </section>
  )
}

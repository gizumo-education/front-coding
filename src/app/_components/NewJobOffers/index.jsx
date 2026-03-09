import clsx from 'clsx'
import styles from './index.module.scss'
import { JobCard, LinkButton } from '@/components/parts'

const NewJobOfferItems = [
  {
    id: 1,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    image: {
      url: '/image/newJobOffers/ise-red-cross-medical-office-work-job-offer.jpg',
      altText: '伊勢赤十字病院 医療事務求人',
    },
    salary: '月給 148,000円～',
    location: '三重県伊勢市',
    closestStation: '伊勢市駅 徒歩15分',
  },
  {
    id: 2,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    image: {
      url: '/image/newJobOffers/ise-red-cross-medical-office-work-job-offer2.jpg',
      altText: '伊勢赤十字病院 医療事務求人',
    },
    salary: '月給 148,000円～',
    location: '三重県伊勢市',
    closestStation: '伊勢市駅 徒歩15分',
  },
  {
    id: 3,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    image: {
      url: '/image/newJobOffers/ise-red-cross-medical-office-work-job-offer3.jpg',
      altText: '伊勢赤十字病院 医療事務求人',
    },
    salary: '月給 148,000円～',
    location: '三重県伊勢市',
    closestStation: '伊勢市駅 徒歩15分',
  },
  {
    id: 4,
    title: '平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人',
    image: {
      url: '/image/newJobOffers/ise-red-cross-medical-office-work-job-offer4.jpg',
      altText: '伊勢赤十字病院 医療事務求人',
    },
    salary: '月給 148,000円～',
    location: '三重県伊勢市',
    closestStation: '伊勢市駅 徒歩15分',
  },
]

export const NewJobOffers = () => {
  return (
    <section className={clsx(styles['sec-new-job-offers'])}>
      <div className={clsx(styles['new-job-offers-inner'])}>
        <h2 className={clsx(styles['new-job-offers-title'])}>新着求人</h2>
        <div className={clsx(styles['new-job-cards'])}>
          <button className={clsx(styles['new-job-card-navigation-previous'])}>
            <span className={clsx(styles['new-job-card-previous-icon'])}></span>
          </button>
          {NewJobOfferItems.map((item) => (
            <JobCard key={item.id} item={item} />
          ))}
          <button className={clsx(styles['new-job-card-navigation-next'])}>
            <span className={clsx(styles['new-job-card-next-icon'])}></span>
          </button>
        </div>
        <LinkButton href='/' text='新着求人一覧をもっと見る' />
      </div>
    </section>
  )
}

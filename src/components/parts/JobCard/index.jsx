import clsx from 'clsx'
import styles from './index.module.scss'

export const JobCard = ({ as: JobTitle = 'h3', item = {} }) => {
  return (
    <div className={clsx(styles['new-job-card'])}>
      <div className={clsx(styles['new-job-card-img-wrap'])}>
        <img
          className={clsx(styles['new-job-card-img'])}
          src={item?.image?.url}
          width='370'
          height='208'
          alt={item?.image?.altText}
        />
      </div>
      <JobTitle className={clsx(styles['new-job-card-title'])}>
        {item.title}
      </JobTitle>
      <div className={clsx(styles['new-job-card-details'])}>
        <div className={clsx(styles['new-job-card-detail'])}>
          <span className={clsx(styles['new-job-card-details-label'])}>
            給与
          </span>
          <p>{item.salary}</p>
        </div>
        <div className={clsx(styles['new-job-card-detail'])}>
          <span className={clsx(styles['new-job-card-details-label'])}>
            所在地
          </span>
          <p>{item.location}</p>
        </div>
        <div className={clsx(styles['new-job-card-detail'])}>
          <span className={clsx(styles['new-job-card-details-label'])}>
            最寄駅
          </span>
          <p>{item.closestStation}</p>
        </div>
      </div>
    </div>
  )
}

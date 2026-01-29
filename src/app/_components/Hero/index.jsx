import styles from './index.module.scss'

export const Hero = () => {
  return (
    <div className={styles['hero-content']}>
      <picture>
        <source srcSet='/Hero/hero-sp.png' media='(max-width: 575px)' />
        <img
          src='/Hero/hero-pc.png'
          width='3200'
          height='1000'
          alt=''
          className={styles['hero-img']}
        />
      </picture>
      <img
        src='/Hero/hero-logo.png'
        alt='no.1'
        width='340'
        height='140'
        className={styles['hero-logo']}
      />
      <img
        src='/Hero/hero-title.png'
        alt='医療事務求人を探すならギズジョブ'
        width='800'
        height='65'
        className={styles['hero-title']}
      />
      <div className={styles['job-info']}>
        <p>
          現在の求人掲載数：
          <span className={styles['job-count']}>2,320</span>件
        </p>
      </div>
    </div>
  )
}

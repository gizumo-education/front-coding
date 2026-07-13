import styles from './style.module.scss'

export const HomePage = () => {
  return (
    <div className={styles['keyvisual-section']}>
      <div className={styles['container']}>
        <img
          className={styles['keyvisual-img']}
          src='/images/keyvisual.jpg'
          alt='Keyvisual写真'
          width={1000}
          height={685}
        />
        <div className={styles['group']}>
          <img
            className={styles['no1-img']}
            src='/images/no1.png'
            alt='no.1写真'
            width={705}
            height={354}
          />
          <h1 className={styles['main-title']}>
            医療事務求人を探すならギズジョブ
          </h1>
          <p className={styles['job-count']}>
            現在の求人掲載数 :
            <span className={styles['count-num']}> 2,320</span>件
          </p>
        </div>
      </div>
    </div>
  )
}

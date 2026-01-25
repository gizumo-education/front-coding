import styles from './index.module.scss'

export const Keyvisual = () => {
  return (
    <section className={styles.keyvisual}>
      <div className={styles.photo}>
        <picture>
          <img
            src='/img/keyvisualphoto.png'
            alt=''
            width='400'
            height='270'
            className={styles['photo-image']}
          />
        </picture>
      </div>

      <div className={styles.no1}>
        <img
          src='/img/keyvisualNo1.png'
          alt=''
          width='150'
          height='73'
          className={styles['no1-image']}
        />
      </div>

      <h1 className={styles['main-message']}>
        <img
          src='/img/mainmessage.png'
          alt='医療事務求人を探すならギズジョブ'
          width='272'
          height='22'
          className={styles['message-image']}
        />
      </h1>

      <p className={styles.count}>
        <span className={styles['count-label']}>現在の求人掲載数：</span>
        <span className={styles['count-value']}>2,320</span>
        <span className={styles['count-unit']}>件</span>
      </p>
    </section>
  )
}

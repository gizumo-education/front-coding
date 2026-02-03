import styles from './index.module.scss'

export const Keyvisual = () => {
  return (
    <section className={styles.keyvisual}>
      <div className={styles.photo}>
        <img
          src='/img/keyvisualphoto.png'
          alt=''
          width='400'
          height='270'
          className={styles['photo-image']}
        />
        <img
          src='/img/Leaf-L.png'
          alt=''
          width='20'
          height='62'
          className={styles['leaf-r']}
        />
        <p className={styles['no1']}>no.1</p>
        <img
          src='/img/Leaf-R.png'
          alt=''
          className={styles['leaf-l']}
          width='20'
          height='62'
        />

        <h1 className={styles['main-message']}>
          医療事務求人を探すならギズジョブ
        </h1>
        <p className={styles['survey']}>※株式会社●●社実績調査</p>
      </div>

      <p className={styles.count}>
        <span className={styles['count-label']}>現在の求人掲載数：</span>
        <span className={styles['count-value']}>2,320</span>
        <span className={styles['count-unit']}>件</span>
      </p>
    </section>
  )
}

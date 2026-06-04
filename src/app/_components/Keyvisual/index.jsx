import styles from './Keyvisual.module.scss'

export const Keyvisual = () => {
  return (
    <section className={styles.keyvisual}>
      <img
        src='/img/img_kv_main_sp.png'
        alt='TOP画像'
        className={styles['main-img']}
        width={400}
        height={270}
      />

      <img
        src='/img/icon_kv_crown.png'
        alt='no.1アイコン'
        className={styles['crown-img']}
        width={149}
        height={73}
      />

      <h1 className={styles['catchphrase']}>
        医療事務求人を探すならギズジョブ
      </h1>
      <div className={styles['job-count-badge']}>
        <p className={styles['job-count-text']}>
          現在の求人掲載数 :
          <span className={styles['count-number']}>2,320</span>件
        </p>
      </div>
    </section>
  )
}

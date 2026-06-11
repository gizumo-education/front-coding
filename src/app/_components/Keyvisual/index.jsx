import styles from './Keyvisual.module.scss'

export const Keyvisual = () => {
  return (
    <section id='top' className={styles['keyvisual']}>
      <div className={styles['keyvisual-container']}>
        <picture>
          <source srcSet='/img/img_kv_main_sp.png' media='(max-width: 767px)' />
          <img
            className={styles['main-img']}
            src='/img/img_kv_main_pc.jpg'
            alt='TOP画像'
            width='1262'
            height='500'
          />
        </picture>
        <picture>
          <source srcSet='/img/icon_kv_crown.png' media='(max-width: 400px)' />
          <img
            className={styles['crown-img']}
            src='/img/keyvisual.png'
            alt='no.1アイコン'
            width='341'
            height='168'
          />
        </picture>
        <h1 className={styles['catchphrase']}>
          医療事務求人を探すならギズジョブ
        </h1>
        <div className={styles['job-count-badge']}>
          <p className={styles['job-count-text']}>
            現在の求人掲載数 :
            <span className={styles['count-number']}>2,320</span>件
          </p>
        </div>
      </div>
    </section>
  )
}

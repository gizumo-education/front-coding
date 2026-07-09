import styles from './style.module.scss'

export const Features = () => {
  return (
    <div className={styles['feature-banner']}>
      <div className={styles['image-wrapper']}>
        <img
          className={styles['middle-banner']}
          src='/icon/banner.jpg'
          alt='Keyvisual写真'
          width={1000}
          height={685}
        />
        <div className={styles['overlay']} />
      </div>
      <div className={styles['banner-inner']}>
        <p className={styles['banner-title']}>
          ギズジョブなら理想の職場がきっと見つかる
        </p>
        <p className={styles['banner-sub']}>
          ギズジョブは完全無料の求職者向け求人サービスです。
        </p>
      </div>
    </div>
  )
}

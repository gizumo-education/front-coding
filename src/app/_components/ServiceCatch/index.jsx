import styles from './ServiceCatch.module.scss'

export const ServiceCatch = () => {
  return (
    <section>
      <div className={styles['banner-wrapper']}>
        <img
          src='/img/img_servicecatch.jpg'
          alt='バナーの背景画像'
          className={styles['banner-image']}
          width={400}
          height={75}
        />
        <div className={styles['banner-text-wrap']}>
          <p className={styles['banner-text']}>
            ギズジョブなら理想の職場がきっと見つかる
            <br />
            ギズジョブは完全無料の求職者向け求人サービスです。
          </p>
        </div>
      </div>
    </section>
  )
}

import styles from './ServiceCatch.module.scss'

export const ServiceCatch = () => {
  return (
    <section>
      <div className={styles['banner-wrapper']}>
        <picture>
          <source
            srcSet='/img/img_servicecatch.jpg'
            media='(max-width: 400px)'
          />
          <img
            className={styles['banner-image']}
            src='/img/img.servicecatch.pc.jpg'
            alt='バナーの背景画像'
            width='1600'
            height='300'
          />
        </picture>
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

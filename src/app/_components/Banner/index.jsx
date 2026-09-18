import styles from './index.module.scss'

export const Banner = () => {
  return (
    <section className={styles['banner']}>
      <div className={styles['banner-inner']}>
        <picture>
          <source
            media='(min-width: 768px)'
            srcSet='/Banner/banner-bg-pc.png'
          />
          <img
            className={styles['banner-bg']}
            src='/Banner/banner-bg.png'
            alt=''
            width='400'
            height='75'
          />
        </picture>
        <p className={styles['banner-heading']}>
          ギズジョブなら理想の職場がきっと見つかる
        </p>
        <p className={styles['banner-text']}>
          ギズジョブは完全無料の求職者向け求人サービスです。
        </p>
      </div>
    </section>
  )
}

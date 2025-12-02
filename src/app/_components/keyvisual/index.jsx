import styles from './index.module.scss'

export const KeyVisual = ({ id }) => {
  return (
    <section id={id}>
      <div className={styles['keyvisual-container']}>
        <picture>
          <source
            media='(max-width: 767px)'
            srcSet='/keyvisual/keyvisual-sp.png'
          />
          <img
            src='/keyvisual/keyvisual-pc.png'
            alt=''
            width={3200}
            height={1000}
          />
        </picture>

        <picture>
          <source
            media='(max-width: 767px)'
            srcSet='/keyvisual/keyvisual-title-sp.png'
          />
          <img
            src='/keyvisual/keyvisual-title-pc.png'
            alt='No1'
            width={700}
            height={352}
            className={styles['keyvisual-title']}
          />
        </picture>

        <picture>
          <source
            media='(max-width: 767px)'
            srcSet='/keyvisual/keyvisual-subtitle-sp.png'
          />
          <img
            src='/keyvisual/keyvisual-subtitle-pc.png'
            alt='医療事務求人を探すならギズジョブ'
            width={700}
            height={352}
            className={styles['keyvisual-subtitle']}
          />
        </picture>

        <p className={styles['keyvisual-stats']}>
          現在の求人掲載数：
          <span className={styles['keyvisual-stats-number']}>2,320</span>件
        </p>
      </div>
    </section>
  )
}

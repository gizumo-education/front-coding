import styles from './index.module.scss'

export const KeyVisual = () => {
  return (
    <section className={styles['section']}>
      <div className={styles['section-img']}>
        <picture>
          <source
            srcSet='img/keyvisual-pc.png'
            media='(min-width: 1200px)'
            width={350}
            height={176}
          />
          <img
            src='/img/keyvisual.png'
            className={styles['section-img-keyvisual']}
            width={158}
            height={81}
            alt='no.1 ※株式会社●●社実績調査'
          />
        </picture>

        <h1 className={styles['section-title']}>
          医療事務求人を探すならギズジョブ
        </h1>
        <p className={styles['section-subtitle']}>
          現在の求人掲載数：
          <strong className={styles['section-subtitle-number']}>2,320</strong>件
        </p>
      </div>
    </section>
  )
}

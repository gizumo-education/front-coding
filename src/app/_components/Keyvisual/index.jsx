import styles from './index.module.scss'

export const KeyVisual = () => {
  return (
    <section className={styles['section']}>
      <div className={styles['section-img']}>
        <img
          src='/images/keyvisual.png'
          className={styles['section-img-keyvisual']}
          width={158}
          height={81}
          alt='no.1 ※株式会社●●社実績調査'
        />
        <img
          src='/images/subtitle.png'
          className={styles['section-img-subtitle']}
          width={170}
          height={30}
          alt='現在の求人掲載数：2320件'
        />
      </div>
      <img
        src='/images/catch-copy.png'
        className={styles['section-catchcopy']}
        width={278}
        height={27}
        alt='医療事務求人を探すならギズジョブ'
      />
    </section>
  )
}

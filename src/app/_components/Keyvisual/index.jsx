import styles from './index.module.scss'

export const Keyvisual = () => {
  return (
    <section className={styles['keyvisual']}>
      <div className={styles['keyvisual-inner']}>
        <picture>
          <source
            media='(min-width: 768px)'
            srcSet='/keyvisual/keyvisual-bg-pc.png'
          />
          <img
            className={styles['keyvisual-bg']}
            src='/keyvisual/keyvisual-bg.png'
            alt='キービジュアル'
            width='400'
            height='270'
          />
        </picture>
        <picture>
          <source
            media='(min-width: 768px)'
            srcSet='/keyvisual/keyvisual-ranking-pc.svg'
          />
          <img
            className={styles['keyvisual-ranking']}
            src='/keyvisual/keyvisual-ranking.svg'
            alt='no.1の下の小さいテキスト内容'
            width='158'
            height='81'
          />
        </picture>
        <h1 className={styles['keyvisual-heading']}>
          医療事務求人を探すならギズジョブ
        </h1>
        <p className={styles['keyvisual-count']}>
          現在の求人掲載数：
          <span className={styles['keyvisual-count-number']}>2,320</span>件
        </p>
      </div>
    </section>
  )
}

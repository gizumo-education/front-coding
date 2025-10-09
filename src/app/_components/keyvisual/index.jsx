import styles from './index.module.scss'

export const Keyvisual = () => {
  return (
    <section>
      <div className={styles['keyvisual-container']}>
        <img
          src='/keyvisual/keyvisual-sp.png'
          alt='キービジュアル'
          width={800}
          height={540}
        />
        <img
          src='/keyvisual/keyvisual-title.png'
          alt='No.1'
          width={316}
          height={162}
          className={styles['keyvisual-title']}
        />
        <img
          src='/keyvisual/keyvisual-subtitle.png'
          alt='医療事務求人を探すならギズジョブ'
          width={556}
          height={54}
          className={styles['keyvisual-subtitle']}
        />
        <p className={styles['keyvisual-stats']}>
          現在の求人掲載数：
          <span className={styles['keyvisual-stats-number']}>2,320</span>件
        </p>
      </div>
    </section>
  )
}

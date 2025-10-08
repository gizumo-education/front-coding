import styles from './index.module.scss'

export const Keyvisual = () => {
  return (
    <section>
      <div className={styles['keyvisual-container']}>
        <img
          src='/keyvisual/keyvisual-sp.png'
          alt='キービジュアル'
          width={400}
          height={270}
        />
        <img
          src='/keyvisual/keyvisual-title.png'
          alt='キービジュアル タイトル'
          width={150}
          height={73}
          className={styles['keyvisual-title']}
        />
        <img
          src='/keyvisual/keyvisual-subtitle.png'
          alt='キービジュアル サブタイトル'
          width={272}
          height={22}
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

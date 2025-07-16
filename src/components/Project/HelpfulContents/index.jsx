import styles from './index.module.scss'

export const HelpfulContents = () => {
  return (
    <section className={styles['helpful-section']}>
      <div className={styles['helpful-inner']}>
        <h2 className={styles['helpful-title']}>転職お役立ちコンテンツ</h2>
        <div className={styles['card-list']}>
          <div className={`${styles['card']} ${styles['card--manual']}`}>
            <div className={styles['card-content']}>
              <h3 className={styles['card-title']}>転職マニュアル</h3>
              <p className={styles['card-text']}>
                転職活動の基礎知識、面接対策など転職のコツをお教えします
              </p>
            </div>
          </div>
          <div className={`${styles['card']} ${styles['card--industry']}`}>
            <div className={styles['card-content']}>
              <h3 className={styles['card-title']}>医療事務業界の豆知識</h3>
              <p className={styles['card-text']}>
                スキルアップ・労働環境、給与事情など知って得する業界の豆知識を公開
              </p>
            </div>
          </div>
          <div className={`${styles['card']} ${styles['card--manual-2']}`}>
            <div className={styles['card-content']}>
              <h3 className={styles['card-title']}>転職マニュアル</h3>
              <p className={styles['card-text']}>
                転職活動の基礎知識、面接対策など転職のコツをお教えします
              </p>
            </div>
          </div>
        </div>
        <div className={styles['more-button-wrapper']}>
          <button className={styles['more-button']}>
            医療事務コラムをもっと見る
          </button>
        </div>
      </div>
    </section>
  )
}

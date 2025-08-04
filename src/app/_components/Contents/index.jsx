import styles from './index.module.scss'

export const Contents = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['inner']}>
        <h1 className={styles['job-changes-contents']}>
          転職お役立ちコンテンツ
        </h1>
        <div className={styles['job-changes']}>
          <div className={styles['job-change-container']}>
            <div className={styles['content-title']}>
              <h2>転職マニュアル</h2>
            </div>
            <div className={styles['content-text']}>
              <p>
                転職活動の基礎知識、面接対策など転職活動のコツをお教えします
              </p>
            </div>
          </div>
          <div className={styles['job-change-container']}>
            <h2 className={styles['content-title']}>医療事務業界の豆知識</h2>
            <p className={styles['content-text']}>
              スキルアップ・労働環境、給与事情など知って得する業界の豆知識を公開
            </p>
          </div>
          <div className={styles['job-change-container']}>
            <h2 className={styles['content-title']}>転職マニュアル</h2>
            <p className={styles['content-text']}>
              転職活動の豆知識、面接対策など転職のコツをお教えします
            </p>
          </div>
        </div>
        <div className={styles['column-button-container']}>
          <button className={styles['column-button']}>
            医療事務コラムをもっと見る
          </button>
        </div>
      </section>
    </main>
  )
}

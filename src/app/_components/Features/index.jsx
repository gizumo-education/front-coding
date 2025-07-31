import styles from './index.module.scss'

export const Features = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['inner']}>
        <h1 className={styles['features-title']}>ギズジョブ4つの特徴</h1>
        <div className={styles['feature-container']}>
          <h2 className={styles['feature-1-title']}>WEB上で応募完結</h2>
          <p className={styles['feature-1-p']}>
            エントリーシートの記入を済ませれば、あとは気になる企業に応募して末で毛で面接アポまで完結！
          </p>
        </div>
        <div className={styles['feature-container']}>
          <h2 className={styles['feature-1-title']}>WEB上で応募完結</h2>
          <p className={styles['feature-1-p']}>
            エントリーシートの記入を済ませれば、あとは気になる企業に応募して末で毛で面接アポまで完結！
          </p>
        </div>
        <div className={styles['feature-container']}>
          <h2 className={styles['feature-1-title']}>WEB上で応募完結</h2>
          <p className={styles['feature-1-p']}>
            エントリーシートの記入を済ませれば、あとは気になる企業に応募して末で毛で面接アポまで完結！
          </p>
        </div>
        <div className={styles['feature-container']}>
          <h2 className={styles['feature-1-title']}>WEB上で応募完結</h2>
          <p className={styles['feature-1-p']}>
            エントリーシートの記入を済ませれば、あとは気になる企業に応募して末で毛で面接アポまで完結！
          </p>
        </div>
      </section>
    </main>
  )
}

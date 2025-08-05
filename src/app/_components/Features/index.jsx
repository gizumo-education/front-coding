import styles from './index.module.scss'

export const Features = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['inner']}>
        <h1 className={styles['features-title']}>ギズジョブ4つの特徴</h1>
        <div className={styles['feature-container']}>
          <h2 className={styles['feature-title']}>WEB上で応募完結</h2>
          <p className={styles['feature-p']}>
            エントリーシートの記入を済ませれば、あとは気になる企業に応募して末で毛で面接アポまで完結！
          </p>
        </div>
        <div className={styles['feature-container']}>
          <h2 className={styles['feature-title']}>安心・安全</h2>
          <p className={styles['feature-p']}>
            掲載案件は基本的に当社グループ企業となるため、皆様により詳細にクリーンな職場情報をお届けいたします。
          </p>
        </div>
        <div className={styles['feature-container']}>
          <h2 className={styles['feature-title']}>わかりやすい</h2>
          <p className={styles['feature-p']}>
            当求人サイトは医療事務に特化しておりさらにこだわり検索や地域から検索といったご自身にピッタリマッチした求人を見つけることができます！
          </p>
        </div>
        <div className={styles['feature-container']}>
          <h2 className={styles['feature-title']}>完全無料</h2>
          <p className={styles['feature-p']}>
            当求人サイトは求人元の企業やグループ会社からのスポンサー費用によって運営されています。ですので求職者の方からは応募前はもちろん、内定後も費用は一切いただきません。
          </p>
        </div>
      </section>
    </main>
  )
}

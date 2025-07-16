import styles from './index.module.scss'

export const Features = () => {
  return (
    <section className={styles['features-section']}>
      <div className={styles['features-inner']}>
        <div>
          <h1 className={styles['features-title']}>ギズジョブの4つの特徴</h1>
        </div>
        <div className={styles['features-grid']}>
          <div className={styles['features-card']}>
            <h2 className={styles['text-title']}>WEB上で応募完結</h2>
            <p className={styles['text-subtitle']}>
              エントリーシートの記入を済ませれば、
              <br className={styles['sp-text']} />
              あとは気になる企業に応募して待つだけで面接アポまで完結！
            </p>
          </div>
          <div className={styles['features-card']}>
            <h2 className={styles['text-title']}>安心 安全</h2>
            <p className={styles['text-subtitle']}>
              掲載案件は基本的に当社グループ企業となるため、
              <br />
              皆さまにより詳細にクリーンな職場情報をお届けいたします。
            </p>
          </div>
          <div className={styles['features-card']}>
            <h2 className={styles['text-title']}>わかりやすい</h2>
            <p className={styles['text-subtitle']}>
              当求人サイトは医療事務に特化しておりさらに
              <br className={styles['sp-text']} />
              こだわり検索や地域から検索といったご自身に
              <br className={styles['sp-text']} />
              ピッタリマッチした求人を見つけることができる！
            </p>
          </div>
          <div className={styles['features-card']}>
            <h2 className={styles['text-title']}>完全無料</h2>
            <p
              className={`${styles['text-subtitle']} ${styles['text-subtitle--free']}`}
            >
              当サイトは求人元の企業やグループ会社からのスポンサー費用に
              <br className={styles['sp-text']} />
              よって運営されています。ですので求職者の方からは
              <br className={styles['sp-text']} />
              応募前はもちろん、内定後も費用は一切いただきません。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

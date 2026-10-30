import styles from './index.module.scss'

export const Features = () => {
  return (
    <section id='features' className={styles['features']}>
      <h2 className={styles['features-heading']}>ギズジョブの4つの特徴</h2>
      <ul className={styles['features-list']}>
        <li className={styles['features-list-item-small']}>
          <h3 className={styles['features-title']}>WEB上で応募完結</h3>
          <p className={styles['features-description']}>
            <span>エントリーシートの記入を済ませれば、</span>
            <span>
              あとは気になる企業に応募して待つだけで面接アポまで完結！
            </span>
          </p>
        </li>
        <li className={styles['features-list-item-small']}>
          <h3 className={styles['features-title']}>安心・安全</h3>
          <p className={styles['features-description']}>
            <span>掲載案件は基本的に当社グループ企業となるため、</span>
            <span>
              皆さまにより詳細にクリーンな職場情報をお届けいたします。
            </span>
          </p>
        </li>
        <li className={styles['features-list-item-large']}>
          <h3 className={styles['features-title']}>わかりやすい</h3>
          <p className={styles['features-description']}>
            <span>当求人サイトは医療事務に特化しておりさらに</span>
            <span>こだわり検索や地域から検索といったご自身に</span>
            <span>ピッタリマッチした求人を見つけることができる！</span>
          </p>
        </li>
        <li className={styles['features-list-item-large']}>
          <h3 className={styles['features-title']}>完全無料</h3>
          <p className={styles['features-description']}>
            <span>
              当サイトは求人元の企業やグループ会社からのスポンサー費用に
            </span>
            <span>よって運営されています。ですので求職者の方からは</span>
            <span>応募前はもちろん、内定後も費用は一切いただきません。</span>
          </p>
        </li>
      </ul>
    </section>
  )
}

import styles from './index.module.scss'

export const Features = () => {
  return (
    <section id='features' className={styles.features}>
      <div className='inner'>
        <h2 className={styles.title}>ギズジョブの4つの特徴</h2>
        <ul className={styles.list}>
          <li className={`${styles.item} ${styles['item-short']}`}>
            <h3 className={styles['item-title']}>WEB上で応募完結</h3>
            <p className={styles['item-text']}>
              エントリーシートの記入を済ませれば、
              <br />
              あとは気になる企業に応募して待つだけで面接アポまで完結！
            </p>
          </li>
          <li className={`${styles.item} ${styles['item-short']}`}>
            <h3 className={styles['item-title']}>安心・安全</h3>
            <p className={styles['item-text']}>
              掲載案件は基本的に当社グループ企業となるため、
              <br />
              皆さまにより詳細にクリーンな職場情報をお届けいたします。
            </p>
          </li>
          <li className={`${styles.item} ${styles['item-tall']}`}>
            <h3 className={styles['item-title']}>わかりやすい</h3>
            <p className={styles['item-text']}>
              当求人サイトは医療事務に特化しておりさらに
              <br />
              こだわり検索や地域から検索といったご自身に
              <br />
              ピッタリマッチした求人を見つけることができる！
            </p>
          </li>
          <li className={`${styles.item} ${styles['item-tall']}`}>
            <h3 className={styles['item-title']}>完全無料</h3>
            <p className={styles['item-text']}>
              当サイトは求人元の企業やグループ会社からのスポンサー費用に
              <br />
              よって運営されています。ですので求職者の方からは
              <br />
              応募前はもちろん、内定後も費用は一切いただきません。
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

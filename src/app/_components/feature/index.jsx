import styles from './index.module.scss'

export const Feature = () => {
  return (
    <section className={styles['feature']}>
      <h2 className={styles['feature-title']}>ギズジョブの4つの特徴</h2>
      <div className={styles['feature-wrapper']}>
        <div className={styles['feature-box']}>
          <h3 className={styles['feature-box-title']}>WEB上で応募完結</h3>
          <p className={styles['feature-box-description']}>
            エントリーシートの記入を済ませれば、
            <br />
            あとは気になる企業に応募して待つだけで面接アポまで完結！
          </p>
        </div>
        <div className={styles['feature-box']}>
          <h3 className={styles['feature-box-title']}>安心・安全</h3>
          <p className={styles['feature-box-description']}>
            掲載案件は基本的に当社グループ企業となるため、
            <br />
            皆さまにより詳細にクリーンな職場情報をお届けいたします。
          </p>
        </div>
        <div className={styles['feature-box']}>
          <h3 className={styles['feature-box-title']}>わかりやすい</h3>
          <p className={styles['feature-box-description']}>
            当求人サイトは医療事務に特化しておりさらに
            <br />
            こだわり検索や地域から検索といったご自身に
            <br />
            ピッタリマッチした求人を見つけることができる！
          </p>
        </div>
        <div className={styles['feature-box']}>
          <h3 className={styles['feature-box-title']}>完全無料</h3>
          <p className={styles['feature-box-description']}>
            当サイトは求人元の企業やグループ会社からのスポンサー費用に
            <br />
            よって運営されています。ですので求職者の方からは
            <br />
            応募前はもちろん、内定後も費用は一切いただきません。
          </p>
        </div>
      </div>
    </section>
  )
}

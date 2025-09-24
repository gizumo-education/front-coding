import React from 'react'
import styles from './index.module.scss'

export const Features = () => {
  return (
    <section className={styles['section']}>
      <div className={styles['section-inner']}>
        <div className={styles['section-title']}>
          <h1 className={styles['section-text']}>ギズジョブの4つの特徴</h1>
        </div>

        <div className={styles['section-container']}>
          <div className={styles['section-box']}>
            <div className={styles['section-subbox']}>
              <h2 className={styles['section-subtitle']}>WEB上で応募完結</h2>
              <p className={styles['section-description']}>
                エントリーシートの記入を済ませれば、あとは気になる企業に応募して
                <br />
                待つだけで面接アポまで完結！
              </p>
            </div>
          </div>

          <div className={styles['section-box']}>
            <div className={styles['section-subbox']}>
              <h2 className={styles['section-subtitle']}>安心・安全</h2>
              <p className={styles['section-description']}>
                掲載案件は基本的に当社グループ企業となるため、
                <br />
                皆さまにより詳細にクリーンな職場情報をお届けいたします。
              </p>
            </div>
          </div>

          <div className={styles['section-box']}>
            <div className={styles['section-subbox']}>
              <h2 className={styles['section-subtitle']}>わかりやすい</h2>
              <p className={styles['section-description']}>
                当求人サイトは医療事務に特化しておりさらにこだわり検索や地域から検索
                <br />
                といったご自身にピッタリマッチした求人を見つけることができる！
              </p>
            </div>
          </div>

          <div className={styles['section-box']}>
            <div className={styles['section-subbox']}>
              <h2 className={styles['section-subtitle']}>完全無料</h2>
              <p className={styles['section-description']}>
                当サイトは求人元の企業やグループ会社からのスポンサー費用によって
                <br />
                運営されています。ですので求職者の方からは応募前はもちろん、
                <br />
                内定後も費用は一切いただきません。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

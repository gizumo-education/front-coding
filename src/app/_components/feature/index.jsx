import styles from './index.module.scss'
import clsx from 'clsx'

export const Feature = ({ id, className = '' }) => {
  return (
    <section id={id} className={clsx('inner', styles['feature'], className)}>
      <h2 className={styles['feature-title']}>ギズジョブの4つの特徴</h2>
      <div className={styles['feature-wrapper']}>
        <div className={styles['feature-box']}>
          <h3 className={styles['feature-box-title']}>WEB上で応募完結</h3>
          <p className={styles['feature-box-description']}>
            エントリーシートの記入を済ませれば、
            <br className={styles['br-sp']} />
            あとは気になる企業に応募して
            <br className={styles['br-pc']} />
            待つだけで面接アポまで完結！
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
            <br className={styles['br-sp']} />
            こだわり検索や地域から検索
            <br className={styles['br-pc']} />
            といったご自身に
            <br className={styles['br-sp']} />
            ピッタリマッチした求人を見つけることができる！
          </p>
        </div>
        <div className={styles['feature-box']}>
          <h3 className={styles['feature-box-title']}>完全無料</h3>
          <p className={styles['feature-box-description']}>
            当サイトは求人元の企業やグループ会社からのスポンサー費用に
            <br className={styles['br-sp']} />
            よって
            <br className={styles['br-pc']} />
            運営されています。ですので求職者の方からは
            <br className={styles['br-sp']} />
            応募前はもちろん、
            <br className={styles['br-pc']} />
            内定後も費用は一切いただきません。
          </p>
        </div>
      </div>
    </section>
  )
}

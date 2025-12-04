import styles from './index.module.scss'
import clsx from 'clsx'

export const Group2 = ({ id, className = '' }) => {
  return (
    <section id={id} className={clsx('inner', styles['group2'], className)}>
      <h2 className={styles['group2-title']}>ギズジョブの4つの特徴</h2>
      <div className={styles['group2-wrapper']}>
        <div className={styles['group2-box-container']}>
          <h2 className={styles['group2-box-container-title']}>
            WEB上で応募完結
          </h2>

          <p className={styles['group2-box-container-description']}>
            エントリーシートの記入を済ませれば、
            <br className={styles['text-break-sp']} />
            あとは気になる企業に応募して
            <br className={styles['text-break-pc']} />
            待つだけで面接アポまで完結！
          </p>
        </div>

        <div className={styles['group2-box-container']}>
          <h2 className={styles['group2-box-container-title']}>安心・安全</h2>

          <p className={styles['group2-box-container-description']}>
            掲載案件は基本的に当社グループ企業となるため、
            <br className={styles[('text-break-pc', 'text-break-sp')]} />
            皆さまにより詳細にクリーンな職場情報をお届けいたします。
          </p>
        </div>

        <div className={styles['group2-box-container']}>
          <h2 className={styles['group2-box-container-title']}>わかりやすい</h2>

          <p className={styles['group2-box-container-description']}>
            当求人サイトは医療事務に特化しておりさらに
            <br className={styles['text-break-sp']} />
            こだわり検索や地域から検索
            <br className={styles['text-break-pc']} />
            といったご自身に
            <br className={styles['text-break-sp']} />
            ピッタリマッチした求人を見つけることができる！
          </p>
        </div>

        <div className={styles['group2-box-container']}>
          <h2 className={styles['group2-box-container-title']}>完全無料</h2>

          <p className={styles['group2-box-container-description']}>
            当サイトは求人元の企業やグループ会社からのスポンサー費用に
            <br className={styles['text-break-sp']} />
            よって
            <br className={styles['text-break-pc']} />
            運営されています。ですので求職者の方からは
            <br className={styles['text-break-sp']} />
            応募前はもちろん、
            <br className={styles['text-break-pc']} />
            内定後も費用は一切いただきません。
          </p>
        </div>
      </div>
    </section>
  )
}

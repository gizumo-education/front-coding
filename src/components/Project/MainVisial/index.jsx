import styles from './index.module.scss'

export const MainVisial = () => {
  return (
    <div className={styles['mainvisial-section']}>
      <div className={styles['mainvisial-overlay']}></div>
      <div className={styles['mainvisial-inner']}>
        <p className={styles['mainvisialgroup1-main-text']}>
          ギズジョブなら理想の職場がきっと見つかる
        </p>
        <p className={styles['mainvisial-sub-text']}>
          ギズジョブは完全無料の求職者向け求人サービスです。
        </p>
      </div>
    </div>
  )
}

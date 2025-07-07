import styles from './index.module.scss'

export const Group1 = () => {
  return (
    <div className={styles['group1-section']}>
      <div className={styles['group1-overlay']}></div>
      <div className={styles['group1-inner']}>
        <p className={styles['group1-main-text']}>
          ギズジョブなら理想の職場がきっと見つかる
        </p>
        <p className={styles['group1-sub-text']}>
          ギズジョブは完全無料の求職者向け求人サービスです。
        </p>
      </div>
    </div>
  )
}

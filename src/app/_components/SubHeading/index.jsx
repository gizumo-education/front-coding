import styles from './index.module.scss'

export const SubHeading = () => {
  return (
    <div className={styles['subheading']}>
      <div className={styles['subheading-text']}>
        <p>ギズジョブなら理想の職場がきっと見つかる</p>
        <p>ギズジョブは完全無料の求職者向け求人サービスです。</p>
      </div>
    </div>
  )
}

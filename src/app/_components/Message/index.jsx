import styles from './index.module.scss'

export const Message = () => {
  return (
    <section className={styles.message}>
      <div className={styles['message-wrapper']}>
        <p className={styles['message-text']}>
          ギズジョブなら理想の職場がきっと見つかる
        </p>
        <p className={styles['message-text']}>
          ギズジョブは完全無料の求職者向け求人サービスです。
        </p>
      </div>
    </section>
  )
}

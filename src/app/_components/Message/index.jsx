import styles from './index.module.scss'

export const Message = () => {
  return (
    <section className={styles.message}>
      <p className={styles['text-main']}>
        ギズジョブなら理想の職場がきっと見つかる。
      </p>
      <p className={styles['text-sub']}>
        ギズジョブは完全無料の求職者向け求人サービスです。
      </p>
    </section>
  )
}

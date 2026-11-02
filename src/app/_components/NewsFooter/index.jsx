import styles from './index.module.scss'

export const NewsFooter = () => {
  return (
    <section className={styles.footer}>
      <p className={styles['text-main']}>
        ギズジョブなら理想の職場がきっと見つかる
      </p>
      <p className={styles['text-sub']}>
        ギズジョブは完全無料の求職者向け求人サービスです。
      </p>
    </section>
  )
}

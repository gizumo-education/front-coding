import styles from './index.module.scss'

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <p className={styles.text}>
        <span className={styles['text-bold-1']}>
          ギズジョブなら理想の職場がきっと見つかる
        </span>
        <span className={styles['text-bold-2']}>
          ギズジョブは完全無料の求職者向け求人サービスです
          <span className={styles['text-normal']}>。</span>
        </span>
      </p>
    </section>
  )
}

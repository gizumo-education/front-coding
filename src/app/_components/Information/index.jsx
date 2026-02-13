import styles from './index.module.scss'

export const Information = () => {
  return (
    <>
      <section className={styles.information}>
        <p className={styles['info-text']}>
          ギズジョブなら理想の職場がきっと見つかる
        </p>
        <p className={styles['info-text']}>
          ギズジョブは完全無料の求職者向け求人サービスです。
        </p>
      </section>
    </>
  )
}

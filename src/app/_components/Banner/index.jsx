import styles from './index.module.scss'

export const Banner = () => {
  return (
    <section className={styles['banner']}>
      <h1 className={styles['banner-text']}>
        ギズジョブなら理想の職場がきっと見つかる
        <br />
        ギズジョブは完全無料の求職者向け求人サービスです。
      </h1>
    </section>
  )
}

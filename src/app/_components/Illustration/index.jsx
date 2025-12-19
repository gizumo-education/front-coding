import styles from './index.module.scss'

export const Illustration = () => {
  return (
    <section>
      <img src='/images/グループ 20.jpg' alt='' className={styles.img} />
      <div className={styles.img_overlay}></div>
      <p className={styles.text}>
        ギズジョブなら理想の職場がきっと見つかる
        <br />
        ギズジョブは完全無料の求職者向け求人サービスです。
      </p>
    </section>
  )
}

import styles from './index.module.scss'

export const Group1 = () => {
  return (
    <section className={styles['group1']}>
      <div className={styles['group1-textbox']}>
        <h1 className={styles['group1-text']}>
          ギズジョブなら理想の職場がきっと見つかる
          <br />
          ギズジョブは完全無料の求職者向け求人サービスです。
        </h1>
      </div>
    </section>
  )
}

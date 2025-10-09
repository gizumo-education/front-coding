import styles from './index.module.scss'

export const MainVisual = () => {
  return (
    <section className={styles['mainvisual']}>
      <div className={styles['mainvisual-textbox']}>
        <h1 className={styles['mainvisual-text']}>
          ギズジョブなら理想の職場がきっと見つかる
          <br />
          ギズジョブは完全無料の求職者向け求人サービスです。
        </h1>
      </div>
    </section>
  )
}

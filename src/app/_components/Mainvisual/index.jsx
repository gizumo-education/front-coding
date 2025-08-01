import styles from './index.module.scss'

export const Mainvisual = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['main-visual']}>
        <div className={styles['main-visual-bg']}></div>
        <section className={styles['main-visual-pra']}>
          <h2>ギズジョブなら理想の職場がきっと見つかる</h2>
          <h2>ギズジョブは完全無料の求職者向け求人サービスです。</h2>
        </section>
      </section>
    </main>
  )
}

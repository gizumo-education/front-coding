import styles from './index.module.scss'

export const Background = () => {
  return (
    <section className={styles.background}>
      <div className={'inner'}>
        <p className={styles['background_text']}>
          ギズジョブなら理想の職場がきっと見つかる
          <br />
          ギズジョブは完全無料の求職者向け求人サービスです。
        </p>
      </div>
    </section>
  )
}

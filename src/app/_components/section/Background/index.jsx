import styles from './index.module.scss'

export const Background = () => {
  return (
    <section className={styles['background-section']}>
      <div className={'inner'}>
        <p>
          ギズジョブなら理想の職場がきっと見つかる
          <br />
          ギズジョブは完全無料の求職者向け求人サービスです。
        </p>
      </div>
    </section>
  )
}

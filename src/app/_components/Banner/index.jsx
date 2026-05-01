import styles from './index.module.scss'

export const Banner = () => {
  return (
    <section className={styles['banner']}>
      <img
        src='img/meeting.png'
        alt=''
        className={styles['background-image']}
        width='400'
        height='75'
      />
      <div className={styles['overlay']}>
        <div className={styles['text']}>
          <p className={styles['text-sentence']}>
            ギズジョブなら理想の職場がきっと見つかる
          </p>
          <p className={styles['text-sentence']}>
            ギズジョブは完全無料の求職者向け求人サービスです。
          </p>
        </div>
      </div>
    </section>
  )
}

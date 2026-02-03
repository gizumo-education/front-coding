import styles from './index.module.scss'

export const SubMessage = () => {
  return (
    <section className={styles['bottom-message']}>
      <div className={styles['bottom-message-bg']}>
        <img
          src='/img/meeting.png'
          alt=''
          width='400'
          height='75'
          className={styles['bottom-message-img']}
        />
      </div>

      <div className={styles['bottom-message-inner']}>
        <p className={styles['bottom-message-text']}>
          ギズジョブなら理想の職場がきっと見つかる
          <br />
          ギズジョブは完全無料の求職者向け求人サービスです。
        </p>
      </div>
    </section>
  )
}

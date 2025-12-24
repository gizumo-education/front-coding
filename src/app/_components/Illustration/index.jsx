import styles from './index.module.scss'
import clsx from 'clsx'

export const Illustration = () => {
  return (
    <section>
      <div className={styles.img}>
        <div className={styles.img_overlay}>
          <div className={clsx(styles.flex, 'inner')}>
            <p className={styles.img_text}>
              ギズジョブなら理想の職場がきっと見つかる
            </p>
            <p className={styles.img_text}>
              ギズジョブは完全無料の求職者向け求人サービスです。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

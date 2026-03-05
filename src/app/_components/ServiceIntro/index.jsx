import clsx from 'clsx'
import styles from './index.module.scss'

export const ServiceInto = () => {
  return (
    <section className={clsx(styles['sec-service-intro'])}>
      <div className={clsx(styles['service-intro-inner'])}>
        <p>ギズジョブなら理想の職場がきっと見つかる</p>
        <p>ギズジョブは完全無料の求職者向け求人サービスです。</p>
      </div>
    </section>
  )
}

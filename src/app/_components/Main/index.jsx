import React from 'react'
import styles from './index.module.scss'

export const Main = () => {
  return (
    <>
      <section className={styles['section']}>
        <div className={styles['section-inner']}>
          <div className={styles['section-container']}>
            <span className={styles['section-text']}>
              ギズジョブなら理想の職場がきっと見つかる
            </span>
            <div className={styles['section-sub-container']}>
              <span className={styles['section-text']}>
                ギズジョブは完全無料の求職者向け求人サービスです
              </span>
              <span className={styles['section-text']}>。</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

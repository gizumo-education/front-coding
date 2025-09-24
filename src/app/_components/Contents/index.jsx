import React from 'react'
import styles from './index.module.scss'

export const Contents = () => {
  return (
    <section className={styles['section']}>
      <div className={styles['section-inner']}>
        <div className={styles['section-title']}>
          <h1 className={styles['section-text']}>転職お役立ちコンテンツ</h1>
        </div>

        <div className={styles['section-container']}>
          <div className={styles['section-box']}>
            <div className={styles['section-subbox']}>
              <h2 className={styles['section-subtitle']}>転職マニュアル</h2>
              <p className={styles['section-description']}>
                転職活動の基礎知識、面接対策など
                <br />
                転職のコツをお教えします
              </p>
            </div>
          </div>

          <div className={styles['section-box']}>
            <div className={styles['section-subbox']}>
              <h2 className={styles['section-subtitle']}>
                医療事務業界の豆知識
              </h2>
              <p className={styles['section-description']}>
                スキルアップ・労働環境、給与事情など
                <br />
                知って得する業界の豆知識を公開
              </p>
            </div>
          </div>

          <div className={styles['section-box']}>
            <div className={styles['section-subbox']}>
              <h2 className={styles['section-subtitle']}>転職マニュアル</h2>
              <p className={styles['section-description']}>
                転職活動の基礎知識、面接対策など
                <br />
                転職のコツをお教えします
              </p>
            </div>
          </div>
        </div>

        <div className={styles['button-wrapper']}>
          <button className={styles['button']}>
            医療事務コラムをもっと見る
          </button>
        </div>
      </div>
    </section>
  )
}

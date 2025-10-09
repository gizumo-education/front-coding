import styles from './index.module.scss'
import { MoreButton } from '@/components/MoreButton'

export const Info = () => {
  return (
    <section className={styles['info']}>
      <h2 className={styles['info-title']}>転職お役立ちコンテンツ</h2>
      <div className={styles['info-contents']}>
        <div className={styles['info-content']}>
          <div className={styles['info-content-text']}>
            <h3 className={styles['info-content-title']}>転職マニュアル</h3>
            <p className={styles['info-content-description']}>
              転職活動の基礎知識、面接対策など
              <br />
              転職のコツをお教えします
            </p>
          </div>
        </div>

        <div className={styles['info-content']}>
          <div className={styles['info-content-text']}>
            <h3 className={styles['info-content-title']}>
              医療事務業界の豆知識
            </h3>
            <p className={styles['info-content-description']}>
              スキルアップ・労働環境、給与事情など
              <br />
              知って得する業界の豆知識を公開
            </p>
          </div>
        </div>

        <div className={styles['info-content']}>
          <div className={styles['info-content-text']}>
            <h3 className={styles['info-content-title']}>転職マニュアル</h3>
            <p className={styles['info-content-description']}>
              転職活動の基礎知識、面接対策など
              <br />
              転職のコツをお教えします
            </p>
          </div>
        </div>
      </div>
      <div className={styles['info-button']}>
        <MoreButton
          text='医療事務コラムをもっと見る'
          href='/'
          className={styles['info-button-size']}
        />
      </div>
    </section>
  )
}

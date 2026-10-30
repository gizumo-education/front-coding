import styles from './index.module.scss'

export const Helpful = () => {
  return (
    <section id='helpful' className={styles['helpful']}>
      <h2 className={styles['helpful-heading']}>転職お役立ちコンテンツ</h2>
      <dl className={styles['helpful-list']}>
        <div className={styles['helpful-card']}>
          <dt className={styles['helpful-card-visual']}>
            <img
              className={styles['helpful-card-img']}
              src='/img/helpful-content-1.jpg'
              alt=''
              width='1000'
              height='670'
            />
            <span className={styles['helpful-title']}>転職マニュアル</span>
          </dt>
          <dd className={styles['helpful-description']}>
            <span>転職活動の基礎知識、面接対策など</span>
            <span>転職のコツをお教えします</span>
          </dd>
        </div>
        <div className={styles['helpful-card']}>
          <dt className={styles['helpful-card-visual']}>
            <img
              className={styles['helpful-card-img']}
              src='/img/helpful-content-2.jpg'
              alt=''
              width='998'
              height='665'
            />
            <span className={styles['helpful-title']}>
              医療事務業界の豆知識
            </span>
          </dt>
          <dd className={styles['helpful-description']}>
            <span>スキルアップ・労働環境、給与事情など</span>
            <span>知って得する業界の豆知識を公開</span>
          </dd>
        </div>
        <div className={styles['helpful-card']}>
          <dt className={styles['helpful-card-visual']}>
            <img
              className={styles['helpful-card-img']}
              src='/img/helpful-content-1.jpg'
              alt=''
              width='1000'
              height='670'
            />
            <span className={styles['helpful-title']}>転職マニュアル</span>
          </dt>
          <dd className={styles['helpful-description']}>
            <span>転職活動の基礎知識、面接対策など</span>
            <span>転職のコツをお教えします</span>
          </dd>
        </div>
      </dl>
      <a href='/' className={styles['helpful-more']}>
        <span className={styles['helpful-more-text']}>
          医療事務コラムをもっと見る
        </span>
      </a>
    </section>
  )
}

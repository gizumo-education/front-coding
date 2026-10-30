import styles from './index.module.scss'

export const Helpful = () => {
  return (
    <section id='helpful' className={styles['helpful']}>
      <h2 className={styles['helpful-heading']}>転職お役立ちコンテンツ</h2>
      <ul className={styles['helpful-list']}>
        <li className={styles['helpful-card']}>
          <div className={styles['helpful-card-visual']}>
            <img
              className={styles['helpful-card-img']}
              src='/Helpful/helpful1.jpg'
              alt=''
              width='1000'
              height='670'
            />
            <h3 className={styles['helpful-title']}>転職マニュアル</h3>
            <p className={styles['helpful-description']}>
              <span>転職活動の基礎知識、面接対策など</span>
              <span>転職のコツをお教えします</span>
            </p>
          </div>
        </li>
        <li className={styles['helpful-card']}>
          <div className={styles['helpful-card-visual']}>
            <img
              className={styles['helpful-card-img']}
              src='/Helpful/helpful2.jpg'
              alt=''
              width='998'
              height='665'
            />
            <h3 className={styles['helpful-title']}>医療事務業界の豆知識</h3>
            <p className={styles['helpful-description']}>
              <span>スキルアップ・労働環境、給与事情など</span>
              <span>知って得する業界の豆知識を公開</span>
            </p>
          </div>
        </li>
        <li className={styles['helpful-card']}>
          <div className={styles['helpful-card-visual']}>
            <img
              className={styles['helpful-card-img']}
              src='/Helpful/helpful1.jpg'
              alt=''
              width='1000'
              height='670'
            />
            <h3 className={styles['helpful-title']}>転職マニュアル</h3>
            <p className={styles['helpful-description']}>
              <span>転職活動の基礎知識、面接対策など</span>
              <span>転職のコツをお教えします</span>
            </p>
          </div>
        </li>
      </ul>
      <a href='/' className={styles['helpful-more']}>
        <span className={styles['helpful-more-text']}>
          医療事務コラムをもっと見る
        </span>
      </a>
    </section>
  )
}

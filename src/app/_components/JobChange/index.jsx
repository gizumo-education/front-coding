import styles from './index.module.scss'

export const JobChange = () => {
  return (
    <section id='jobchange' className={styles['job-change']}>
      <h2 className={styles['job-change-heading']}>転職までの流れ</h2>
      <ol className={styles['job-change-steps']}>
        <li className={styles['job-change-item']}>
          <div className={styles['steps-badge']}>
            <span className={styles['steps-label']}>STEP</span>
            <span className={styles['steps-number']}>1</span>
          </div>
          <img
            className={styles['steps-icon']}
            src='/icon/job-change-sheet.png'
            alt=''
            width='77'
            height='75'
          />
          <h3 className={styles['steps-title']}>エントリーシートの作成</h3>
          <p className={styles['steps-description']}>
            ここにはテキストが入ります。ここにはテキストが入ります。
            <br />
            ここにはテキストが入ります。
            <br />
            ここにはテキストが
          </p>
        </li>
        <li className={styles['job-change-item']}>
          <div className={styles['steps-badge']}>
            <span className={styles['steps-label']}>STEP</span>
            <span className={styles['steps-number']}>2</span>
          </div>
          <img
            className={styles['steps-icon']}
            src='/icon/job-change-search.png'
            alt=''
            width='75'
            height='75'
          />
          <h3 className={styles['steps-title']}>気になる企業のピックアップ</h3>
          <p className={styles['steps-description']}>
            ここにはテキストが入ります。ここにはテキストが入ります。
            <br />
            ここにはテキストが入ります。
            <br />
            ここにはテキストが
          </p>
        </li>
        <li className={styles['job-change-item']}>
          <div className={styles['steps-badge']}>
            <span className={styles['steps-label']}>STEP</span>
            <span className={styles['steps-number']}>3</span>
          </div>
          <img
            className={styles['steps-icon']}
            src='/icon/job-change-mail-exchange.png'
            alt=''
            width='81'
            height='75'
          />
          <h3 className={styles['steps-title']}>複数企業に応募</h3>
          <p className={styles['steps-description']}>
            ここにはテキストが入ります。ここにはテキストが入ります。
            <br />
            ここにはテキストが入ります。
            <br />
            ここにはテキストが
          </p>
        </li>
        <li className={styles['job-change-item']}>
          <div className={styles['steps-badge']}>
            <span className={styles['steps-label']}>STEP</span>
            <span className={styles['steps-number']}>4</span>
          </div>
          <img
            className={styles['steps-icon']}
            src='/icon/job-change-sparkle.png'
            alt=''
            width='74'
            height='75'
          />
          <h3 className={styles['steps-title']}>内定・転職！</h3>
          <p className={styles['steps-description']}>
            ここにはテキストが入ります。ここにはテキストが入ります。
            <br />
            ここにはテキストが入ります。
            <br />
            ここにはテキストが
          </p>
        </li>
      </ol>
    </section>
  )
}

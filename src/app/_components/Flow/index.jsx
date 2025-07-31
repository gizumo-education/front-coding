import styles from './index.module.scss'

export const Flow = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['inner']}>
        <h1 className={styles['flow-title']}>転職までの流れ</h1>
        <div className={styles['flame']}>
          <div className={styles['step-1']}>STEP1</div>
          <img
            src='/icon/skill-seat.png'
            alt='スキルシート'
            className={styles['entry-img']}
            width='76'
            height='75'
          />
          <h2 className={styles['entry-title']}>気になる企業のピックアップ</h2>
          <p className={styles['text']}>
            ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。
            ここにはテキストが入ります。ここにはテキストが入ります。
          </p>
        </div>
        <div className={styles['flow-allow']}></div>
        <div className={styles['flame']}>
          <div className={styles['step-1']}>STEP1</div>
          <img
            src='/icon/magnifying-glass.png'
            alt='虫眼鏡'
            className={styles['entry-img']}
            width='76'
            height='75'
          />
          <h2 className={styles['entry-title']}>複数企業に応募</h2>
          <p className={styles['text']}>
            ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。
            ここにはテキストが入ります。ここにはテキストが入ります。
          </p>
        </div>
        <div className={styles['flow-allow']}></div>
        <div className={styles['flame']}>
          <div className={styles['step-1']}>STEP1</div>
          <img
            src='/icon/apply.png'
            alt='メールアイコン'
            className={styles['entry-img']}
            width='76'
            height='75'
          />
          <h2 className={styles['entry-title']}>内定・転職！</h2>
          <p className={styles['text']}>
            ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。
            ここにはテキストが入ります。ここにはテキストが入ります。
          </p>
        </div>
        <div className={styles['flow-allow']}></div>
        <div className={styles['flame']}>
          <div className={styles['step-1']}>STEP1</div>
          <img
            src='/icon/job-offer.png'
            alt='キラキラ'
            className={styles['entry-img']}
            width='76'
            height='75'
          />
          <h2 className={styles['entry-title']}>エントリーシートの作成</h2>
          <p className={styles['text']}>
            ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。
            ここにはテキストが入ります。ここにはテキストが入ります。
          </p>
        </div>
      </section>
    </main>
  )
}

import styles from './index.module.scss'

export const FlowSteps = () => {
  return (
    <section className={styles['flow-section']}>
      <div className={styles['flow-inner']}>
        <h2 className={styles['flow-title']}>転職までの流れ</h2>
        <div className={styles['step-container']}>
          <div className={styles['step-card']}>
            <span className={styles['step-badge']}>STEP 1</span>
            <img
              src='./img/icon/FlowStep-entry-icon.png'
              alt='エントリーアイコン'
              className={styles['entry-icon']}
              width='102'
              height='100'
            />
            <h3 className={styles['step-title']}>エントリーシートの作成</h3>
            <p className={styles['step-desc']}>
              ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。こ
            </p>
          </div>
          <div className={styles.triangle}></div>
          <div className={styles['step-card']}>
            <span className={styles['step-badge']}>STEP 2</span>
            <img
              src='./img/icon/FlowStep-path-icon.png'
              alt='検索アイコン'
              className={styles['path-icon']}
              width='80'
              height='80'
            />
            <h3
              className={`${styles['step-title']} ${styles['step-title--pickup']}`}
            >
              気になる企業のピックアップ
            </h3>
            <p className={styles['step-desc']}>
              ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが
            </p>
          </div>
          <div className={styles.triangle}></div>
          <div className={styles['step-card']}>
            <span className={styles['step-badge']}>STEP 3</span>
            <img
              src='./img/icon/FlowStep-mail-icon.png'
              alt='メールアイコン'
              className={styles['mail-icon']}
              width='107'
              height='100'
            />
            <h3 className={styles['step-title']}>複数企業に応募</h3>
            <p
              className={`${styles['step-desc']} ${styles['step-desc--text']}`}
            >
              ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが
            </p>
          </div>
          <div className={styles.triangle}></div>
          <div className={styles['step-card']}>
            <span className={styles['step-badge']}>STEP 4</span>
            <img
              src='./img/icon/FlowStep-star-icon.png'
              alt='転職アイコン'
              className={styles['star-icon']}
              width='108'
              height='113'
            />
            <h3 className={styles['step-title']}>内定・転職！</h3>
            <p
              className={`${styles['step-desc']} ${styles['step-desc--text2']}`}
            >
              ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

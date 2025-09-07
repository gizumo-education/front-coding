import styles from './index.module.scss'

export const Keyvisual = () => {
  return (
    <main className={styles['main']}>
      <div className={styles['main-inner']}>
        <img
          src='/images/no1.png'
          alt='No.1アイコン'
          className={styles['no1']}
          width='341'
          height='168'
        />
        <img
          src='/images/text.png'
          alt='医療事務求人を探すならソラジョブ'
          className={styles['job-image']}
          width='800'
          height='65'
        />

        <div className={styles['job-box']}>
          <img
            src='/images/frame.png'
            alt='求人数フレーム'
            className={styles['job-box-flame']}
            width='391'
            height='69'
          />

          <div className={styles['job-text-container']}>
            <span className={styles['job-text']}>現在の求人掲載数：</span>
            <span className={styles['job-text']}>2,320</span>
            <span className={styles['job-text']}>件</span>
          </div>
        </div>
      </div>
    </main>
  )
}

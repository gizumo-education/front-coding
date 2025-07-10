import styles from './index.module.scss'

export const Keyvisual = () => {
  return (
    <div className={styles['keyvisual']}>
      <div className={styles['keyvisual-inner']}>
        <img
          src='./img/icon/icon-keyvisual No.1 icon.png'
          alt='No.1アイコン'
          className={styles['no1']}
          width='341'
          height='168'
        />
        <img
          src='./img/icon/icon-keyvisual text-icon.png'
          alt='テキストアイコン'
          className={styles['catch']}
          width='800'
          height='65'
        />
        <div className={styles['job-box']}>
          <img
            src='./img/icon/icon-keyvisual boxbg.png'
            alt='ボックス背景'
            className={styles['boxBg']}
            width='391'
            height='69'
          />
          <p className={styles['job-count']}>
            現在の求人掲載数：
            <span className={styles['highlight']}>2,320</span>件
          </p>
        </div>
      </div>
    </div>
  )
}

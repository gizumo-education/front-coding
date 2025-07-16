import styles from './index.module.scss'

export const Keyvisual = () => {
  return (
    <div className={styles['keyvisual']}>
      <div className={styles['keyvisual-inner']}>
        <picture>
          <source
            srcSet='./img/icon/icon-keyvisual-No.1-icon-sp.png'
            media='(max-width: 767px)'
          />
          <img
            src='./img/icon/icon-keyvisual No.1 icon.png'
            alt='No.1アイコン'
            className={styles['no1']}
            width='341'
            height='168'
          />
        </picture>
        <picture>
          <source
            srcSet='./img/icon/icon-keyvisual-text-icon-sp.png'
            media='(max-width: 767px)'
          />
          <img
            src='./img/icon/icon-keyvisual text-icon.png'
            alt='テキストアイコン'
            className={styles['catch']}
            width='800'
            height='65'
          />
        </picture>
        <div className={styles['job-box']}>
          <picture>
            <source
              srcSet='./img/icon/icon-keyvisual-boxbg-sp.png'
              media='(max-width: 767px)'
            />
            <img
              src='./img/icon/icon-keyvisual boxbg.png'
              alt='ボックス背景'
              className={styles['boxBg']}
              width='391'
              height='69'
            />
          </picture>
          <p className={styles['job-count']}>
            現在の求人掲載数：
            <span className={styles['highlight']}>2,320</span>件
          </p>
        </div>
      </div>
    </div>
  )
}

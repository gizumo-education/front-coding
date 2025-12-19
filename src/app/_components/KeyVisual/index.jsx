// import clsx from 'clsx'
import styles from './index.module.scss'

export const KyeVisual = () => {
  return (
    <section>
      <div>
        <img
          src='/images/グループ 23.png'
          alt='キービジュアル'
          className={styles.keyvisual}
        />
        <img
          src='/icon/keyvisual.svg'
          alt='ナンバーワン'
          className={styles.keyvisual_icon}
        />
        <img
          src='/icon/医療事務求人を探すならソラジョブ.svg'
          alt='医療事務求人を探すならギズジョブ'
          className={styles.keyvisual_text}
        />
        <div className={styles.keyvisual_box}>
          <span className={styles.jobs}>
            現在の求人掲載数：<span className={styles.jobs_number}>2,320</span>
            件
          </span>
        </div>
      </div>
    </section>
  )
}

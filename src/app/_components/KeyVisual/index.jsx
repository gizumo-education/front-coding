import clsx from 'clsx'
import styles from './index.module.scss'

export const KyeVisual = () => {
  return (
    <section className={clsx(styles.pc_backcolor, styles.sp_backimg)} id='/'>
      <div className={'inner'}>
        <div className={styles.keyvisual_flex}>
          <div className={styles.section}>
            <div className={styles.keyvisual_content}>
              <img
                src='/icon/keyvisual.svg'
                alt='ナンバーワン'
                width='158'
                height='81'
                className={styles.keyvisual_icon}
              />
              <img
                src='/icon/keyvisual_text_icon.svg'
                alt='医療事務求人を探すならギズジョブ'
                width='278'
                height='27'
                className={styles.keyvisual_text}
              />
              <div className={styles.keyvisual_box}>
                <span className={styles.jobs}>
                  現在の求人掲載数：
                  <span className={styles.jobs_number}>2,320</span>件
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

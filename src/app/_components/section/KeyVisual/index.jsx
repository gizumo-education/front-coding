import styles from './index.module.scss'

export const KeyVisual = () => {
  return (
    <section className={styles.section} id='top'>
      <div className={'inner'}>
        <div className={styles.box}>
          <img
            src='/images/keyvisual.png'
            width={298}
            height={146}
            alt='No.1'
            className={styles['box_key_img']}
          ></img>
          <img
            src='/images/gizjob_text.png'
            width={544}
            height={44}
            alt='医療事務求人を探すならギズジョブ'
            className={styles['box_text_img']}
          ></img>

          <img
            src='/images/keyvisual_pc.png'
            width={682}
            height={336}
            alt='No.1'
            className={styles['pc-key']}
          ></img>
          <img
            src='/images/医療事務求人を探すならソラジョブ.png'
            width={1600}
            height={130}
            alt='医療事務求人を探すならソラジョブ'
            className={styles['pc-text']}
          ></img>
          <div className={styles['box_text']}>
            <span>
              現在の求人掲載数:
              <span className={styles['box_text_span']}>2,320</span>件
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

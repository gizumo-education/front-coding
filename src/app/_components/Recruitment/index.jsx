import styles from './index.module.scss'

export const Recruitment = () => {
  return (
    <section className={styles.recruitment}>
      <h2 className={styles.title}>新着求人</h2>
      <div className={styles.card}>
        <div className={styles['image-wrapper']}>
          <img
            className={styles.image}
            src='/recruitment.jpg'
            alt='医療事務求人'
            width={740}
            height={416}
          />
          <button className={styles['slider-button-left']}>
            <img
              className={styles['slider-circle']}
              src='/icon/slider-circle.svg'
              alt=''
              width={42}
              height={42}
            />
            <img
              className={styles['slider-arrow']}
              src='/icon/arrow-left.svg'
              alt='前へ'
              width={8}
              height={15}
            />
          </button>
          <button className={styles['slider-button-right']}>
            <img
              className={styles['slider-circle']}
              src='/icon/slider-circle.svg'
              alt=''
              width={42}
              height={42}
            />
            <img
              className={styles['slider-arrow']}
              src='/icon/arrow-right.svg'
              alt='次へ'
              width={8}
              height={15}
            />
          </button>
        </div>
        <h3 className={styles['job-title']}>
          平日・夕方までの勤務!伊勢市の伊勢赤十字病院で医療事務求人
        </h3>
        <dl className={styles.info}>
          <div className={styles.row}>
            <dt className={styles.label}>給与</dt>
            <dd className={styles.value}>月給 148,000円〜</dd>
          </div>
          <div className={styles.row}>
            <dt className={styles.label}>所在地</dt>
            <dd className={styles.value}>三重県伊勢市</dd>
          </div>
          <div className={styles.row}>
            <dt className={styles.label}>最寄駅</dt>
            <dd className={styles.value}>伊勢市駅 徒歩15分</dd>
          </div>
        </dl>
        <a href='/' className={styles.button}>
          新着求人一覧をもっと見る
        </a>
      </div>
    </section>
  )
}

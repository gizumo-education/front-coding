import styles from './index.module.scss'

export const KeyVisual = () => {
  return (
    <section className={styles['section']}>
      <img
        src='/img/keyVisual.jpg'
        alt=''
        width={1000}
        height={661}
        className={styles['key-visual']}
      />
      <img
        src='/img/no-1.png'
        alt='no.1'
        width={158}
        height={81}
        className={styles.no1}
      />
      <h1 className={styles.title}>医療事務求人を探すならギズジョブ</h1>
      <div className={styles['text-box']}>
        <p className={styles.text}>
          現在の求人掲載数：<span className={styles['is-big']}>2,320</span>件
        </p>
      </div>
    </section>
  )
}

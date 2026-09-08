import styles from './index.module.scss'

export const Keyvisual = () => {
  return (
    <section className={styles.keyvisual}>
      <div className={styles.inner}>
        <img
          className={styles.badge}
          src='/no1.png'
          alt='2021年 使って良かった転職サイト no.1'
          width={150}
          height={73}
        />
        <h1 className={styles.title}>医療事務求人を探すならギズジョブ</h1>
        <p className={styles.count}>
          現在の求人掲載数：<span className={styles.number}>2,320</span>件
        </p>
      </div>
    </section>
  )
}

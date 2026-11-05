import clsx from 'clsx'
import styles from './index.module.scss'

export const Keyvisual = () => {
  return (
    <section className={styles.keyvisual}>
      <span className={clsx(styles.laurel, styles['laurel-left'])} />
      <span className={clsx(styles.laurel, styles['laurel-right'])} />
      <picture>
        <source
          media='(min-width: 768px)'
          srcSet='/img/pc/no1.svg'
          alt='no.1'
          width={252.87}
          height={161}
          className={styles.title}
        />
        <img
          src='/img/no1.svg'
          alt='no.1'
          width={100}
          height={70}
          className={styles.title}
        />
      </picture>
      <picture>
        <source
          media='(min-width: 768px)'
          srcSet='/img/pc/no1-mark.svg'
          alt=''
          width={10}
          height={14}
          className={styles['title-mark']}
        />
        <img
          src='/img/no1-mark.svg'
          alt=''
          width={3}
          height={4}
          className={styles['title-mark']}
        />
      </picture>
      <picture>
        <source
          media='(min-width: 768px)'
          srcSet='/img/pc/no1-note.svg'
          alt='株式会社●●社実績調査'
          width={115}
          height={12}
          className={styles.note}
        />
        <img
          src='/img/no1-note.svg'
          alt='株式会社●●社実績調査'
          width={35}
          height={4}
          className={styles.note}
        />
      </picture>
      <h1 className={styles.catch}>医療事務求人を探すならギズジョブ</h1>
      <p className={styles.count}>
        現在の求人掲載数：<strong className={styles.number}>2,320</strong>件
      </p>
    </section>
  )
}

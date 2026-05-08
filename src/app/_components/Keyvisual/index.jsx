import styles from './index.module.scss'

export const Keyvisual = () => {
  return (
    <section id='top' className={styles['keyvisual']}>
      <div className={styles['back-color']}>
        <picture>
          <source
            srcSet='/img/person-with-documents.png'
            media='(max-width: 400px)'
          />
          <img
            className={styles['background-img']}
            src='/img/person-with-documents-pc.png'
            alt=''
          />
        </picture>

        <picture>
          <source srcSet='/img/keyvisual.png' media='(max-width: 400px)' />
          <img
            className={styles['no1-badge']}
            src='/img/keyvisual-pc.png'
            alt='No.1画像'
          />
        </picture>
      </div>

      <h1 className={styles['giz-job']}>医療事務求人を探すならギズジョブ</h1>
      <div className={styles['job-count']}>
        <p className={styles['job-count-text']}>
          現在の求人掲載数：
          <span className={styles['job-count-number']}>2,320</span>件
        </p>
      </div>
    </section>
  )
}

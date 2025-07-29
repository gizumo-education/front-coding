import styles from './index.module.scss'

export const Recruitment = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['inner']}>
        <img
          src='/images/新着求人.png'
          alt='新着求人'
          width='100'
          height='25'
          className={styles['recruit']}
        />
      </section>
    </main>
  )
}

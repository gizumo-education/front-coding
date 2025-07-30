import styles from './index.module.scss'

export const Mainvisual = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['main-visual']}>
        <img
          src='/images/メインビジュアル.png'
          alt='メインビジュアル'
          width='400'
          height='75'
        />
      </section>
    </main>
  )
}

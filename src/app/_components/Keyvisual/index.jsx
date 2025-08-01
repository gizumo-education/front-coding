import styles from './index.module.scss'

export const Keyvisual = () => {
  return (
    <main className={styles['main']}>
      <section className={styles['key-visual-container']}>
        <img
          src='/images/キービジュアルSP.png'
          alt='キービジュアル女性画像'
          width='400'
          height='270'
          className={styles['key-visual']}
        />
        <section className={styles['inner']}>
          <img
            src='/images/使ってよかったサイト.png'
            alt='使ってよかった転職サイト'
            width='150'
            height='73'
            className={styles['no1-icon']}
          />
          <img
            src='/images/医療事務求人を探すならソラジョブ.png'
            alt='医療事務求人'
            width='272'
            height='22'
            className={styles['key-visual-title']}
          />
          <section className={styles['kyu-jin-container']}>
            <img
              src='/images/求人掲載数枠.png'
              alt='求人掲載の枠'
              width='170'
              height='30'
              className={styles['kyu-jin-flame']}
            />
            <div className={styles['kyu-jin-suu-container']}>
              <span className={styles['kyu-jin-suu']}>現在の求人掲載数：</span>
              <span className={styles['kyu-jin-suu']}>2,320</span>
              <span className={styles['kyu-jin-suu']}>件</span>
            </div>
          </section>
        </section>
      </section>
    </main>
  )
}

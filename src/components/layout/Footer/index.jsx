import styles from './index.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-inner']}>
        <nav
          className={styles['footer-nav']}
          aria-label='フッターナビゲーション'
        >
          <a className={styles['footer-home']} href='/'>
            ギズジョブ医療事務TOP
          </a>

          <div className={styles['footer-links']}>
            <ul
              className={`${styles['footer-list']} ${styles['footer-list-primary']}`}
            >
              <li className={styles['footer-item']}>
                <a className={styles['footer-link']} href='/'>
                  利用ガイド
                </a>
              </li>
              <li className={styles['footer-item']}>
                <a className={styles['footer-link']} href='/'>
                  お問い合わせ
                </a>
              </li>
              <li className={styles['footer-item']}>
                <a className={styles['footer-link']} href='/'>
                  よくある質問
                </a>
              </li>
            </ul>

            <ul
              className={`${styles['footer-list']} ${styles['footer-list-secondary']}`}
            >
              <li className={styles['footer-item']}>
                <a className={styles['footer-link']} href='/'>
                  プライバシーポリシー
                </a>
              </li>
              <li className={styles['footer-item']}>
                <a className={styles['footer-link']} href='/'>
                  サイトマップ
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className={styles['footer-banners']}>
          <li className={styles['footer-banner']}>
            <img
              className={styles['footer-banner-image']}
              src='/Footer/footer1.png'
              alt=''
              width='323'
              height='86'
            />
          </li>

          <li className={styles['footer-banner']}>
            <img
              className={styles['footer-banner-image']}
              src='/Footer/footer2.png'
              alt=''
              width='323'
              height='86'
            />
          </li>
        </ul>
      </div>
      <p className={styles['footer-copyright']}>
        <small>© 2022 Gizumo Inc.</small>
      </p>
    </footer>
  )
}

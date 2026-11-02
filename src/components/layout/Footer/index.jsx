import styles from './index.module.scss'

const links = [
  { id: 1, text: '利用ガイド', href: '/' },
  { id: 2, text: 'プライバシーポリシー', href: '/' },
  { id: 3, text: 'お問い合わせ', href: '/' },
  { id: 4, text: 'サイトマップ', href: '/' },
  { id: 5, text: 'よくある質問', href: '/' },
]

const banners = [
  { id: 1, image: '/footer1.jpg', alt: '', href: '/' },
  { id: 2, image: '/footer2.jpg', alt: '', href: '/' },
]

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='inner'>
        <a className={styles.top} href='/'>
          ギズジョブ医療事務TOP
        </a>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.id}>
              <a className={styles.link} href={link.href}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles.banners}>
          {banners.map((banner) => (
            <li key={banner.id}>
              <a href={banner.href}>
                <img
                  className={styles.banner}
                  src={banner.image}
                  alt={banner.alt}
                  width={645}
                  height={172}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.copyright}>
        <small>© 2022 Gizumo Inc.</small>
      </p>
    </footer>
  )
}

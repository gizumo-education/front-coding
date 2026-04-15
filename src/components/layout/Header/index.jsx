'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef(null)

  const toggleMenu = () => setIsOpen((open) => !open)
  const closeMenu = () => setIsOpen(false)

  // スクロールロック
  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = isOpen ? 'hidden' : originalOverflow
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  const menuItems = [
    { label: 'トップ', target: '#top' },
    { label: '新着求人', target: '#JobOffer' },
    { label: '4つの特徴', target: '#top' },
    { label: '転職までの流れ', target: '#top' },
    { label: '転職お役立ちコンテンツ', target: '#top' },
  ]

  const handleScroll = (selector) => {
    const target = document.querySelector(selector)
    if (!target || !headerRef.current) return

    const offsetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerRef.current.offsetHeight

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    closeMenu()
  }

  return (
    <header ref={headerRef} className={styles.header} id='top'>
      <nav className={styles.nav}>
        {/* ===== PC / TAB ナビ ===== */}
        <ul className={styles.list}>
          <li>
            <a href='/' className={clsx(styles['list-link'], styles.medical)}>
              ギズジョブ医療事務とは
            </a>
          </li>
          <li>
            <a href='/' className={clsx(styles['list-link'], styles.search)}>
              こだわり検索
            </a>
          </li>
          <li>
            <a href='/' className={clsx(styles['list-link'], styles.book)}>
              ギズジョブ医療事務コラム
            </a>
          </li>
        </ul>

        <ul className={styles['button-list']}>
          <li>
            <a href='/' className={clsx(styles['button-link'], styles.heart)}>
              気になるリスト
            </a>
          </li>
          <li>
            <a href='/' className={clsx(styles['button-link'], styles.clock)}>
              閲覧履歴
            </a>
          </li>
          <li>
            <a href='/' className={clsx(styles['button-link'], styles.history)}>
              検索履歴
            </a>
          </li>
        </ul>

        {/* ===== ハンバーガー ===== */}
        <button
          onClick={toggleMenu}
          className={clsx(styles.hamburger, { [styles.open]: isOpen })}
        >
          <span className={styles['hamburger-line']} />
          <span className={styles['hamburger-line']} />
          <span className={styles['hamburger-line']} />
        </button>

        {/* ===== SP overlay ===== */}
        <div
          className={clsx(styles.overlay, { [styles.open]: isOpen })}
          onClick={closeMenu}
          role='presentation'
        >
          {/* ===== drawer ===== */}
          <nav
            className={clsx(styles['sp-menu'], { [styles.open]: isOpen })}
            onClick={(e) => e.stopPropagation()}
            role='presentation'
          >
            {menuItems.map((item) => (
              <div key={item.label}>
                <button
                  type='button'
                  id={item.target}
                  onClick={() => handleScroll(item.target)}
                  className={styles['sp-menu-link']}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </nav>
        </div>
      </nav>
    </header>
  )
}

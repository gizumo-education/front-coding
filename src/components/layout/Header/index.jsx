'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
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
        <button
          type='button'
          className={styles.button}
          aria-label={isMenuOpen ? `メニューを閉じる` : `メニューを開く`}
          onClick={toggleMenu}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
      </nav>

      <div
        className={clsx(styles['menu-panel'], { [styles.open]: isMenuOpen })}
      >
        <button
          type='button'
          className={styles['menu-backdrop']}
          aria-label='メニューを閉じる'
          onClick={closeMenu}
        />
        <nav className={styles['menu-nav']}>
          <ul className={styles['menu-list']}>
            <li>
              <a
                href='#top'
                className={styles['menu-link']}
                onClick={closeMenu}
              >
                トップ
              </a>
            </li>
            <li>
              <a
                href='#job-cards'
                className={styles['menu-link']}
                onClick={closeMenu}
              >
                新着求人
              </a>
            </li>
            <li>
              <a href='/' className={styles['menu-link']} onClick={closeMenu}>
                4つの特徴
              </a>
            </li>
            <li>
              <a href='/' className={styles['menu-link']} onClick={closeMenu}>
                転職までの流れ
              </a>
            </li>
            <li>
              <a href='/' className={styles['menu-link']} onClick={closeMenu}>
                転職お役立ちコンテンツ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

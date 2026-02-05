'use client'

import clsx from 'clsx'
import styles from './index.module.scss'
import { useRef, useState, useEffect } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollYRef = useRef(0)

  useEffect(() => {
    if (isMenuOpen) {
      scrollYRef.current = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollYRef.current}px`
      document.body.style.width = '100%'
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollYRef.current)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

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
        <div>
          <button
            type='button'
            className={clsx(styles.button, isMenuOpen && styles.open)}
            onClick={toggleMenu}
          >
            <span className={clsx(styles['button-line-top'], styles.line)} />
            <span className={clsx(styles['button-line-medium'], styles.line)} />
            <span className={clsx(styles['button-line-bottom'], styles.line)} />
          </button>
        </div>
        <div
          className={clsx(
            styles['menu-list'],
            isMenuOpen && styles['menu-open']
          )}
        >
          <ul>
            <li className={styles['list-item']}>
              <a href='#top' onClick={closeMenu}>
                トップ
              </a>
            </li>
            <li className={styles['list-item']}>
              <a href='/#job-opening' onClick={closeMenu}>
                新着求人
              </a>
            </li>
            <li className={styles['list-item']}>
              <a href='/' onClick={closeMenu}>
                ４つの特徴
              </a>
            </li>
            <li className={styles['list-item']}>
              <a href='/' onClick={closeMenu}>
                転職までの流れ
              </a>
            </li>
            <li className={styles['list-item']}>
              <a href='/' onClick={closeMenu}>
                転職お役立ちコンテンツ
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

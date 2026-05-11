'use client'

import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const drawerRef = useRef(null)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
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
              <a
                href='/'
                className={clsx(styles['button-link'], styles.history)}
              >
                検索履歴
              </a>
            </li>
          </ul>
          <button
            className={styles.button}
            onClick={toggleMenu}
            aria-label='メニューを開く'
          >
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
          </button>
        </nav>
      </header>
      {isMenuOpen && (
        <button className={styles['overlay']} onClick={toggleMenu} />
      )}
      <div
        ref={drawerRef}
        className={clsx(styles.drawer, { [styles['drawer-open']]: isMenuOpen })}
      >
        <nav className={styles['drawer-nav']}>
          <ul className={styles['drawer-list']}>
            <li className={styles['drawer-item']}>
              <a className={styles.link} href='#top' onClick={toggleMenu}>
                トップ
              </a>
            </li>
            <li className={styles['drawer-item']}>
              <a className={styles.link} href='#news' onClick={toggleMenu}>
                新着求人
              </a>
            </li>
            <li className={styles['drawer-item']}>
              <a className={styles.link} href='#features' onClick={toggleMenu}>
                4つの特徴
              </a>
            </li>
            <li className={styles['drawer-item']}>
              <a className={styles.link} href='#flow' onClick={toggleMenu}>
                転職までの流れ
              </a>
            </li>
            <li className={styles['drawer-item']}>
              <a className={styles.link} href='#content' onClick={toggleMenu}>
                転職お役立ちコンテンツ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

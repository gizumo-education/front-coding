'use client'

import clsx from 'clsx'
import { useRef, useState } from 'react'
import styles from './index.module.scss'

export const Header = () => {
  const menuRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleScroll = (e, targetId) => {
    e.preventDefault()
    setIsOpen(false)

    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
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
        <button
          type='button'
          className={styles.button}
          onClick={toggleMenu}
          aria-label='メニューを開閉する'
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>

        <div
          ref={menuRef}
          className={clsx(styles['nav-menu'], isOpen && styles['is-opened'])}
        >
          <ul className={styles['nav-menu-list']}>
            <li>
              <a
                href='#top'
                className={styles['nav-menu-link']}
                onClick={(e) => handleScroll(e, 'top')}
              >
                トップ
              </a>
            </li>
            <li>
              <a
                href='#news'
                className={styles['nav-menu-link']}
                onClick={(e) => handleScroll(e, 'news')}
              >
                新着求人
              </a>
            </li>
            <li>
              <a
                href='#features'
                className={styles['nav-menu-link']}
                onClick={(e) => handleScroll(e, 'features')}
              >
                4つの特徴
              </a>
            </li>
            <li>
              <a
                href='#flow'
                className={styles['nav-menu-link']}
                onClick={(e) => handleScroll(e, 'flow')}
              >
                転職までの流れ
              </a>
            </li>
            <li>
              <a
                href='#contents'
                className={styles['nav-menu-link']}
                onClick={(e) => handleScroll(e, 'contents')}
              >
                転職お役立ちコンテンツ
              </a>
            </li>
            <li>
              <a
                href='#search'
                className={styles['nav-menu-link']}
                onClick={(e) => handleScroll(e, 'search')}
              >
                お仕事検索
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

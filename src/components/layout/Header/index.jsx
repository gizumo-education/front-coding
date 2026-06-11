'use client'

import { useState, useEffect } from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isOpen])

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
          className={clsx(styles.button, isOpen && styles.active)}
          onClick={toggleMenu}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
        <div
          className={clsx(styles['menu-drawer'], isOpen && styles.active)}
          onClick={() => setIsOpen(false)}
          role='presentation'
        >
          <div
            className={styles['menu-inner']}
            onClick={toggleMenu}
            onKeyDown={(e) => {
              if (
                typeof window !== 'undefined' &&
                (e.key === 'Enter' || e.key === ' ')
              ) {
                toggleMenu()
              }
            }}
            role='button'
            tabIndex={0}
          >
            <ul className={styles['menu-list']}>
              <li className={styles['menu-list-li']}>
                <a
                  href='#top'
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(false)
                  }}
                  className={styles['menu-list-li-a']}
                >
                  トップ
                </a>
              </li>
              <li className={styles['menu-list-li']}>
                {/* // eslint-disable-next-line -- （今回はMarkuplint用のため下記を使用） */}
                {/* // markuplint-disable-next-line */}
                <a
                  href='#job'
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(false)
                  }}
                  className={styles['menu-list-li-a']}
                >
                  新着求人
                </a>
              </li>
              <li className={styles['menu-list-li']}>
                <a href='/' className={styles['menu-list-li-a']}>
                  4つの特徴
                </a>
              </li>
              <li className={styles['menu-list-li']}>
                <a href='/' className={styles['menu-list-li-a']}>
                  転職までの流れ
                </a>
              </li>
              <li className={styles['menu-list-li']}>
                <a href='/' className={styles['menu-list-li-a']}>
                  転職お役立ちコンテンツ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

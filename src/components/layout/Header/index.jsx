'use client'

import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

export const Header = () => {
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = (e) => {
    e.stopPropagation()
    const nextIsOpen = !isOpen
    setIsOpen(nextIsOpen)

    if (nextIsOpen) {
      document.body.classList.add('is-fixed')
    } else {
      document.body.classList.remove('is-fixed')
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.classList.remove('is-fixed')
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isOpen) return

      const isClickInsideButton =
        buttonRef.current && buttonRef.current.contains(e.target)
      const isClickOnLink = e.target.closest('a')

      if (!isClickInsideButton && !isClickOnLink) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
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
          ref={buttonRef}
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
              <Link
                href='#keyvisual'
                className={styles['nav-menu-link']}
                onClick={closeMenu}
              >
                トップ
              </Link>
            </li>
            <li>
              <Link
                href='#news'
                className={styles['nav-menu-link']}
                onClick={closeMenu}
              >
                新着求人
              </Link>
            </li>
            <li>
              <Link
                href='#keyvisual'
                className={styles['nav-menu-link']}
                onClick={closeMenu}
              >
                4つの特徴
              </Link>
            </li>
            <li>
              <Link
                href='#keyvisual'
                className={styles['nav-menu-link']}
                onClick={closeMenu}
              >
                転職までの流れ
              </Link>
            </li>
            <li>
              <Link
                href='#keyvisual'
                className={styles['nav-menu-link']}
                onClick={closeMenu}
              >
                転職お役立ちコンテンツ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

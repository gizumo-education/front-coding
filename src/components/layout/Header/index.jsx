'use client'
import clsx from 'clsx'
import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuFunction = () => {
    setOpenMenu((prev) => !prev)
  }

  const closeMenu = () => {
    setOpenMenu(false)
  }

  useEffect(() => {
    if (openMenu) {
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previousOverflow
      }
    }
  }, [openMenu])

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
          onClick={menuFunction}
          className={clsx(styles.button, styles.hamburger)}
          aria-expanded={openMenu}
        >
          <span className={clsx(styles.line)} />
          <span className={clsx(styles.line)} />
          <span className={clsx(styles.line)} />
        </button>

        <button
          type='button'
          className={clsx(
            styles['overlay'],
            openMenu && styles['overlay-open']
          )}
          onClick={closeMenu}
          aria-label='メニューを閉じる'
        />

        <div
          className={clsx(styles['menu'], openMenu && styles['menu-open'])}
          aria-hidden={!openMenu}
        >
          <ul>
            <li>
              <Link href='/' onClick={closeMenu}>
                トップ
              </Link>
            </li>
            <li>
              <Link href='/#news' onClick={closeMenu}>
                新着求人
              </Link>
            </li>
            <li>
              <Link href='/' onClick={closeMenu}>
                4つの特徴
              </Link>
            </li>
            <li>
              <Link href='/' onClick={closeMenu}>
                転職までの流れ
              </Link>
            </li>
            <li>
              <Link href='/' onClick={closeMenu}>
                転職お役立ちコンテンツ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

'use client'
import clsx from 'clsx'
import styles from './index.module.scss'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export const Header = () => {
  const btnRef = useRef(null)
  const menuRef = useRef(null)
  const [openMenu, setOpenMenu] = useState(false)

  const menuBtnClick = (e) => {
    e.stopPropagation()
    const nextState = !openMenu
    setOpenMenu(nextState)

    if (nextState) {
      document.body.classList.add('is-fixed')
    } else {
      document.body.classList.remove('is-fixed')
    }
  }

  const closeMenu = () => {
    setOpenMenu(false)
    document.body.classList.remove('is-fixed')
  }

  useEffect(() => {
    const handleClickMenu = (e) => {
      if (!openMenu) return
      const linkTarget = e.target.closest('a')
      const btnTarget = btnRef.current.contains(e.target)

      if (!linkTarget && !btnTarget) {
        closeMenu()
      }
    }
    document.addEventListener('click', handleClickMenu)
    return () => {
      document.removeEventListener('click', handleClickMenu)
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
          onClick={menuBtnClick}
          className={clsx(styles.button, styles.hamburger)}
          aria-expanded={openMenu}
        >
          <span className={clsx(styles.line)} />
          <span className={clsx(styles.line)} />
          <span className={clsx(styles.line)} />
        </button>

        <button
          ref={btnRef}
          type='button'
          className={clsx(
            styles['overlay'],
            openMenu && styles['overlay-open']
          )}
          onClick={closeMenu}
          aria-label='メニューを閉じる'
        />

        <div
          ref={menuRef}
          className={clsx(styles['menu'], openMenu && styles['menu-open'])}
          aria-hidden={!openMenu}
        >
          <ul>
            <li>
              <Link href='#keyvisual' onClick={closeMenu}>
                トップ
              </Link>
            </li>
            <li>
              <Link href='#news' onClick={closeMenu}>
                新着求人
              </Link>
            </li>
            <li>
              <Link href='#keyvisual' onClick={closeMenu}>
                4つの特徴
              </Link>
            </li>
            <li>
              <Link href='#keyvisual' onClick={closeMenu}>
                転職までの流れ
              </Link>
            </li>
            <li>
              <Link href='#keyvisual' onClick={closeMenu}>
                転職お役立ちコンテンツ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

'use client'

import clsx from 'clsx'
import styles from './index.module.scss'
import { useRef } from 'react'

export const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const toggleMenu = () => {
    menuRef.current.classList.toggle(styles['menu-open'])
    buttonRef.current.classList.toggle(styles['button-isopen'])
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    menuRef.current.classList.remove(styles['menu-open'])
    buttonRef.current.classList.remove(styles['button-isopen'])
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
        <div className='menu'>
          <button
            type='button'
            ref={buttonRef}
            className={clsx(styles.button, isMenuOpen && styles.open)}
            onClick={toggleMenu}
          >
            <span className={clsx(styles['button-line-top'], styles.line)} />
            <span className={clsx(styles['button-line-medium'], styles.line)} />
            <span className={clsx(styles['button-line-bottom'], styles.line)} />
          </button>
        </div>
        <div ref={menuRef} className={styles['menu-list']}>
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

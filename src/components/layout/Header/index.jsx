'use client'
import clsx from 'clsx'
import styles from './index.module.scss'
import { useState, useRef } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const closeMenu = () => {
    setIsOpen(false)
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
          className={clsx(styles.button, { [styles.open]: isOpen })}
          onClick={toggleMenu}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
        <nav
          ref={menuRef}
          className={clsx(styles['menu-drawer'], { [styles.open]: isOpen })}
        >
          <button
            type='button'
            className={styles['overlay-button']}
            onClick={closeMenu}
            aria-label='メニューを閉じる'
          />
          <div className={styles['menu-list-wrapper']}>
            <ul className={styles['menu-list']}>
              <li className={styles['menu-item']}>
                <a href='/' className={styles['menu-link']}>
                  トップ
                </a>
              </li>
              <li className={styles['menu-item']}>
                <a href='/' className={styles['menu-link']}>
                  新着求人
                </a>
              </li>
              <li className={styles['menu-item']}>
                <a href='/' className={styles['menu-link']}>
                  4つの特徴
                </a>
              </li>
              <li className={styles['menu-item']}>
                <a href='/' className={styles['menu-link']}>
                  転職までの流れ
                </a>
              </li>
              <li className={styles['menu-item']}>
                <a href='/' className={styles['menu-link']}>
                  転職お役立ちコンテンツ
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </nav>
    </header>
  )
}

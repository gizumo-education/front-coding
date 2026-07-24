'use client'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
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
          className={clsx(styles.button, { [styles.open]: isOpen })}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
      </nav>
      {/* SP用メニュー */}
      <nav className={clsx(styles['sp-menu'], { [styles.open]: isOpen })}>
        <button
          type='button'
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
          aria-label='メニューを閉じる'
        />
        <ul className={styles['sp-menu-list']}>
          <li>
            <a
              href='#HomePage'
              className={styles['sp-menu-link']}
              onClick={() => setIsOpen(false)}
            >
              トップ
            </a>
          </li>
          <li>
            <a
              href='#NewJob'
              className={styles['sp-menu-link']}
              onClick={() => setIsOpen(false)}
            >
              新着求人
            </a>
          </li>
          <li>
            <a href='/'>４つの特徴</a>
          </li>
          <li>
            <a href='/'>転職までの流れ</a>
          </li>
          <li>
            <a href='/'>転職お役立ちコンテンツ</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

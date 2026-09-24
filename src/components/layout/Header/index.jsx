'use client'

import { useState } from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scrollToSection = (id) => {
    setIsOpen(false)
    setTimeout(() => {
      const target = document.getElementById(id)
      if (target) {
        const headerHeight = 70
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - headerHeight
        window.scrollTo({ top: targetPosition, behavior: 'smooth' })
      }
    }, 100)
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
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
      </nav>
      <div className={clsx(styles.menu, { [styles.open]: isOpen })}>
        <button
          type='button'
          className={styles['menu-background']}
          onClick={() => setIsOpen(false)}
          aria-label='メニューを閉じる'
        />
        <ul className={styles['menu-list']}>
          <li>
            <button
              type='button'
              className={styles['menu-link']}
              onClick={() => scrollToSection('keyvisual')}
            >
              トップ
            </button>
          </li>
          <li>
            <button
              type='button'
              className={styles['menu-link']}
              onClick={() => scrollToSection('recruitment')}
            >
              新着求人
            </button>
          </li>
          <li>
            <a href='/' onClick={() => setIsOpen(false)}>
              4つの特徴
            </a>
          </li>
          <li>
            <a href='/' onClick={() => setIsOpen(false)}>
              転職までの流れ
            </a>
          </li>
          <li>
            <a href='/' onClick={() => setIsOpen(false)}>
              転職お役立ちコンテンツ
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

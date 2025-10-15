'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

export const Header = ({ headerRef }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  // スクロール制御
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    if (!headerRef.current) return

    const buttons = document.querySelectorAll('[data-scroll]')

    // クリック時のスクロール処理
    const handleClick = (e) => {
      const target = document.querySelector(e.currentTarget.dataset.scroll)
      if (!target) return

      // headerの高さ分下にスクロールする処理
      const offsetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerRef.current.offsetHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      setIsOpen(false)
    }

    // 全ボタンにクリックイベントを追加
    buttons.forEach((btn) => btn.addEventListener('click', handleClick))
    return () =>
      buttons.forEach((btn) => btn.removeEventListener('click', handleClick))
  }, [headerRef])

  return (
    <header ref={headerRef} className={styles.header}>
      <nav className={styles.nav}>
        {/* PC用メニュー */}
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
        {/* ハンバーガーボタン */}
        <button
          onClick={toggleMenu}
          className={clsx(styles.button, { [styles.open]: isOpen })}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>

        {/* SPメニュー */}
        <ul className={clsx(styles['sp-menu'], { [styles.open]: isOpen })}>
          <li>
            <button
              type='button'
              data-scroll='#top'
              className={styles['sp-menu-item']}
            >
              トップ
            </button>
          </li>
          <li>
            <button
              type='button'
              data-scroll='#news'
              className={styles['sp-menu-item']}
            >
              新着求人
            </button>
          </li>
          <li>
            <button
              type='button'
              data-scroll='#feature'
              className={styles['sp-menu-item']}
            >
              4つの特徴
            </button>
          </li>
          <li>
            <button
              type='button'
              data-scroll='#flow'
              className={styles['sp-menu-item']}
            >
              転職までの流れ
            </button>
          </li>
          <li>
            <button
              type='button'
              data-scroll='#info'
              className={styles['sp-menu-item']}
            >
              転職お役立ちコンテンツ
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

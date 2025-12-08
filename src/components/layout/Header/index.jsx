'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef(null)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    if (!headerRef.current) return

    const buttons = headerRef.current.querySelectorAll('[data-scroll]')

    const handleClick = (e) => {
      const target = document.querySelector(e.currentTarget.dataset.scroll)
      if (!target) return
      const offsetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerRef.current.offsetHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      setIsOpen(false)
    }

    buttons.forEach((btn) => btn.addEventListener('click', handleClick))
    return () =>
      buttons.forEach((btn) => btn.removeEventListener('click', handleClick))
  }, [headerRef])

  return (
    <header ref={headerRef} className={styles.header}>
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
          onClick={toggleMenu}
          className={clsx(styles.button, { [styles.open]: isOpen })}
        >
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
        </button>

        <ul className={clsx(styles['sp-menu'], { [styles.open]: isOpen })}>
          <li>
            <button
              type='button'
              data-scroll='#top'
              className={styles['sp-menu-link']}
            >
              トップ
            </button>
          </li>
          <li>
            <button
              type='button'
              data-scroll='#news'
              className={styles['sp-menu-link']}
            >
              新着求人
            </button>
          </li>
          <li>
            <button
              type='button'
              data-scroll='#group2'
              className={styles['sp-menu-link']}
            >
              4つの特徴
            </button>
          </li>
          <li>
            <button
              type='button'
              data-scroll='#group3'
              className={styles['sp-menu-link']}
            >
              転職までの流れ
            </button>
          </li>
          <li>
            <button
              type='button'
              data-scroll='#group4'
              className={styles['sp-menu-link']}
            >
              転職お役立ちコンテンツ
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

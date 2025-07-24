'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

export const Header = ({ newsRef, featuresRef, flowRef, helpRef }) => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonClick = () => {
    setIsOpen((prev) => !prev)
  }

  const scrollTo = (ref) => {
    if (!ref.current) return
    setIsOpen(false)
    setTimeout(() => {
      const headerOffset = 80
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }, 300)
  }

  const scrollToTop = () => {
    setIsOpen(false)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 300)
  }

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.dataset.scrollY = scrollY.toString()
    } else {
      const scrollY = document.body.dataset.scrollY || '0'
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, parseInt(scrollY))
      delete document.body.dataset.scrollY
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
          onClick={buttonClick}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
        <div className={clsx(styles['mobile-menu'], { [styles.open]: isOpen })}>
          <ul className={styles['mobile-menu-list']}>
            <li className={styles['mobile-menu-item']}>
              <button
                onClick={scrollToTop}
                className={styles['mobile-menu-link']}
              >
                トップ
              </button>
            </li>
            <li className={styles['mobile-menu-item']}>
              <button
                onClick={() => scrollTo(newsRef)}
                className={styles['mobile-menu-link']}
              >
                新着求人
              </button>
            </li>
            <li className={styles['mobile-menu-item']}>
              <button
                onClick={() => scrollTo(featuresRef)}
                className={styles['mobile-menu-link']}
              >
                4つの特徴
              </button>
            </li>
            <li className={styles['mobile-menu-item']}>
              <button
                onClick={() => scrollTo(flowRef)}
                className={styles['mobile-menu-link']}
              >
                転職までの流れ
              </button>
            </li>
            <li className={styles['mobile-menu-item']}>
              <button
                onClick={() => scrollTo(helpRef)}
                className={styles['mobile-menu-link']}
              >
                転職お役立ちコンテンツ
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

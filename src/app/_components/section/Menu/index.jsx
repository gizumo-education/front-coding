'use client'

import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import clsx from 'clsx'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleScroll = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <section>
      <nav className={clsx(styles.menu, isOpen ? styles['is-open'] : '')}>
        <ul className={styles.menu_ul}>
          <li>
            <a href='/' onClick={(e) => handleScroll(e, 'top')}>
              トップ
            </a>
          </li>
          <li>
            <a href='/' onClick={(e) => handleScroll(e, 'news')}>
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
      <button
        className={clsx(styles.button)}
        onClick={handleClick}
        aria-expanded={isOpen}
      >
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </button>
    </section>
  )
}

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])

  const handleOpenClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleScroll = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <nav className={clsx(styles.hamburger_nav, { [styles.active]: isOpen })}>
        <ul className={clsx(styles.nav_items)}>
          <li className={clsx(styles.nav_items_item, styles.nav_items_item1)}>
            <a href='/' onClick={(e) => handleScroll(e, '/')}>
              トップ
            </a>
          </li>
          <li className={clsx(styles.nav_items_item, styles.nav_items_item2)}>
            <a href='#newjobs' onClick={(e) => handleScroll(e, 'newjobs')}>
              新着求人
            </a>
          </li>
          <li className={clsx(styles.nav_items_item, styles.nav_items_item3)}>
            <a href='/'>4つの特徴</a>
          </li>
          <li className={clsx(styles.nav_items_item, styles.nav_items_item4)}>
            <a href='/'>転職までの流れ</a>
          </li>
          <li className={clsx(styles.nav_items_item, styles.nav_items_item5)}>
            <a href='/'>転職お役立ちコンテンツ</a>
          </li>
        </ul>
      </nav>
      <button
        className={`${styles.button} ${isOpen ? styles.isactive : ''}`}
        onClick={handleOpenClick}
        aria-expanded={isOpen}
        aria-controls='hamburger-nav'
        aria-label='メニューを開閉'
      >
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </button>
    </>
  )
}

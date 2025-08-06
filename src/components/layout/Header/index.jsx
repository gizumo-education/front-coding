'use client'

import { useRef } from 'react'
import { useState } from 'react'

import clsx from 'clsx'
import styles from './index.module.scss'

export const Header = () => {
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)
  const section4Ref = useRef(null)
  const section5Ref = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

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
        <button className={styles.button} onClick={toggleMenu}>
          <span className={clsx(styles.line, isOpen ? styles.open : '')} />
          <span className={clsx(styles.line, isOpen ? styles.open : '')} />
          <span className={clsx(styles.line, isOpen ? styles.open : '')} />
        </button>
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <ul>
            <li className={styles['link']}>
              <a
                href='/'
                onClick={() =>
                  section1Ref.current?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                トップ
              </a>
            </li>
            <li className={styles['link']}>
              <a
                href='/'
                onClick={() =>
                  section2Ref.current?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                新着求人
              </a>
            </li>
            <li className={styles['link']}>
              <a
                href='/'
                onClick={() =>
                  section3Ref.current?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                4つの特徴
              </a>
            </li>
            <li className={styles['link']}>
              <a
                href='/'
                onClick={() =>
                  section4Ref.current?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                転職までの流れ
              </a>
            </li>
            <li className={styles['link']}>
              <a
                href='/'
                onClick={() =>
                  section5Ref.current?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                転職お役立ちコンテンツ
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

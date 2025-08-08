'use client'

// import { useRef } from 'react'
import { useState } from 'react'

import clsx from 'clsx'
import styles from './index.module.scss'

export const Header = ({ sectionRefs }) => {
  const { section1Ref, section2Ref, section3Ref, section4Ref, section5Ref } =
    sectionRefs

  const scrollToSection = (elementRef) => {
    elementRef?.current?.scrollIntoView({
      top: elementRef?.current?.offsetTop,
      behavior: 'smooth',
      block: 'start',
    })
  }

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
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(section1Ref)
                }}
              >
                トップ
              </a>
            </li>
            <li className={styles['link']}>
              <a
                href='/'
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(section2Ref)
                }}
              >
                新着求人
              </a>
            </li>
            <li className={styles['link']}>
              <a
                href='/'
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(section3Ref)
                }}
              >
                4つの特徴
              </a>
            </li>
            <li className={styles['link']}>
              <a
                href='/'
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(section4Ref)
                }}
              >
                転職までの流れ
              </a>
            </li>
            <li className={styles['link']}>
              <a
                href='/'
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(section5Ref)
                }}
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

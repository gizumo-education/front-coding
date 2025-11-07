'use client'
import clsx from 'clsx'
import styles from './index.module.scss'
import { useState, useEffect } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    // クリーンアップ関数: コンポーネントがアンマウントされる時や、
    // 依存配列が変わる直前に実行される。
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleDrawerLinkClick = () => {
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
          className={clsx(styles.button, { [styles['is-active']]: isOpen })}
          onClick={handleOpen}
        >
          <span className={clsx(styles.line, isOpen && styles['line-top'])} />
          <span
            className={clsx(styles.line, isOpen && styles['line-middle'])}
          />
          <span
            className={clsx(styles.line, isOpen && styles['line-bottom'])}
          />
        </button>

        {/* --- ドロワーメニューのラッパー --- */}
        <div
          className={clsx(styles.drawer, {
            [styles.open]: isOpen,
          })}
        >
          <div className={styles['drawer-content']}>
            {/* SP表示用に新規追加するメニュー要素 */}
            <ul className={styles['drawer-list']}>
              <li>
                <a
                  href='#top-section'
                  className={styles['drawer-link']}
                  onClick={handleDrawerLinkClick}
                >
                  トップ
                </a>
              </li>
              <li>
                <a
                  href='#new-jobs'
                  className={styles['drawer-link']}
                  onClick={handleDrawerLinkClick}
                >
                  新着求人
                </a>
              </li>
              <li>
                <a
                  href='#features'
                  className={styles['drawer-link']}
                  onClick={handleDrawerLinkClick}
                >
                  4つの特徴
                </a>
              </li>
              <li>
                <a
                  href='#flow'
                  className={styles['drawer-link']}
                  onClick={handleDrawerLinkClick}
                >
                  転職までの流れ
                </a>
              </li>
              <li>
                <a
                  href='#contents'
                  className={styles['drawer-link']}
                  onClick={handleDrawerLinkClick}
                >
                  転職お役立ちコンテンツ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

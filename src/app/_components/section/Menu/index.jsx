'use client'

import styles from './index.module.scss'

export const Menu = ({ isOpen }) => {
  return (
    <section className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <a href='/'>トップ</a>
          </li>
          <li>
            <a href='/'>新着求人</a>
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
    </section>
  )
}

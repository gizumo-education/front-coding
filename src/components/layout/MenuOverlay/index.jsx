'use client'

import clsx from 'clsx'
import styles from './index.module.scss'
import Link from 'next/link'
import { useEffect, useCallback } from 'react'

const links = [
  { id: 1, text: 'トップ', url: '#' },
  { id: 2, text: '新着求人', url: '#new-job-offers' },
  { id: 3, text: '4つの特徴', url: '#' },
  { id: 4, text: '転職までの流れ', url: '#' },
  { id: 5, text: '転職お役立ちコンテンツ', url: '#' },
]

export const MenuOverlay = ({ isOpen, setIsOpen }) => {
  const handleLinkClick = useCallback(() => setIsOpen(false), [setIsOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('is-menu-open')
    } else {
      document.body.classList.remove('is-menu-open')
    }

    const media = window.matchMedia('(max-width: 768px)')

    const listener = (e) => {
      if (e.matches) {
        setIsOpen(false)
      }
    }
    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [isOpen, setIsOpen])

  return (
    isOpen && (
      <div className={clsx(styles['menu-overlay-body'])}>
        <nav className={clsx(styles['menu-overlay-inner'])}>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.id} className={clsx(styles['menu-overlay-link'])}>
                  <Link href={link.url} onClick={handleLinkClick}>
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    )
  )
}

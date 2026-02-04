'use client'

import { Header } from '@/components/layout'
import { Hero } from './_components/Hero'
import { JobSearch } from './_components/JobSearch'
import { JobOpening } from './_components/JobOpening'
import { SubHeading } from './_components/SubHeading'
import { useRef, useState, useEffect } from 'react'

const Top = () => {
  const appRootRef = useRef(null)
  const scrollYRef = useRef(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const root = appRootRef.current

    if (!root) return

    if (isMenuOpen) {
      scrollYRef.current = window.scrollY
      root.style.top = `-${scrollYRef.current}px`
      root.classList.add('scroll-lock')
    } else {
      root.classList.remove('scroll-lock')
      root.style.top = ''
      window.scrollTo(0, scrollYRef.current)
    }
  }, [isMenuOpen])

  return (
    <div ref={appRootRef}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <JobSearch />
        <JobOpening />
      </main>
      <SubHeading />
    </div>
  )
}

export default Top

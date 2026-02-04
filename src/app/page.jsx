'use client'

import { Header } from '@/components/layout'
import { Hero } from './_components/Hero'
import { JobSearch } from './_components/JobSearch'
import { JobOpening } from './_components/JobOpening'
import { SubHeading } from './_components/SubHeading'
import { useRef, useState, useEffect } from 'react'

const Top = () => {
  const scrollYRef = useRef(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      scrollYRef.current = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollYRef.current}px`
      document.body.style.width = '100%'
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''

      window.scrollTo(0, scrollYRef.current)
    }
  }, [isMenuOpen])

  return (
    <div>
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

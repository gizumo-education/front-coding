'use client'

import { useState } from 'react'
import { Header } from '@/components/layout'
import { KeyVisual } from '@/app/_components/section/KeyVisual/'
import { JobSearch } from '@/app/_components/section/JobSearch/'
import { News } from '@/app/_components/section/News/'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Background } from './_components/section/Background'
import { Menu } from './_components/section/Menu'

const Top = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <Header isOpen={isOpen} onToggleMenu={toggle} />
      <main>
        <Menu isOpen={isOpen} />
        <KeyVisual />
        <JobSearch />
        <News />
        <Background />
      </main>
    </>
  )
}

export default Top

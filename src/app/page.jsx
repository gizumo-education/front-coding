'use client'

import { Header } from '@/components/layout'
import { KyeVisual } from '@/app/_components/KeyVisual'
import { Search } from '@/app/_components/Search'
import { NewJobs } from '@/app/_components/NewJobs'
import { Illustration } from '@/app/_components/Illustration'

const Top = () => {
  return (
    <>
      <Header />
      <KyeVisual />
      <Search />
      <NewJobs />
      <Illustration />
    </>
  )
}

export default Top

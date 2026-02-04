'use client'

import { Header } from '@/components/layout'
import { Hero } from './_components/Hero'
import { JobSearch } from './_components/JobSearch'
import { JobOpening } from './_components/JobOpening'
import { SubHeading } from './_components/SubHeading'

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <JobSearch />
        <JobOpening />
      </main>
      <SubHeading />
    </>
  )
}

export default Top

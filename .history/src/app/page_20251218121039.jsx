'use client'
import Head from 'next/head'
import { Header } from '@/components/layout'
import { KyeVisual } from '@/app/_components/KeyVisual'
import { Search } from '@/app/_components/Search'
import { NewJobs } from '@/app/_components/NewJobs'
import { Illustration } from '@/app/_components/Illustration'
import { useEffect } from 'react'

const Top = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css'
        />
      </Head>
      <Header />
      <KyeVisual />
      <Search />
      <NewJobs />
      <Illustration />
    </>
  )
}

export default Top

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
    script.src = 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
    script.type = 'module'
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/swiper/swiper-bundle.min.css'
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

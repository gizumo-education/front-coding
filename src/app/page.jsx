'use client'

import { useRef } from 'react'
import { Header } from '@/components/layout'
import { Keyvisual } from './_components/keyvisual'
import { Form } from './_components/form'
import { News } from './_components/news'
import { MainVisual } from './_components/mainVisual'
import { Feature } from './_components/feature'
import { Flow } from './_components/flow'
import { Info } from './_components/info'

import styles from './page.module.scss'

const Top = () => {
  const headerRef = useRef(null)

  return (
    <>
      <Header headerRef={headerRef} />

      <main className={styles['main']}>
        <section id='top'>
          <Keyvisual />
        </section>

        <Form className={styles['form-top-section']} />

        <section id='news'>
          <News />
        </section>

        <MainVisual />

        <section id='feature'>
          <Feature className={styles['feature-section']} />
        </section>

        <section id='flow'>
          <Flow className={styles['flow-section']} />
        </section>

        <section id='info'>
          <Info className={styles['info-section']} />
        </section>

        <Form className={styles['form-bottom-section']} />
      </main>
    </>
  )
}

export default Top

'use client'
import { useRef } from 'react'
import { Header } from '@/components/layout'
import { Keyvisual } from '@/components/Project/Keyvisual'
import { Form } from '@/components/Project/Form'
import { News } from '@/components/Project/news'
import { MainVisial } from '@/components/Project/MainVisial'
import { Features } from '@/components/Project/Features'
import { FlowSteps } from '@/components/Project/FlowSteps'
import { HelpfulContents } from '@/components/Project/HelpfulContents'
import { JobForm } from '@/components/Project/JobForm'

const Top = () => {
  const topRef = useRef(null)
  const newsRef = useRef(null)
  const featuresRef = useRef(null)
  const flowRef = useRef(null)
  const helpRef = useRef(null)

  return (
    <>
      <Header
        topRef={topRef}
        newsRef={newsRef}
        featuresRef={featuresRef}
        flowRef={flowRef}
        helpRef={helpRef}
      />
      <main ref={topRef}>
        <Keyvisual />
        <Form />
        <section ref={newsRef}>
          <News />
        </section>
        <MainVisial />
        <section ref={featuresRef}>
          <Features />
        </section>
        <section ref={flowRef}>
          <FlowSteps />
        </section>
        <section ref={helpRef}>
          <HelpfulContents />
        </section>
        <JobForm />
      </main>
      <footer></footer>
    </>
  )
}

export default Top

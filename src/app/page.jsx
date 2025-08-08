'use client'

import { Header } from '@/components/layout'
import { Features } from './_components/Features'
import { Flow } from './_components/Flow'
import { Contents } from './_components/Contents'
import { Jobsearch2 } from './_components/Jobsearch2'
import { Keyvisual } from './_components/Keyvisual'
import { Jobsearch } from './_components/Jobsearch'
import { Recruitment } from './_components/Recruitment'
import { Mainvisual } from './_components/Mainvisual'

import { useRef } from 'react'

const Top = () => {
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)
  const section4Ref = useRef(null)
  const section5Ref = useRef(null)

  return (
    <>
      <Header
        sectionRefs={{
          section1Ref,
          section2Ref,
          section3Ref,
          section4Ref,
          section5Ref,
        }}
      />
      <div ref={section1Ref} style={{ scrollMarginTop: '6em' }}>
        <Keyvisual />
      </div>
      <Jobsearch />
      <div ref={section2Ref} style={{ scrollMarginTop: '5em' }}>
        <Recruitment />
      </div>
      <Mainvisual />
      <div ref={section3Ref} style={{ scrollMarginTop: '2em' }}>
        <Features />
      </div>
      <div ref={section4Ref} style={{ scrollMarginTop: '2em' }}>
        <Flow />
      </div>
      <div ref={section5Ref} style={{ scrollMarginTop: '2em' }}>
        <Contents />
      </div>
      <Jobsearch2 />
    </>
  )
}

export default Top

import { Header } from '@/components/layout'
import { Features } from './_components/Features'
import { Flow } from './_components/Flow'
import { Contents } from './_components/Contents'
import { Jobsearch2 } from './_components/Jobsearch2'
import { Keyvisual } from './_components/Keyvisual'
import { Jobsearch } from './_components/Jobsearch'
import { Recruitment } from './_components/Recruitment'
import { Mainvisual } from './_components/Mainvisual'

const Top = () => {
  return (
    <>
      <Header />
      <Keyvisual />
      <Jobsearch />
      <Recruitment />
      <Mainvisual />
      <Features />
      <Flow />
      <Contents />
      <Jobsearch2 />
    </>
  )
}

export default Top

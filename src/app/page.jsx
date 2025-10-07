import { Header } from '@/components/layout'
import { Keyvisual } from './_components/Keyvisual'
import { Jobsearch } from './_components/Jobsearch'
import { NewJobs } from './_components/NewJobs'
import { Main } from './_components/Main'
import { Features } from './_components/Features'
import { Flow } from './_components/Flow'
import { Contents } from './_components/Contents'

const Top = () => {
  return (
    <>
      <Header />
      <Keyvisual />
      <Jobsearch />
      <NewJobs />
      <Main />
      <Features />
      <Flow />
      <Contents />
      <Jobsearch />
    </>
  )
}

export default Top

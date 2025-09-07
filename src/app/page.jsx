import { Header } from '@/components/layout'
import { Keyvisual } from './_components/Keyvisual'
import { Jobsearch } from './_components/Jobsearch'
import { NewJobs } from './_components/NewJobs'
import { Main } from './_components/Main'

const Top = () => {
  return (
    <>
      <Header />
      <Keyvisual />
      <Jobsearch />
      <NewJobs />
      <Main />
    </>
  )
}

export default Top

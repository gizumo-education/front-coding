import { Header } from '@/components/layout'
import { Keyvisual } from './_components/Keyvisual'
import { JobSearch } from './_components/JobSearch'
import { NewJobs } from './_components/NewJobs'
import { ServiceCatch } from './_components/ServiceCatch'

const Top = () => {
  return (
    <>
      <Header />
      <Keyvisual />
      <JobSearch />
      <NewJobs />
      <ServiceCatch />
    </>
  )
}

export default Top

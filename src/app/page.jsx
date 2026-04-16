import { Header } from '@/components/layout'
import { Hero } from '@/app/_components/Hero'
import { JobSearch } from '@/app/_components/JobSearch'
import { LatestJobs } from '@/app/_components/LatestJobs'
import { Message } from '@/app/_components/Message'

const Top = () => {
  return (
    <>
      <Header />
      <Hero />
      <JobSearch />
      <LatestJobs />
      <Message />
    </>
  )
}

export default Top

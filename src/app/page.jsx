import { Header } from '@/components/layout'
import { Hero } from './_components/Hero'
import { JobSearch } from './_components/JobSearch'
// import { JobOpening } from './_components/JobOpening'

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <JobSearch />
        {/* <JobOpening /> */}
      </main>
    </>
  )
}

export default Top

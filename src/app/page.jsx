import { Header } from '@/components/layout'
import { Keyvisual } from '@/app/_components/Keyvisual'
import { SearchForm } from '@/app/_components/SearchForm'
import { JobCard } from '@/app/_components/JobCard'
import { Banner } from '@/app/_components/Banner'

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <Keyvisual />
        <SearchForm />
        <JobCard />
        <Banner />
      </main>
    </>
  )
}

export default Top

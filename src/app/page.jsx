import { Header } from '@/components/layout'
import { Keyvisual } from '@/app/_components/Keyvisual'
import { SearchForm } from '@/app/_components/SearchForm'
import { JobCard } from '@/app/_components/JobCard'
import { Banner } from '@/app/_components/Banner'
import { Features } from '@/app/_components/Features'
import { JobChange } from '@/app/_components/JobChange'
import { Helpful } from '@/app/_components/Helpful'
import { Footer } from '@/components/layout'

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <Keyvisual />
        <SearchForm />
        <JobCard />
        <Banner />
        <Features />
        <JobChange />
        <Helpful />
        <SearchForm variant='footer' />
      </main>
      <Footer />
    </>
  )
}

export default Top

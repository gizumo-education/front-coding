import { Header, Footer } from '@/components/layout'
import { Keyvisual } from '@/app/_components/Keyvisual'
import { SearchForm } from '@/app/_components/SearchForm'
import { Recruitment } from '@/app/_components/Recruitment'
import { Banner } from '@/app/_components/Banner'
import { Features } from '@/app/_components/Features'
import { Flow } from '@/app/_components/Flow'
import { Contents } from '@/app/_components/Contents'

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <Keyvisual />
        <SearchForm />
        <Recruitment />
        <Banner />
        <Features />
        <Flow />
        <Contents />
        <SearchForm />
      </main>
      <Footer />
    </>
  )
}

export default Top

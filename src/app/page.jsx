import { Header } from '@/components/layout'
import { Keyvisual } from '@/app/_components/Keyvisual'
import { SearchForm } from '@/app/_components/SearchForm'
import { Recruitment } from '@/app/_components/Recruitment'
import { Banner } from '@/app/_components/Banner'

const Top = () => {
  return (
    <>
      <Header />
      <Keyvisual />
      <SearchForm />
      <Recruitment />
      <Banner />
    </>
  )
}

export default Top

import { Header } from '@/components/layout'
import { Keyvisual } from './_components/Keyvisual'
import { Search } from './_components/Search'
import { NewJob } from './_components/Newjob'
import { Banner } from './Banner'

const Top = () => {
  return (
    <>
      <Header />
      <Keyvisual />
      <Search />
      <NewJob />
      <Banner />
    </>
  )
}

export default Top

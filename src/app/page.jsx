import { Header } from '@/components/layout'
import { KeyVisual } from './_components/Keyvisual'
import { Search } from './_components/Search'
import { NewJob } from './_components/Newjob'
import { Banner } from './_components/Banner'

const Top = () => {
  return (
    <>
      <Header />
      <KeyVisual />
      <Search />
      <NewJob />
      <Banner />
    </>
  )
}

export default Top

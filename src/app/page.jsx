import { Header } from '@/components/layout'
import { Keyvisual } from '@/app/_components/Keyvisual'
import { Search } from '@/app/_components/Search'
import { News } from '@/app/_components/News'
import { NewsFooter } from '@/app/_components/NewsFooter'

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <Keyvisual />
        <Search />
        <News />
        <NewsFooter />
      </main>
    </>
  )
}

export default Top

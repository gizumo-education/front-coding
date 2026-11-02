import { Header } from '@/components/layout'
import { Keyvisual } from '@/app/_components/Keyvisual'
import { Search } from '@/app/_components/Search'
import { News } from '@/app/_components/News'
import { Message } from '@/app/_components/Message'

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <Keyvisual />
        <Search />
        <News />
        <Message />
      </main>
    </>
  )
}

export default Top

import { Header } from '@/components/layout'
import { Keyvisual } from '@/components/Project/Keyvisual'
import { Form } from '@/components/Project/Form'
import { News } from '@/components/Project/news'
import { MainVisial } from '@/components/Project/MainVisial'

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <Keyvisual />
        <Form />
        <News />
        <MainVisial />
      </main>
      <footer></footer>
    </>
  )
}

export default Top

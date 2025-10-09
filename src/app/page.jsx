import { Header } from '@/components/layout'
import { Keyvisual } from './_components/keyvisual'
import { Form } from './_components/form'
import { News } from './_components/news'
import { MainVisual } from './_components/mainVisual'

const Top = () => {
  return (
    <>
      <main>
        <Header />
        <Keyvisual />
        <Form />
        <News />
        <MainVisual />
      </main>
    </>
  )
}

export default Top

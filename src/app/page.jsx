import { Header } from '@/components/layout'
import { Keyvisual } from '@/components/Project/Keyvisual'
import { Form } from '@/components/Project/Form'
import { News } from '@/components/Project/news'
import { Group1 } from '@/components/Project/Group1'

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <Keyvisual />
        <Form />
        <News />
        <Group1 />
      </main>
      <footer></footer>
    </>
  )
}

export default Top

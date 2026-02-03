import { Header } from '@/components/layout'
import { Keyvisual } from './_components/Keyvisual'
import { Form } from './_components/Form'
import { Recruitment } from './_components/Recruitment'
import { SubMessage } from './_components/SubMessage'

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <Keyvisual />
        <Form />
        <Recruitment />
        <SubMessage />
      </main>
    </>
  )
}

export default Top

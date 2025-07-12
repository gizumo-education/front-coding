import { Header } from '@/components/layout'
import { Keyvisual } from '@/components/Project/Keyvisual'
import { Form } from '@/components/Project/Form'
import { News } from '@/components/Project/news'
import { MainVisial } from '@/components/Project/MainVisial'
import { Features } from '@/components/Project/Features'
import { FlowSteps } from '@/components/Project/FlowSteps'
import { HelpfulContents } from '@/components/Project/HelpfulContents'
import { JobForm } from '@/components/Project/JobForm'

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <Keyvisual />
        <Form />
        <News />
        <MainVisial />
        <Features />
        <FlowSteps />
        <HelpfulContents />
        <JobForm />
      </main>
      <footer></footer>
    </>
  )
}

export default Top

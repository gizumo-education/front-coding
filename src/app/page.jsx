import { Header } from '@/components/layout'
import { KeyVisual, SearchJobs, NewJobOffers, ServiceInto } from './_components'

const Top = () => {
  return (
    <>
      <main>
        <Header />
        <KeyVisual />
        <SearchJobs />
        <NewJobOffers />
        <ServiceInto />
      </main>
    </>
  )
}

export default Top

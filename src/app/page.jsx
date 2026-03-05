import { Header } from '@/components/layout'
import { KeyVisual, SearchJobs, NewJobOffers } from './_components'

const Top = () => {
  return (
    <>
      <main>
        <Header />
        <KeyVisual />
        <SearchJobs />
        <NewJobOffers />
      </main>
    </>
  )
}

export default Top
